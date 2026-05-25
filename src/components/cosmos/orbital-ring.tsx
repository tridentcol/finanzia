"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitalRingProps {
  /** 0 to 1+ (over 1 means over-budget; rendered with warning color) */
  progress: number;
  size?: number;
  thickness?: number;
  label?: string;
  sublabel?: string;
  className?: string;
}

export function OrbitalRing({
  progress,
  size = 144,
  thickness = 8,
  label,
  sublabel,
  className,
}: OrbitalRingProps) {
  const clamped = Math.max(0, Math.min(progress, 1.5));
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const visibleProgress = Math.min(clamped, 1);
  const dash = circumference * visibleProgress;
  const over = clamped > 1;

  const stroke = over ? "var(--color-coral-negative)" : "url(#orbital-gradient)";

  return (
    <div
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="orbital-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-nebula-violet)" />
            <stop offset="50%" stopColor="var(--color-nebula-blue)" />
            <stop offset="100%" stopColor="var(--color-nebula-cyan)" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="var(--color-border-default)"
          strokeWidth={thickness}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={stroke}
          strokeWidth={thickness}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - dash }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {label && (
          <span className="font-[family-name:var(--font-display)] text-2xl font-light">
            {label}
          </span>
        )}
        {sublabel && (
          <span className="mt-1 text-xs text-[var(--color-text-secondary)]">{sublabel}</span>
        )}
      </div>
    </div>
  );
}
