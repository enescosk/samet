import AnimatedSection from './AnimatedSection'

interface Props {
  overline: string
  headline: React.ReactNode
  subtitle?: string
  className?: string
  bottomMargin?: string
}

export default function SectionHeader({
  overline,
  headline,
  subtitle,
  className = '',
  bottomMargin = 'mb-16',
}: Props) {
  return (
    <AnimatedSection className={`text-center ${bottomMargin} ${className}`}>
      <p className="text-brand-400 font-semibold text-sm uppercase tracking-[0.25em] mb-3">{overline}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">{headline}</h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </AnimatedSection>
  )
}
