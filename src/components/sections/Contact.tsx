'use client'
import { useState } from 'react'
import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', type:'', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function submit() {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
      if (res.ok) setForm({ name:'', email:'', type:'', message:'' })
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
        <div>
          <RevealWrapper>
            <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-8">Get in Touch</p>
            <h2 className="text-5xl font-light tracking-tight leading-tight mb-10">
              Let&apos;s build something<br />that moves.
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.1}>
            {[
              { label:'Instagram', val:'@akhymoha21', href:'https://instagram.com/akhymoha21' },
              { label:'Email',     val:'akhymoha21@gmail.com', href:'mailto:akhymoha21@gmail.com' },
              { label:'Book a Call', val:'via Calendly', href:'#' },
            ].map(({ label, val, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                className="flex items-center justify-between py-5 border-b border-neutral-800
                  text-neutral-100 hover:text-[#e8ff4a] transition-colors group">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-1">{label}</p>
                  <p className="text-sm">{val}</p>
                </div>
                <span className="text-neutral-500 group-hover:text-[#e8ff4a] group-hover:-rotate-45 transition-all">↗</span>
              </a>
            ))}
          </RevealWrapper>
        </div>

        <RevealWrapper delay={0.15}>
          <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-6">Send a Message</p>
          <div className="space-y-4">
            {([['name','Name','Your name'],['email','Email','your@email.com']] as const).map(([id,label,ph]) => (
              <div key={id}>
                <label className="text-[10px] tracking-widest uppercase text-neutral-500 block mb-2">{label}</label>
                <input value={form[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                  placeholder={ph} type={id === 'email' ? 'email' : 'text'}
                  className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 text-sm
                    px-4 py-3 rounded-lg outline-none focus:border-neutral-500 placeholder:text-neutral-600" />
              </div>
            ))}
            <div>
              <label className="text-[10px] tracking-widest uppercase text-neutral-500 block mb-2">Project Type</label>
              <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 text-sm
                  px-4 py-3 rounded-lg outline-none focus:border-neutral-500">
                <option value="">Select a service…</option>
                {['Brand Promo','Social Media Content','Motion Graphics','Front-End Development','Other'].map(o => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-[10px] tracking-widest uppercase text-neutral-500 block mb-2">Message</label>
              <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project…" rows={4}
                className="w-full bg-neutral-900 border border-neutral-700 text-neutral-100 text-sm
                  px-4 py-3 rounded-lg outline-none focus:border-neutral-500 placeholder:text-neutral-600 resize-none" />
            </div>
            {status === 'sent' && <p className="text-xs text-[#e8ff4a]">✓ Message sent! I&apos;ll reply within 24h.</p>}
            {status === 'error' && <p className="text-xs text-red-400">Something went wrong. Try emailing directly.</p>}
            <button onClick={submit} disabled={status === 'sending'}
              className="w-full bg-[#e8ff4a] text-black px-6 py-3.5 rounded-lg text-sm font-medium
                hover:bg-[#b8cc30] transition-colors flex items-center justify-between disabled:opacity-50">
              <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
              <span>→</span>
            </button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}