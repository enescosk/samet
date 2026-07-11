import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { references } from '../../data/content'

export default function References() {
  if (references.length === 0) return null

  return (
    <section id="references" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-700/15 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Referanslar"
          headline={<>Birlikte çalıştığımız{' '}<span className="text-gradient">markalar</span></>}
          subtitle="Kurumsal firmalardan butik markalara — PCD çözümlerine güvenen iş ortaklarımızdan bazıları."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {references.map((r, i) => {
            const CardTag = r.url ? motion.a : motion.div
            return (
              <AnimatedSection key={r.name} delay={i * 0.05}>
                <CardTag
                  {...(r.url
                    ? { href: r.url, target: '_blank', rel: 'noreferrer' }
                    : {})}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className="group block h-full rounded-2xl overflow-hidden glass border border-brand-500/15 hover:border-brand-500/40 transition-colors"
                >
                  {r.image && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                      <img
                        src={r.image}
                        alt={`${r.name} projesi`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                    </div>
                  )}

                  <div className="p-6 flex flex-col gap-3">
                    <div className="h-10 flex items-center">
                      {r.logo ? (
                        <img
                          src={r.logo}
                          alt={r.name}
                          loading="lazy"
                          className="max-h-10 w-auto max-w-[70%] object-contain"
                        />
                      ) : (
                        <span className="font-display text-white font-semibold text-xl">
                          {r.name}
                        </span>
                      )}
                    </div>
                    {r.description && (
                      <p className="text-slate-400 text-sm leading-relaxed">{r.description}</p>
                    )}
                  </div>
                </CardTag>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
