import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name:    z.string().min(2).max(80),
  email:   z.string().email(),
  type:    z.string().optional(),
  message: z.string().min(2).max(2000), // lowered min to 2 for testing
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      // Resend requires a verified domain in the from field.
      // Use their default sandbox address until you verify your domain.
      from: 'onboarding@resend.dev',
      // Resend free tier only allows sending TO the account owner's email.
      // Replace with the email you signed up to Resend with.
      to: process.env.CONTACT_EMAIL!,
      replyTo: data.email,
      subject: `New inquiry from ${data.name} — ${data.type ?? 'General'}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Service: ${data.type ?? 'Not specified'}`,
        ``,
        `Message:`,
        data.message,
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    if (err instanceof z.ZodError)
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}