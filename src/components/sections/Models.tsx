import { motion } from 'framer-motion'
import { Move3d } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import SectionHeader from '../ui/SectionHeader'
import { products } from '../../data/content'

export default function Models() {
  return (
    <section id="models" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-brand-800/25 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Ürün Modelleri"
          headline={<>Her ürüne özel{' '}<span className="text-gradient">bir model</span></>}
          subtitle="Yüzükten çantaya, parfümden fuar maketine kadar her ağırlık ve yükseklik için uygun seçenek."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
          {products.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className={`relative rounded-2xl overflow-hidden h-full flex flex-col ${
                  p.highlighted
                    ? 'bg-gradient-to-b from-brand-600/25 to-brand-900/40 border-2 border-brand-500/60 shadow-2xl shadow-brand-700/20'
                    : 'glass border border-brand-500/15 hover:border-brand-500/40'
                } transition-colors`}
              >
                {p.highlighted && (
                  <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-brand-300 to-brand-600 text-ink-900 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                    Popüler
                  </div>
                )}

                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
                  <div className="absolute inset-0 spotlight pointer-events-none z-10" />
                  <img
                    src={p.image}
                    alt={`${p.name} manyetik levitasyon standı, ${p.height} uçuş yüksekliği`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-900 to-transparent z-10" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-white font-bold text-2xl tracking-tight">{p.name}</h3>
                    <div className="flex items-center gap-1 text-brand-300 text-xs font-medium">
                      <Move3d size={14} aria-hidden="true" />
                      <span>{p.height}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{p.description}</p>

                  <div className="text-[11px] uppercase tracking-wider text-brand-400/80 mb-2">
                    Kapasite · {p.capacity}
                  </div>

                  <ul className="space-y-1.5 flex-1 mb-5">
                    {p.uses.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-slate-300 text-sm">
                        <span className="w-1 h-1 rounded-full bg-brand-400" aria-hidden="true" />
                        {u}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#contact"
                    variant={p.highlighted ? 'primary' : 'secondary'}
                    size="sm"
                    className="w-full justify-center"
                  >
                    Teklif Al
                  </Button>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
