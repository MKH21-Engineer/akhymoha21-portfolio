import RevealWrapper from '@/components/ui/RevealWrapper'

export default function About() {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="md:sticky md:top-32">
          <RevealWrapper>
            <div className="aspect-[3/4] bg-neutral-900 border border-neutral-800 rounded-xl
              flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-full bg-neutral-800 border border-neutral-700
                flex items-center justify-center text-2xl font-light text-neutral-300 tracking-tight">
                AK
              </div>
              <p className="text-xs text-neutral-500 tracking-widest">akhymoha21</p>
            </div>
          </RevealWrapper>
        </div>

        <div>
          <RevealWrapper><p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-8">About</p></RevealWrapper>
          <RevealWrapper delay={0.1}>
            <h2 className="text-4xl font-light tracking-tight leading-tight mb-6">
              Motion designer who codes.<br />Developer who moves.
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={0.15}>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Freelance motion designer and front-end developer based in East Africa.
              High-energy motion graphics that sell — brand promos, social ads, conversion videos.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              My work sits at the intersection of engineering precision and visual storytelling.
              Every frame is intentional. Every transition earns its place.
            </p>
          </RevealWrapper>

          <RevealWrapper delay={0.2}>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {[
                { title:'Development', items:['React & Next.js','TypeScript','Tailwind CSS','Framer Motion','Node.js'] },
                { title:'Motion Design', items:['After Effects','Premiere Pro','CapCut Pro','Figma','DaVinci Resolve'] },
              ].map(({ title, items }) => (
                <div key={title} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                  <p className="text-[10px] tracking-widest uppercase text-[#e8ff4a] mb-4 font-medium">{title}</p>
                  <ul className="space-y-1.5">
                    {items.map(i => (
                      <li key={i} className="text-xs text-neutral-400 pl-3 relative before:absolute before:left-0 before:content-['—'] before:text-neutral-600">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.25}>
            <p className="text-[10px] tracking-widest uppercase text-neutral-500 mb-4">Services</p>
            {['Brand Promos & Ads','Social Media Content','Motion Graphics & VFX','Front-End Development','Logo & Brand Animation'].map((s,i) => (
              <div key={s} className="flex items-center justify-between py-4 border-b border-neutral-800
                hover:text-[#e8ff4a] transition-colors cursor-default group">
                <span className="text-sm">{s}</span>
                <span className="text-[11px] text-neutral-600 group-hover:text-[#e8ff4a] transition-colors">0{i+1}</span>
              </div>
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
