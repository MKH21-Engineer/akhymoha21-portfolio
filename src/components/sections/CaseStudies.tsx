import RevealWrapper from '@/components/ui/RevealWrapper'
import type { Project } from '@/types/project'

const CASES = [
  { id:'starbucks', num:'01', icon:'SB', bg:'#00704A', label:'Starbucks', sub:'Billion Brand Promo',
    title:'$98.34B Brand — Motion-first campaign', views:'128',
    desc:'High-impact promo conveying Starbucks premium positioning through kinetic typography and product animation.',
    tags:['Brand Promo','Motion Graphics','Typography'],
    steps:[{l:'Challenge',v:'Premium feel'},{l:'Process',v:'Kinetic type'},{l:'Result',v:'128 views'}] },
  { id:'jumia', num:'02', icon:'JM', bg:'#f68b1e', label:'Jumia', sub:'E-commerce Campaign',
    title:"Africa's #1 Marketplace — Dynamic campaign", views:'172',
    desc:'Energetic, conversion-focused motion content with bold graphic identity and rapid-fire edits.',
    tags:['E-commerce','Social Ads','After Effects'],
    steps:[{l:'Challenge',v:'Drive clicks'},{l:'Process',v:'Bold frames'},{l:'Result',v:'172 views'}] },
  { id:'social', num:'03', icon:'IG', bg:'#833ab4', label:'Social Media', sub:'Content Series',
    title:'Scrollstopping content — Reel-native motion', views:'235',
    desc:'A series of Reels-first motion pieces engineered to stop the scroll with hook-first design.',
    tags:['Reels','Short-Form','Hooks'],
    steps:[{l:'Challenge',v:'Stop scroll'},{l:'Process',v:'Hook-first'},{l:'Result',v:'235 views'}] },
  { id:'client', num:'04', icon:'CL', bg:'#1da1f2', label:'Client Testimonials', sub:'Conversion Content',
    title:'Trust-building motion — Client-led narratives', views:'147',
    desc:'Polished testimonial and brand-story videos that move viewers from awareness to trust.',
    tags:['Testimonial','Brand Story','Conversion'],
    steps:[{l:'Challenge',v:'Build trust'},{l:'Process',v:'Warm pacing'},{l:'Result',v:'147 views'}] },
]

export default function CaseStudies({ projects: _ }: { projects: Project[] }) {
  return (
    <section id="case-studies" className="py-24 px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <RevealWrapper>
          <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-12">Case Studies</p>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">
          {CASES.map(c => (
            <RevealWrapper key={c.id}>
              <div className="bg-neutral-950 p-10 relative group cursor-pointer hover:bg-neutral-900 transition-colors">
                <p className="text-[11px] tracking-widest text-neutral-600 mb-6">{c.num} / 04</p>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: c.bg }}>{c.icon}</div>
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-neutral-500">{c.label}</p>
                    <p className="text-xs font-medium text-neutral-300">{c.sub}</p>
                  </div>
                </div>
                <h3 className="text-xl font-light tracking-tight leading-snug mb-3">{c.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-5">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {c.tags.map(t => (
                    <span key={t} className="text-[10px] tracking-wide uppercase border border-neutral-700
                      text-neutral-500 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {c.steps.map(s => (
                    <div key={s.l} className="bg-neutral-900 rounded-lg p-3">
                      <p className="text-[10px] text-neutral-500 uppercase tracking-wide mb-1">{s.l}</p>
                      <p className="text-xs font-medium text-neutral-200">{s.v}</p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-6 right-6 w-7 h-7 rounded-full border border-neutral-700
                  flex items-center justify-center text-neutral-500 text-xs
                  group-hover:border-[#e8ff4a] group-hover:text-[#e8ff4a] group-hover:rotate-45 transition-all">
                  ↗
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}