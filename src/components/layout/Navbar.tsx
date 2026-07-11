import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { brand } from '../../data/content'
import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'Nasıl Çalışır', href: '#how-it-works' },
  { label: 'Modeller', href: '#models' },
  { label: 'Özel Projeler', href: '#projects' },
  { label: 'Referanslar', href: '#references' },
  { label: 'Sektörler', href: '#sectors' },
  { label: 'SSS', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-lg"
          >
            <img
              src={logo}
              alt={brand.fullName}
              className="h-10 md:h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Ana menü">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm text-slate-300 hover:text-brand-300 transition-colors rounded-lg hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram: ${brand.instagram}`}
              className="text-sm text-slate-300 hover:text-brand-300 transition-colors px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-lg"
            >
              {brand.instagram}
            </a>
            <Button href="#contact" size="sm">
              {brand.ctaPrimary}
            </Button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-slate-300 hover:text-brand-300 hover:bg-white/5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Instagram: ${brand.instagram}`}
                  className="text-center text-sm text-brand-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-lg"
                >
                  {brand.instagram}
                </a>
                <Button href="#contact" className="w-full justify-center">
                  {brand.ctaPrimary}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
