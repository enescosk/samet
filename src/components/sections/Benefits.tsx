import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { benefits } from '../../data/content'

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Neden Havada?"
          headline={<>Sıradan değil,{' '}<span className="text-gradient">manyetik</span></>}
          subtitle="Klasik stantlar ürünü gösterir; PCD onu sahneye çıkarır. Havada dönen ürün, dikkati ilk saniyede çeker."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass rounded-2xl p-6 h-full border border-brand-500/15 hover:border-brand-500/40 transition-colors"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{p.icon}</div>
                <h3 className="font-display text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
