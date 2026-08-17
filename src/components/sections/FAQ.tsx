import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { faqs } from '../../data/content'

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="text-white font-medium">
        {part.slice(2, -2).trim()}
      </strong>
    ) : (
      part
    )
  )
}

function AnswerBody({ answer }: { answer: string }) {
  if (!answer.includes('\n')) {
    return <p className="px-6 pb-5 text-slate-400 leading-relaxed">{answer}</p>
  }

  const lines = answer.split('\n').filter((line) => line.trim() !== '')

  return (
    <div className="px-6 pb-5 text-slate-400 leading-relaxed space-y-3">
      {lines.map((line, i) => {
        const trimmed = line.trim()
        if (trimmed.startsWith('### ')) {
          return (
            <p key={i} className="font-display text-white font-medium pt-1">
              {trimmed.slice(4)}
            </p>
          )
        }
        if (trimmed.startsWith('* ')) {
          return (
            <p key={i} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-brand-400">
              {renderInline(trimmed.slice(2))}
            </p>
          )
        }
        return <p key={i}>{renderInline(trimmed)}</p>
      })}
    </div>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-btn-${index}`

  return (
    <AnimatedSection delay={index * 0.05}>
      <motion.div
        className={`glass rounded-2xl border transition-colors ${open ? 'border-brand-500/50' : 'border-brand-500/10 hover:border-brand-500/30'}`}
      >
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:rounded-2xl"
        >
          <span className="font-display text-white font-medium pr-4">{question}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 text-brand-400"
            aria-hidden="true"
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <AnswerBody answer={answer} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="SSS"
          headline={<>Sıkça sorulan{' '}<span className="text-gradient">sorular</span></>}
          bottomMargin="mb-14"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
