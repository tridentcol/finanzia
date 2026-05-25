import { cloneElement, type ReactElement } from "react";
import { I } from "@/components/icons";

type CategoryKind =
  | "food"
  | "shopping"
  | "fuel"
  | "bills"
  | "movies"
  | "rent"
  | "salary";

const PALETTES: Record<
  CategoryKind,
  { bg: string; color: string; border: string; icon: ReactElement<{ className?: string }> }
> = {
  food:     { bg: "rgba(255,181,71,0.16)",  color: "#FFB547", border: "rgba(255,181,71,0.18)",  icon: I.utensils },
  shopping: { bg: "rgba(255,91,158,0.16)",  color: "#FF5B9E", border: "rgba(255,91,158,0.18)",  icon: I.shopping },
  fuel:     { bg: "rgba(95,184,255,0.16)",  color: "#5FB8FF", border: "rgba(95,184,255,0.18)",  icon: I.fuel },
  bills:    { bg: "rgba(123,91,255,0.16)",  color: "#7B5BFF", border: "rgba(123,91,255,0.18)",  icon: I.zap },
  movies:   { bg: "rgba(255,110,122,0.16)", color: "#FF6E7A", border: "rgba(255,110,122,0.18)", icon: I.film },
  rent:     { bg: "rgba(95,228,255,0.16)",  color: "#5FE4FF", border: "rgba(95,228,255,0.18)",  icon: I.home },
  salary:   { bg: "rgba(93,226,162,0.16)",  color: "#5DE2A2", border: "rgba(93,226,162,0.18)",  icon: I.briefcase },
};

interface CatIconProps {
  kind?: CategoryKind;
  size?: number;
}

/** Category tile: colored square with the right icon for a transaction category. */
export function CatIcon({ kind = "food", size = 32 }: CatIconProps) {
  const p = PALETTES[kind];
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: 10,
        background: p.bg,
        color: p.color,
        border: `1px solid ${p.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {cloneElement(p.icon, { className: "icon icon-sm" })}
    </span>
  );
}
