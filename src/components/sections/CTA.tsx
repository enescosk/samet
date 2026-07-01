import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Send } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'
import { brand } from '../../data/content'

function Instagram({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  )
}

const purposes = ['Satın Alma', 'Kiralama', 'Özel Proje']

export default function CTA() {
  const [purpose, setPurpose] = useState(purposes[0])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    if (brand.formEndpoint) {
      try {
        const res = await fetch(brand.formEndpoint, {
          method: 'POST',
          body: new FormData(e.currentTarget),
          headers: { Accept: 'application/json' },
        })
        if (res.ok) {
          setSubmitted(true)
        } else {
          setError(true)
        }
      } catch {
        setError(true)
      }
    } else {
      // Endpoint tanımlanmamış — mailto fallback
      const data = new FormData(e.currentTarget)
      const body = Array.from(data.entries())
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
      window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent('PCD Teklif Talebi')}&body=${encodeURIComponent(body)}`
      setSubmitted(true)
    }

    setSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] rounded-full bg-brand-700/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden ring-gold">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-700/20 via-ink-800 to-ink-900 border border-brand-500/30 rounded-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 p-8 lg:p-14">
              {/* Left: pitch */}
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 mb-6 shadow-xl shadow-brand-700/30"
                  aria-hidden="true"
                >
                  <Send className="text-ink-900" size={22} />
                </motion.div>

                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
                  Vitrininizi{' '}
                  <span className="text-gradient">uçuralım</span>
                </h2>

                <p className="text-slate-300/80 text-lg mb-8 max-w-md">
                  Sergilemek istediğiniz ürünü ve ihtiyacınızı paylaşın — size en uygun modeli, tasarımı ve fiyatı önerelim.
                </p>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-brand-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-lg"
                  >
                    <span className="w-9 h-9 rounded-lg glass border border-brand-500/20 flex items-center justify-center" aria-hidden="true">
                      <Mail size={16} className="text-brand-400" />
                    </span>
                    {brand.email}
                  </a>
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Instagram: ${brand.instagram}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-brand-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-lg"
                  >
                    <span className="w-9 h-9 rounded-lg glass border border-brand-500/20 flex items-center justify-center text-brand-400" aria-hidden="true">
                      <Instagram size={16} />
                    </span>
                    {brand.instagram}
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="glass-light rounded-2xl p-6 lg:p-8 border border-brand-500/20">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center mb-4" aria-hidden="true">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="font-display text-2xl text-white font-bold mb-2">Teşekkürler!</h3>
                    <p className="text-slate-400">1 iş günü içinde size ulaşacağız.</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input label="Ad Soyad" name="name" placeholder="Adınız soyadınız" required />
                      <Input label="Firma" name="company" placeholder="Firma adı" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input label="Telefon" name="phone" type="tel" placeholder="+90" />
                      <Input label="E-posta" name="email" type="email" placeholder="ornek@firma.com" required />
                    </div>
                    <Input label="Sektör" name="sector" placeholder="Kuyumcu, kozmetik, fuar..." />
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Input label="Sergilenecek Ürün" name="product" placeholder="Parfüm, yüzük, maket..." />
                      <Input label="Yaklaşık Ağırlık" name="weight" placeholder="örn. 200 g" />
                    </div>

                    <fieldset>
                      <legend className="block text-xs uppercase tracking-wider text-brand-300/80 mb-2">
                        Kullanım Amacı
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {purposes.map((p) => (
                          <button
                            key={p}
                            type="button"
                            aria-pressed={purpose === p}
                            onClick={() => setPurpose(p)}
                            className={`min-h-[44px] px-4 py-2 rounded-lg text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                              purpose === p
                                ? 'bg-gradient-to-r from-brand-400 to-brand-600 text-ink-900'
                                : 'bg-white/5 text-slate-300 border border-brand-500/15 hover:border-brand-500/40'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-brand-300/80 mb-2">
                        Mesaj
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Projenizden bahsedin..."
                        className="w-full bg-ink-800/60 border border-brand-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 transition-colors resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-400" role="alert">
                        Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin veya doğrudan e-posta ile ulaşın.
                      </p>
                    )}

                    <Button type="submit" size="md" className="w-full justify-center" disabled={submitting}>
                      {submitting ? 'Gönderiliyor…' : 'Teklif Gönder'}
                      {!submitting && <ArrowRight size={16} aria-hidden="true" />}
                    </Button>
                    <p className="text-[11px] text-slate-500 text-center">
                      Bilgileriniz yalnızca size geri dönüş için kullanılır.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Input({
  label,
  name,
  id,
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  const inputId = id ?? name
  return (
    <div>
      <label htmlFor={inputId} className="block text-xs uppercase tracking-wider text-brand-300/80 mb-2">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        {...rest}
        className="w-full bg-ink-800/60 border border-brand-500/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-400/50 focus:border-brand-400 transition-colors"
      />
    </div>
  )
}
