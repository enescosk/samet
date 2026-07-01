import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { projects } from '../../data/content'

export default function Showcase() {
  const [active, setActive] = useState(0)
  const current = projects[active]

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] rounded-full bg-brand-800/15 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Özel Projeler"
          headline={<>Markaya özel{' '}<span className="text-gradient">vitrin sahneleri</span></>}
          subtitle="Kuyumcudan diş kliniğine, fuardan kafeye — markanın diline uyan tasarımlar ile farklılaşın."
          bottomMargin="mb-12"
        />

        <AnimatedSection delay={0.1}>
          <div role="tablist" aria-label="Proje kategorileri" className="flex justify-center gap-2 mb-10 flex-wrap">
          {projects.map((img, i) => (
            <button
              key={img.label}
              role="tab"
              aria-selected={active === i}
              aria-controls="showcase-panel"
              onClick={() => setActive(i)}
              className={`min-h-[44px] px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 ${
                active === i
                  ? 'bg-gradient-to-r from-brand-400 to-brand-600 text-ink-900 shadow-lg shadow-brand-600/30'
                  : 'glass border border-brand-500/15 text-slate-300 hover:text-brand-300'
              }`}
            >
              {img.label}
            </button>
          ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            id="showcase-panel"
            role="tabpanel"
            className="relative rounded-3xl overflow-hidden border border-brand-500/20 shadow-2xl ring-gold"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="relative aspect-[16/9] bg-ink-800"
              >
                <img
                  src={current.src}
                  alt={current.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <p className="text-brand-300 text-xs uppercase tracking-[0.3em] mb-2">Proje</p>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                    {current.label}
                  </h3>
                  <p className="text-slate-300/90 max-w-2xl">{current.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Mini gallery thumbnails */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
          {projects.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              aria-label={p.label}
              aria-pressed={active === i}
              className={`relative aspect-square rounded-xl overflow-hidden border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 focus-visible:ring-offset-ink-900 ${
                active === i
                  ? 'border-brand-400 ring-2 ring-brand-500/40'
                  : 'border-brand-500/10 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={p.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
