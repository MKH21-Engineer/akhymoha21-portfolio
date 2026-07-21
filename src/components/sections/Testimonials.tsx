import RevealWrapper from '@/components/ui/RevealWrapper'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-8 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <RevealWrapper>
          <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-12">Testimonials</p>
        </RevealWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800">
          <RevealWrapper>
            <div className="bg-neutral-950 p-8 h-full">
              <p className="text-4xl text-neutral-700 font-serif mb-4">&ldquo;</p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Delivered the Jumia campaign 48 hours ahead of schedule.
                The energy and precision in his edits are unmatched. Will hire again.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700
                  flex items-center justify-center text-[11px] text-neutral-400 font-medium">AM</div>
                <div>
                  <p className="text-xs font-medium text-neutral-200">Amara M.</p>
                  <p className="text-[11px] text-neutral-500">Marketing Lead, Jumia KE</p>
                </div>
              </div>
            </div>
          </RevealWrapper>

           <RevealWrapper>
            <div className="bg-neutral-950 p-8 h-full">
              <p className="text-4xl text-neutral-700 font-serif mb-4">&ldquo;</p>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
               Working with Muhammed Motion Graphics Designer was an excellent experience.
               He is creative, reliable, and highly professional. I confidently recommend him to anyone looking for quality design work
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700
                  flex items-center justify-center text-[11px] text-neutral-400 font-medium">BW</div>
                <div>
                  <p className="text-xs font-medium text-neutral-200">Bazarin Wanyoro</p>
                  <p className="text-[11px] text-neutral-500">CEO & Founder ,Palpluss</p>
                </div>
              </div>
            </div>
          </RevealWrapper>
          {[2,3].map(n => (
            <RevealWrapper key={n} delay={n * 0.1}>
              <div className="bg-neutral-950 p-8 h-full flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <p className="text-2xl text-neutral-700 mb-3">★</p>
                  <p className="text-xs text-neutral-600 tracking-widest">Testimonial coming soon</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}