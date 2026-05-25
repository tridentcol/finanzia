import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "lg";
  /** Adds an aurora gradient overlay top-left. */
  auroraEdge?: boolean;
}

/**
 * Glass card with optional aurora edge gradient. Matches the design's
 * `.glow-card` utility — we keep the React wrapper so callers stay typed.
 */
export function GlowCard({
  size = "default",
  auroraEdge = false,
  className,
  children,
  ...rest
}: GlowCardProps) {
  return (
    <div
      className={cn("glow-card", size === "lg" && "lg", auroraEdge && "aurora-edge", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
