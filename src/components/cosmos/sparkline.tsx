interface SparklineProps {
  data?: number[];
  w?: number;
  h?: number;
  gradId?: string;
}

const DEFAULT_DATA = [22, 28, 25, 31, 30, 36, 34, 42, 40, 48, 46, 52];

export function Sparkline({
  data = DEFAULT_DATA,
  w = 260,
  h = 64,
  gradId = "spark-aurora",
}: SparklineProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const stepX = w / (data.length - 1);
  const norm = (v: number) =>
    h - 4 - ((v - min) / (max - min || 1)) * (h - 16);
  const path = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${norm(v)}`)
    .join(" ");
  const lastX = (data.length - 1) * stepX;
  const lastV = data[data.length - 1] ?? 0;
  const lastY = norm(lastV);
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7B5BFF" />
          <stop offset="50%" stopColor="#4F8CFF" />
          <stop offset="100%" stopColor="#5FE4FF" />
        </linearGradient>
        <linearGradient id={`${gradId}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(79,140,255,0.25)" />
          <stop offset="100%" stopColor="rgba(79,140,255,0)" />
        </linearGradient>
      </defs>
      <path d={`${path} L ${lastX} ${h} L 0 ${h} Z`} fill={`url(#${gradId}-fill)`} />
      <path
        d={path}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="3.5" fill="#5FE4FF" />
      <circle cx={lastX} cy={lastY} r="7" fill="#5FE4FF" opacity="0.25" />
    </svg>
  );
}
