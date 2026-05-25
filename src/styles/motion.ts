import type { Variants } from "framer-motion";

export const cosmosEase = [0.16, 1, 0.3, 1] as const;
export const orbitEase = [0.65, 0, 0.35, 1] as const;

export const springSoft = { type: "spring" as const, stiffness: 120, damping: 20 };
export const springBounce = { type: "spring" as const, stiffness: 280, damping: 18 };

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: cosmosEase } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.32, ease: cosmosEase } },
};

export const staggerChildren: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: cosmosEase } },
};
