interface OrbitalRingProps {
  size?: number;
  /** Percentage 0–100. */
  value?: number;
  stroke?: number;
  gradId?: string;
  from?: string;
  via?: string;
  to?: string;
}

/**
 * Circular progress ring with an aurora-style gradient stroke.
 * The default palette traces the cosmos accents (violet→blue→cyan)
 * but you can pass custom hex stops for plan-specific colors.
 */
export function OrbitalRing({
  size = 120,
  value = 78,
  stroke = 6,
  gradId = "aurora-default",
  from = "#7B5BFF",
  via = "#4F8CFF",
  to = "#5FE4FF",
}: OrbitalRingProps) {
  const r = (size - stroke) / 2;
  const c = Math.PI * 2 * r;
  const off = c * (1 - Math.min(Math.max(value, 0), 100) / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="50%" stopColor={via} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={off}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}
