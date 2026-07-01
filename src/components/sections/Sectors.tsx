import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { sectors } from '../../data/content'

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-700/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Hedef Sektörler"
          headline={<>Premium markaların{' '}<span className="text-gradient">tercihi</span></>}
          subtitle="PCD; kuyumcular, lüks markalar, fuar firmaları ve premium perakende için B2B çözüm sunar."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sectors.map((s, i) => (
            <AnimatedSection key={s.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass rounded-2xl p-6 h-full border border-brand-500/15 hover:border-brand-500/40 transition-colors flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-700/40 to-brand-900/60 border border-brand-500/30 flex items-center justify-center text-3xl flex-shrink-0" aria-hidden="true">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-display text-white font-semibold text-lg">{s.name}</p>
                  <p className="text-slate-400 text-sm">{s.detail}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
