"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

/**
 * Full-viewport, fixed cosmic backdrop:
 *   - Two slow-drifting nebula blobs (CSS-only, GPU compositing)
 *   - A canvas starfield with subtle twinkle (~1500 points)
 *   - Disabled entirely under `prefers-reduced-motion`
 *
 * Cheap: blobs animate via CSS keyframes; canvas runs a single rAF loop
 * with a per-frame budget capped to ~16ms (skips if backgrounded).
 */
export function NebulaBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas || !ctx) return;
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(w, h);
    }

    function seed(w: number, h: number) {
      const density = Math.min(1500, Math.floor((w * h) / 1400));
      const stars: Star[] = [];
      for (let i = 0; i < density; i += 1) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() < 0.92 ? Math.random() * 0.9 + 0.2 : Math.random() * 1.6 + 0.8,
          baseAlpha: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 0.0008 + 0.0002,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    }

    let lastFrame = 0;
    function draw(t: number) {
      if (!canvas || !ctx) return;
      // ~60fps cap, skip frames if tab is hidden
      if (t - lastFrame < 16) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrame = t;

      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const stars = starsRef.current;
      for (let i = 0; i < stars.length; i += 1) {
        const s = stars[i];
        if (!s) continue;
        const twinkle = prefersReducedMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * 0.25;
        const alpha = Math.max(0, Math.min(1, twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 242, 255, ${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(draw);
    } else {
      // Single static render
      requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: "strict" }}
    >
      {/* Deep-space radial base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26,23,53,0.9) 0%, rgba(5,6,10,1) 65%)",
        }}
      />

      {/* Nebula blob #1 — violet */}
      <motion.div
        className="absolute -left-[20vw] top-[-10vh] h-[70vh] w-[70vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(123,91,255,0.35) 0%, rgba(123,91,255,0) 60%)",
          filter: "blur(60px)",
          mixBlendMode: "screen",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 60, -30, 0],
                y: [0, -40, 30, 0],
              }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      {/* Nebula blob #2 — cyan-blue */}
      <motion.div
        className="absolute right-[-15vw] top-[20vh] h-[60vh] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(79,140,255,0.28) 0%, rgba(95,228,255,0.12) 40%, rgba(0,0,0,0) 70%)",
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -50, 40, 0],
                y: [0, 50, -20, 0],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />

      {/* Nebula blob #3 — rose accent */}
      <motion.div
        className="absolute bottom-[-20vh] left-[30vw] h-[50vh] w-[50vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,91,158,0.18) 0%, rgba(255,91,158,0) 60%)",
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 30, -50, 0],
                y: [0, -30, 20, 0],
              }
        }
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Star canvas on top of nebulas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Subtle vignette to anchor content above */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5,6,10,0.7) 100%)",
        }}
      />
    </div>
  );
}
