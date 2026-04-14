interface HeroProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function Hero({ eyebrow, title, titleAccent, subtitle, children }: HeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(40,123,232,0.12) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 40% at 80% 30%, rgba(111,242,193,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-[920px] mx-auto px-6 md:px-10">
        {eyebrow && (
          <p className="text-mint text-[11px] font-bold tracking-[0.15em] uppercase mb-5 font-mono">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-white font-extrabold leading-[1.08] tracking-tight mb-5"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          {title}
          {titleAccent && (
            <span className="text-mint"> {titleAccent}</span>
          )}
        </h1>
        {subtitle && (
          <p
            className="text-white/55 max-w-[600px] leading-relaxed"
            style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-wrap gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
