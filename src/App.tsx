import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Benefits from './components/sections/Benefits'
import HowItWorks from './components/sections/HowItWorks'
import Features from './components/sections/Features'
import Models from './components/sections/Models'
import Showcase from './components/sections/Showcase'
import References from './components/sections/References'
import Sectors from './components/sections/Sectors'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 })

  return (
    <div className="min-h-screen bg-ink-900 text-white overflow-x-hidden">
      <motion.div
        aria-hidden="true"
        style={{ scaleX, willChange: 'transform' }}
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 origin-left z-[100]"
      />

      <Navbar />

      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Features />
        <Models />
        <Showcase />
        <References />
        <Sectors />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}
