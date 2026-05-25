import { cn } from "@/lib/utils";

export function AuroraDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("h-px w-full", className)}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(123,91,255,0.5) 20%, rgba(95,228,255,0.5) 80%, transparent 100%)",
      }}
    />
  );
}
