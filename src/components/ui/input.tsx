"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border bg-[var(--color-bg-glass)]",
        "px-4 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
        "border-[var(--color-border-default)]",
        "transition-colors duration-200",
        "focus:border-[var(--color-nebula-violet)] focus:bg-[var(--color-bg-glass-strong)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--color-nebula-violet)]/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className,
      )}
      {...props}
    />
  );
});
