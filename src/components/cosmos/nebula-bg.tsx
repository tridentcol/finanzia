import { useMemo } from "react";

interface NebulaBgProps {
  /** Star density multiplier (0.5–1.5). Default 1. */
  density?: number;
  /** Deterministic seed so each screen has stable stars between renders. */
  seed?: number;
}

/**
 * Per-screen nebula backdrop. Three drifting blobs (violet/cyan/rose),
 * a deterministic starfield with twinkle, and a vignette to anchor
 * content above. All animation is paused under `prefers-reduced-motion`
 * via the rules in globals.css.
 */
export function NebulaBg({ density = 1, seed = 1 }: NebulaBgProps) {
  const stars = useMemo(() => {
    let s = seed * 9301 + 49297;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    const N = Math.floor(150 * density);
    return Array.from({ length: N }, () => ({
      x: rnd() * 100,
      y: rnd() * 100,
      size: rnd() < 0.92 ? 1 : rnd() < 0.7 ? 1.5 : 2.5,
      delay: rnd() * 6,
      opacity: 0.3 + rnd() * 0.5,
    }));
  }, [seed, density]);

  return (
    <div aria-hidden className="nebula-canvas">
      <div className="nebula-deep" />
      <div className="nebula-blob violet" />
      <div className="nebula-blob cyan" />
      <div className="nebula-blob rose" />
      <div className="nebula-stars">
        {stars.map((s, i) => (
          <span
            key={i}
            className="nebula-star"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${-s.delay}s`,
              animationDuration: `${4 + (i % 5)}s`,
            }}
          />
        ))}
      </div>
      <div className="nebula-vignette" />
    </div>
  );
}
