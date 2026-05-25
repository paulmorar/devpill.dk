export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative pt-40 sm:pt-48 pb-20">
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
      <div className="container-wide">
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </div>
        <h1 className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1]">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-lg text-slate-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
