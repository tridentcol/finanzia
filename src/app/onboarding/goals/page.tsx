"use client";

import { useState } from "react";
import { I } from "@/components/icons";
import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { Star } from "@/components/cosmos/star";
import { Logo } from "@/components/layout/logo";

const SITUATIONS = [
  { id: "base", emoji: "🌱", label: "Construir base", desc: "Empezar con buen pie." },
  { id: "grow", emoji: "🌳", label: "Crecer ahorro", desc: "Más colchón mes a mes." },
  { id: "inv", emoji: "🚀", label: "Invertir", desc: "Poner el dinero a trabajar." },
  { id: "debt", emoji: "🛡️", label: "Reducir deuda", desc: "Salir del peso." },
] as const;

const GOALS = [
  { id: "emergencia", emoji: "🛟", label: "Fondo emergencia" },
  { id: "japon", emoji: "🌸", label: "Viaje · Japón" },
  { id: "piso", emoji: "🏡", label: "Entrada piso" },
  { id: "coche", emoji: "🚗", label: "Coche nuevo" },
  { id: "sabatico", emoji: "🌴", label: "Año sabático" },
  { id: "boda", emoji: "💍", label: "Boda" },
  { id: "hijo", emoji: "👶", label: "Hijo" },
  { id: "inversion", emoji: "📈", label: "Empezar a invertir" },
  { id: "jubilacion", emoji: "🌅", label: "Jubilación" },
  { id: "estudios", emoji: "🎓", label: "Estudios" },
] as const;

export default function OnboardingGoals() {
  const [situation, setSituation] = useState<string>("grow");
  const [goals, setGoals] = useState<string[]>(["emergencia", "japon"]);
  const toggleGoal = (id: string) =>
    setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));

  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NebulaBg seed={55} density={0.5} />

      {/* Top progress header */}
      <header
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid var(--color-border-subtle)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Logo />
        <div style={{ flex: 1, maxWidth: 540, margin: "0 auto", position: "relative" }}>
          <div style={{ height: 2, borderRadius: 1, background: "rgba(255,255,255,0.06)", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "calc(3.5 / 7 * 100%)",
                background: "var(--gradient-aurora)",
                borderRadius: 1,
              }}
            />
          </div>
          <div style={{ position: "absolute", top: -7, left: 0, right: 0, display: "flex", justifyContent: "space-between" }}>
            {Array.from({ length: 8 }).map((_, i) => {
              const state = i < 3 ? "done" : i === 3 ? "current" : "pending";
              return (
                <span
                  key={i}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background:
                      state === "done"
                        ? "var(--color-mint-positive)"
                        : state === "current"
                          ? "transparent"
                          : "rgba(255,255,255,0.08)",
                    border: state === "pending" ? "1px solid var(--color-border-default)" : "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {state === "done" && (
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#05060A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                  {state === "current" && (
                    <>
                      <span style={{ position: "absolute", inset: -6, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,91,255,0.5) 0%, transparent 70%)" }} />
                      <span
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: "var(--gradient-aurora)",
                          boxShadow: "0 0 12px rgba(123,91,255,0.7)",
                        }}
                      />
                    </>
                  )}
                </span>
              );
            })}
          </div>
        </div>
        <button className="btn btn-ghost btn-sm">Salir</button>
      </header>

      <div style={{ position: "relative", zIndex: 2, flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Left copy */}
        <div style={{ padding: "64px 56px", overflowY: "auto" }} className="no-scrollbar">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Paso 4 · Tus metas</div>
          <h1 className="h-display" style={{ fontSize: 52, letterSpacing: "-0.038em", marginBottom: 24, maxWidth: 520 }}>
            ¿Qué quieres <span className="aurora-text">conseguir</span> en los próximos 12 meses?
          </h1>
          <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.6, maxWidth: 460, marginBottom: 14 }}>
            Elige una situación dominante y una o varias metas. Cada elección activa una órbita en tu sistema solar.
          </p>
          <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.6, maxWidth: 460, marginBottom: 32 }}>
            Puedes cambiarlo cuando quieras. La IA aprende tus prioridades sin que tengas que repetirlas.
          </p>

          <div className="glow-card aurora-edge" style={{ padding: "20px 22px", display: "flex", gap: 14, maxWidth: 460 }}>
            <Star size={32} />
            <div>
              <div className="eyebrow" style={{ marginBottom: 4 }}>Por qué te lo pedimos</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.55 }}>
                Tus metas dan forma a tus insights y al tono del coach. Sin ellas, somos un dashboard más.
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div style={{ padding: "40px 56px", overflowY: "auto" }} className="no-scrollbar">
          <div className="glow-card lg" style={{ padding: 28, borderRadius: 24 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Tu situación actual</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
              {SITUATIONS.map((s) => {
                const selected = situation === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSituation(s.id)}
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      borderRadius: 14,
                      background: selected ? "rgba(123,91,255,0.10)" : "var(--color-bg-glass)",
                      border: `1px solid ${selected ? "rgba(123,91,255,0.5)" : "var(--color-border-default)"}`,
                      boxShadow: selected ? "0 0 0 3px rgba(123,91,255,0.15), 0 0 24px -8px rgba(123,91,255,0.4)" : "none",
                      transition: "all 0.18s",
                    }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{s.emoji}</div>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{s.desc}</div>
                  </button>
                );
              })}
            </div>

            <div className="eyebrow" style={{ marginBottom: 14 }}>
              Metas concretas · {goals.length} elegidas
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {GOALS.map((g) => {
                const selected = goals.includes(g.id);
                return (
                  <button
                    key={g.id}
                    onClick={() => toggleGoal(g.id)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 14px",
                      height: 36,
                      borderRadius: 999,
                      background: selected ? "rgba(123,91,255,0.10)" : "var(--color-bg-glass)",
                      border: `1px solid ${selected ? "rgba(123,91,255,0.4)" : "var(--color-border-default)"}`,
                      transition: "all 0.18s",
                    }}
                  >
                    <span style={{ fontSize: 14 }}>{g.emoji}</span>
                    <span style={{ fontSize: 13, color: "var(--color-text-primary)" }}>{g.label}</span>
                    <span
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        background: selected ? "var(--gradient-aurora)" : "transparent",
                        border: selected ? "none" : "1.5px solid var(--color-border-default)",
                        boxShadow: selected ? "0 0 8px rgba(123,91,255,0.5)" : "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {selected && (
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <hr className="divider" style={{ marginBottom: 18 }} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <button style={{ background: "transparent", color: "var(--color-text-muted)", fontSize: 13 }}>
                Continuar sin elegir →
              </button>
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button className="btn btn-secondary">Atrás</button>
                <button className="btn btn-aurora">
                  Continuar {I.arrowRight}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
