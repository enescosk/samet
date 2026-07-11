import { Mail } from 'lucide-react'
import { brand } from '../../data/content'
import logo from '../../assets/logo.png'

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

const footerLinks = [
  { label: 'Nasıl Çalışır', href: '#how-it-works' },
  { label: 'Modeller', href: '#models' },
  { label: 'Özel Projeler', href: '#projects' },
  { label: 'Sektörler', href: '#sectors' },
  { label: 'SSS', href: '#faq' },
  { label: 'İletişim', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-brand-500/15 py-14 bg-gradient-to-b from-transparent to-ink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt={brand.fullName}
                className="h-12 w-auto opacity-80"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {brand.short}
            </p>
            <p className="font-display text-gradient text-xl mt-4">"Uçuruyoruz."</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-brand-300 text-xs uppercase tracking-[0.25em] mb-4">Menü</p>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-400 hover:text-brand-300 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-brand-300 text-xs uppercase tracking-[0.25em] mb-4">İletişim</p>
            <div className="space-y-3 text-sm">
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-300 transition-colors"
              >
                <Instagram size={16} /> {brand.instagram}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-300 transition-colors"
              >
                <Mail size={16} /> {brand.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-500/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} {brand.fullName}. Tüm hakları saklıdır.
          </p>
          <p className="text-slate-600 text-xs">
            Manyetik levitasyon vitrin ve stant sistemleri.
          </p>
        </div>
      </div>
    </footer>
  )
}
