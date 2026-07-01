import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { steps } from '../../data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Nasıl Çalışır"
          headline={<>Manyetik alan,{' '}<span className="text-gradient">temassız sergileme</span></>}
          subtitle="Standın içindeki elektromanyetik modül, ürünün altındaki özel mıknatısı havada dengede tutar."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 h-0.5 w-2/3 bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15} className="relative">
                <div className="text-center group">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-ink-900 font-display font-bold text-xl mb-6 shadow-lg shadow-brand-600/30 group-hover:shadow-brand-500/50 transition-shadow mx-auto">
                    {step.number}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="font-display text-white font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden sm:flex lg:hidden absolute top-8 -right-4 text-brand-500 text-xl z-10">
                    →
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
