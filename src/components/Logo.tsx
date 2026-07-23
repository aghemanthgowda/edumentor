export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#9B82FF" />
            <stop offset="1" stopColor="#5B3FE0" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="#141417" />
        <path d="M32 16 L52 25 L32 34 L12 25 Z" fill="url(#logoGrad)" />
        <path
          d="M20 29 L20 39 C20 43 26 46 32 46 C38 46 44 43 44 39 L44 29"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="52"
          y1="25"
          x2="52"
          y2="37"
          stroke="#9B82FF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-white">
        Edu<span className="text-violet-soft">Mentor</span>
      </span>
    </span>
  );
}
