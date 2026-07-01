// ─── PLACEHOLDER IMAGE ────────────────────────────────────────────────────────
// Replace `src` prop with your real image path once assets are ready.
// Example: <PlaceholderImage src={dashboardImg} label="Dashboard" />

interface Props {
  src?: string
  label?: string
  alt?: string
  className?: string
  aspectRatio?: string
}

export default function PlaceholderImage({
  src,
  label = 'Product Image Placeholder',
  alt = 'Product image',
  className = '',
  aspectRatio = 'aspect-video',
}: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-2xl ${className}`}
      />
    )
  }

  return (
    <div
      className={`${aspectRatio} w-full rounded-2xl overflow-hidden relative flex items-center justify-center ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 50%, rgba(244,114,182,0.1) 100%)',
        border: '1px solid rgba(99,102,241,0.25)',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Mock UI elements */}
      <div className="relative z-10 w-4/5 space-y-3">
        <div className="h-2 bg-white/20 rounded-full w-3/4" />
        <div className="h-2 bg-white/15 rounded-full w-full" />
        <div className="h-2 bg-white/10 rounded-full w-1/2" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-lg bg-white/10 border border-white/10" />
          ))}
        </div>
        <div className="h-24 rounded-lg bg-brand-600/20 border border-brand-500/30 mt-2" />
      </div>

      {/* Label badge */}
      <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5">
        <span className="text-xs text-slate-400 font-medium">{label}</span>
      </div>
    </div>
  )
}
