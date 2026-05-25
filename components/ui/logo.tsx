import Link from "next/link";

// Stacked two-line wordmark (à la wire agency)
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Devpill home"
      className={`group inline-flex flex-col leading-[0.85] ${className}`}
    >
      <span className="font-display text-xl sm:text-2xl font-bold tracking-tight lowercase text-white">
        devpill
      </span>
      <span className="font-display text-xl sm:text-2xl font-bold tracking-tight lowercase text-white">
        agency
        <span className="ml-0.5 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-brand-400 shadow-[0_0_14px_rgba(89,193,255,0.9)]" />
      </span>
    </Link>
  );
}
