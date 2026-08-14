export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="animate-blob absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />
      <div
        className="animate-blob absolute top-1/3 -right-24 h-[34rem] w-[34rem] rounded-full opacity-30 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', animationDelay: '4s' }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', animationDelay: '8s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)',
        }}
      />
    </div>
  )
}
