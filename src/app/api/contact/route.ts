import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2).max(80),
  email:   z.string().email(),
  type:    z.string().optional(),
  message: z.string().min(10).max(2000),
})

export async function POST(req: NextRequest) {
  try {
    // ✅ Moved inside handler — only runs at request time, not build time
    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from:    'portfolio@akhymoha21.com',
      to:      process.env.CONTACT_EMAIL!,
      subject: `New inquiry from ${data.name} — ${data.type ?? 'General'}`,
      text:    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError)
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}