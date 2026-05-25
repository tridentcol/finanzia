"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-full font-medium tracking-tight",
    "transition-all duration-200 ease-[var(--ease-cosmos)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-nebula-violet)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-deep)]",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-text-primary)] text-[var(--color-text-inverse)] hover:bg-white shadow-[var(--shadow-elevation)]",
        aurora:
          "text-white bg-[var(--gradient-aurora)] shadow-[0_8px_24px_-12px_rgba(79,140,255,0.6)] hover:shadow-[0_12px_32px_-12px_rgba(123,91,255,0.7)]",
        secondary:
          "glass text-[var(--color-text-primary)] hover:bg-[var(--color-bg-glass-strong)]",
        ghost:
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-glass)]",
        danger:
          "bg-[var(--color-coral-negative)] text-[var(--color-text-inverse)] hover:opacity-90",
        link: "text-[var(--color-nebula-cyan)] hover:underline underline-offset-4 px-0",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild = false, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});

export { buttonVariants };
