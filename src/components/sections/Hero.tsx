import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import CanvasErrorBoundary from '../ui/CanvasErrorBoundary'
import { brand } from '../../data/content'

const LogoCanvas = lazy(() => import('../ui/LogoCanvas'))

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Spotlight from above */}
      <div className="absolute inset-0 spotlight pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'strict' }}>
        <div className="absolute -top-32 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-600/15 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[350px] h-[350px] rounded-full bg-brand-800/25 blur-[90px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass border border-brand-500/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles size={14} className="text-brand-400" aria-hidden="true" />
              <span className="text-xs font-medium text-brand-300 tracking-wide">
                Türkiye'nin manyetik levitasyon stantları öncüsü
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              Ürünlerinizi{' '}
              <span className="text-gradient">Havada</span>{' '}
              Sergileyin
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {brand.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button href="#contact" size="lg">
                {brand.ctaPrimary}
              </Button>
              <Button href="#models" variant="secondary" size="lg">
                {brand.ctaSecondary}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 justify-center lg:justify-start mt-10 pt-8 border-t border-brand-500/10"
            >
              {[
                { value: '7', label: 'Model' },
                { value: '8 cm', label: 'Maks. Uçuş' },
                { value: 'B2B', label: 'Satış & Kira' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-gold">{stat.value}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D logo */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative aspect-square max-w-[520px] mx-auto"
            >
              {/* Ambient glow backdrop — radial gradient via inline style (no Tailwind plugin needed) */}
              <div
                className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(200,162,74,0.20) 0%, rgba(134,104,38,0.08) 50%, transparent 70%)',
                }}
              />

              {/* 3D logo canvas — fills the square */}
              <div className="absolute inset-0">
                <CanvasErrorBoundary>
                  <Suspense fallback={null}>
                    <LogoCanvas />
                  </Suspense>
                </CanvasErrorBoundary>
              </div>

              {/* Levitation shadow synced to 4 s float cycle */}
              <motion.div
                animate={{ scaleX: [1, 0.82, 1], opacity: [0.40, 0.18, 0.40] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ willChange: 'transform, opacity' }}
                className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[42%] h-5 levitation-shadow"
              />

              {/* Floating info chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-2 top-1/3 glass-light rounded-2xl px-4 py-2.5 shadow-xl hidden md:block"
              >
                <p className="text-[10px] text-brand-400/80 uppercase tracking-wider">Uçuş</p>
                <p className="text-sm font-display font-bold text-white">4 cm havada</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -right-2 bottom-1/3 glass-light rounded-2xl px-4 py-2.5 shadow-xl hidden md:block"
              >
                <p className="text-[10px] text-brand-400/80 uppercase tracking-wider">Hareket</p>
                <p className="text-sm font-display font-bold text-white">360° dönüş</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
