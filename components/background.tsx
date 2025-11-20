export function Background() {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-background">
      {/* Center subtle gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-[300px] pointer-events-none" />
      
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[300px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[300px] translate-y-1/2 translate-x-1/4 pointer-events-none" />
    </div>
  )
}
