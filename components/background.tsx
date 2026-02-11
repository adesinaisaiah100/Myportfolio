export function Background() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-background">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 0.5px, transparent 0)',
          backgroundSize: '24px 24px',
          opacity: 0.07,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, var(--background) 70%)',
        }}
      />
    </div>
  )
}
