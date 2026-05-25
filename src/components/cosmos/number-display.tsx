"use client";

import { animate, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface NumberDisplayProps {
  value: number;
  currency?: string;
  locale?: string;
  className?: string;
  animateChange?: boolean;
  /** "display" = ligero + tracking apretado + opsz alto (hero numbers); "ui" = peso medio */
  variant?: "display" | "ui";
  /** Decimal places. Defaults to currency-aware (2 for fiat). */
  decimals?: number;
  /** Show sign explicitly for positives. */
  showSign?: boolean;
}

export function NumberDisplay({
  value,
  currency,
  locale = "es-ES",
  className,
  animateChange = true,
  variant = "display",
  decimals,
  showSign = false,
}: NumberDisplayProps) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    format(v, { currency, locale, decimals, showSign }),
  );

  useEffect(() => {
    if (!animateChange) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [value, animateChange, motionValue]);

  return (
    <motion.span
      data-numeric
      className={cn(
        variant === "display" ? "font-light" : "font-medium",
        className,
      )}
      style={{
        fontVariantNumeric: "tabular-nums lining-nums",
        // Display register: tighter tracking + larger optical size.
        // UI register: default tracking.
        letterSpacing: variant === "display" ? "-0.04em" : undefined,
        fontVariationSettings: variant === "display" ? '"opsz" 40' : undefined,
      }}
    >
      {animateChange ? rounded : format(value, { currency, locale, decimals, showSign })}
    </motion.span>
  );
}

function format(
  v: number,
  opts: { currency?: string; locale: string; decimals?: number; showSign: boolean },
): string {
  const { currency, locale, decimals, showSign } = opts;
  const fractionDigits = decimals ?? (currency ? 2 : 0);
  const formatter = new Intl.NumberFormat(locale, {
    style: currency ? "currency" : "decimal",
    currency: currency ?? undefined,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
    signDisplay: showSign ? "exceptZero" : "auto",
  });
  return formatter.format(v);
}
