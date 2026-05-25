export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-white/10 py-8 overflow-hidden">
      <div className="flex w-max whitespace-nowrap gap-12 font-display text-3xl sm:text-5xl text-slate-200 animate-marquee will-change-transform">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            {item}
            <span className="h-2 w-2 rounded-full bg-brand-400" />
          </span>
        ))}
      </div>
    </section>
  );
}
