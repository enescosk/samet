import { motion } from 'framer-motion'

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = BaseProps & { href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>
type ButtonAsAnchor = BaseProps & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps>

type Props = ButtonAsButton | ButtonAsAnchor

export default function Button({ variant = 'primary', size = 'md', children, className = '', href, ...props }: Props) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900'

  const variants = {
    primary:
      'bg-gradient-to-r from-brand-400 to-brand-600 hover:from-brand-300 hover:to-brand-500 text-ink-900 shadow-lg shadow-brand-700/30 hover:shadow-brand-500/40',
    secondary:
      'glass-light text-white hover:bg-white/10 border border-brand-500/30 hover:border-brand-400/60',
    ghost: 'text-slate-300 hover:text-brand-300 hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cls}
        {...(props as unknown as React.ComponentProps<typeof motion.a>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      {...(props as unknown as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}
