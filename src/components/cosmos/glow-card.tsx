"use client";

import { type HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Glow = "none" | "violet" | "mint" | "coral" | "aurora";

interface GlowCardProps extends HTMLMotionProps<"div"> {
  glow?: Glow;
  interactive?: boolean;
}

const glowClass: Record<Glow, string> = {
  none: "",
  violet: "shadow-[var(--shadow-glow-violet)]",
  mint: "shadow-[var(--shadow-glow-mint)]",
  coral: "shadow-[var(--shadow-glow-coral)]",
  aurora:
    "shadow-[0_0_60px_-12px_rgba(123,91,255,0.45),0_0_120px_-40px_rgba(95,228,255,0.35)]",
};

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(function GlowCard(
  { glow = "none", interactive = false, className, children, ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      whileHover={interactive ? { y: -2, transition: { duration: 0.18 } } : undefined}
      className={cn(
        "glass rounded-2xl p-6",
        interactive && "cursor-pointer transition-colors hover:border-[var(--color-border-default)]",
        glowClass[glow],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
