import { cn } from "@/lib/utils";

type StarKind = "default" | "warning" | "positive";

interface StarProps {
  size?: number;
  kind?: StarKind;
  className?: string;
}

/**
 * Insight/AI avatar. A glowing aurora bead. Tone shifts the gradient:
 *   default   violet→blue→cyan
 *   warning   amber→coral
 *   positive  mint→azure
 */
export function Star({ size = 32, kind = "default", className }: StarProps) {
  return (
    <span
      className={cn("star", kind !== "default" && kind, className)}
      style={{ width: size, height: size }}
    />
  );
}
