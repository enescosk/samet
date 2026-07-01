import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { features } from '../../data/content'

// Presentational gradient/border palette — rotated by index, uses brand-* tokens
const FEATURE_COLORS = [
  { color: 'from-brand-400/15 to-brand-600/10', border: 'border-brand-400/30' },
  { color: 'from-brand-300/15 to-brand-500/10', border: 'border-brand-300/30' },
  { color: 'from-brand-500/15 to-brand-700/10', border: 'border-brand-500/30' },
  { color: 'from-brand-600/15 to-brand-400/10', border: 'border-brand-600/30' },
  { color: 'from-brand-400/20 to-brand-700/10', border: 'border-brand-400/40' },
  { color: 'from-brand-700/15 to-brand-500/10', border: 'border-brand-700/30' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[550px] h-[400px] rounded-full bg-brand-900/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Neden PCD?"
          headline={<>Vitrin değil,{' '}<span className="text-gradient">prestij sahnesi</span></>}
          subtitle="Hazır cihaz, özel tasarım, kiralama ve anahtar teslim kurulum — markanızın ihtiyacı olan her şey tek elden."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const { color, border } = FEATURE_COLORS[i % FEATURE_COLORS.length]
            return (
              <AnimatedSection key={feat.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                  className={`relative rounded-2xl p-6 h-full overflow-hidden border ${border} bg-gradient-to-br ${color} group`}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                  <div className="text-4xl mb-4" aria-hidden="true">{feat.icon}</div>
                  <h3 className="font-display text-white font-semibold text-xl mb-2">{feat.title}</h3>
                  <p className="text-slate-300/80 text-sm leading-relaxed">{feat.description}</p>
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
