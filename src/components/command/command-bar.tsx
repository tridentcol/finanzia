"use client";

import { cloneElement, type ReactElement, type ReactNode, useEffect, useState } from "react";
import { I } from "@/components/icons";
import { useCommandBar } from "@/components/command/command-bar-context";

/**
 * Command palette ⌘K. Renders an overlay over whatever screen is active.
 * Wired to the global `CommandBarProvider`. Keyboard shortcut and Esc
 * are owned by the provider.
 */
export function CommandBar() {
  const { isOpen, close } = useCommandBar();
  const [query, setQuery] = useState("cuánto gasté en restaurantes");

  // Reset query each time it reopens so it feels fresh.
  useEffect(() => {
    if (!isOpen) return;
    const t = window.setTimeout(() => {
      const el = document.getElementById("cmd-input") as HTMLInputElement | null;
      el?.focus();
      el?.select();
    }, 20);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{ position: "fixed", inset: 0, zIndex: 100 }}
    >
      {/* Dim overlay */}
      <button
        type="button"
        aria-label="Cerrar"
        onClick={close}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5,6,10,0.55)",
          backdropFilter: "blur(2px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "14vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: 680,
          maxWidth: "92%",
        }}
      >
        <div
          style={{
            background: "rgba(15,17,32,0.85)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            borderRadius: 20,
            border: "1px solid var(--color-border-default)",
            boxShadow:
              "0 0 80px -20px rgba(123,91,255,0.35), 0 30px 80px -30px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}
        >
          {/* Input row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "20px 22px",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            {cloneElement(I.search, {
              className: "icon icon-lg",
              style: { color: "var(--color-text-muted)" },
            })}
            <input
              id="cmd-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca, navega, pregunta…"
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--color-text-primary)",
                fontSize: 17,
                fontFamily: "inherit",
              }}
            />
            <span className="pill violet">⌘K</span>
          </div>

          {/* AI hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 22px",
              background:
                "linear-gradient(90deg, rgba(123,91,255,0.10) 0%, rgba(95,228,255,0.06) 100%)",
              borderBottom: "1px solid var(--color-border-subtle)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-nebula-violet)",
                boxShadow: "0 0 10px var(--color-nebula-violet)",
                animation: "twinkle 1.6s ease-in-out infinite",
              }}
            />
            <div style={{ flex: 1 }}>
              <div className="eyebrow" style={{ fontSize: 9, marginBottom: 2 }}>
                Pregunta a Finanzia
              </div>
              <div style={{ fontSize: 13, color: "var(--color-text-primary)" }}>
                «{query || "Pregunta lo que quieras"}» —{" "}
                <span style={{ color: "var(--color-text-muted)" }}>
                  Claude responde con contexto.
                </span>
              </div>
            </div>
            <span className="kbd">↵</span>
          </div>

          {/* Body */}
          <div style={{ maxHeight: 460, overflowY: "auto" }} className="no-scrollbar">
            <CmdGroup label="Acciones rápidas">
              <CmdItem active icon={I.plus} label="Crear transacción" desc="Cargo manual o ingreso" kbd={["N"]} />
              <CmdItem icon={I.target} label="Nuevo plan de ahorro" desc="Mete una meta en órbita" kbd={["G"]} />
              <CmdItem icon={I.sparkle} label="Simular escenario" desc="Qué pasa si subo el ahorro un 5 %" />
              <CmdItem icon={I.pie} label="Ajustar presupuesto del mes" />
            </CmdGroup>

            <CmdGroup label="Categorías">
              <CmdItem
                raw
                icon={
                  <CmdSquare bg="rgba(255,181,71,0.18)" color="#FFB547">
                    {I.utensils}
                  </CmdSquare>
                }
                label="Restaurantes"
                desc="€ 412 este mes · +32 %"
                pill={{ label: "caliente", variant: "warning" }}
              />
              <CmdItem
                raw
                icon={
                  <CmdSquare bg="rgba(255,91,158,0.18)" color="#FF5B9E">
                    {I.shopping}
                  </CmdSquare>
                }
                label="Compras online"
                desc="€ 248 este mes · −12 %"
              />
            </CmdGroup>

            <CmdGroup label="Transacciones recientes">
              <CmdItem icon={I.utensils} label="Sagàs · cena equipo" desc="21 may · € 96,00" mono="22:48" />
              <CmdItem icon={I.zap} label="Endesa · suministros" desc="22 may · € 64,12" mono="08:00" />
            </CmdGroup>

            <CmdGroup label="Navegación">
              <CmdItem icon={I.river} label="Ir a Timeline" kbd={["G", "T"]} />
              <CmdItem icon={I.bot} label="Abrir Coach IA" kbd={["G", "C"]} />
            </CmdGroup>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 22px",
              borderTop: "1px solid var(--color-border-subtle)",
              background: "rgba(255,255,255,0.02)",
              fontSize: 11,
              color: "var(--color-text-muted)",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span className="kbd">↑</span>
              <span className="kbd">↓</span> navegar
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span className="kbd">↵</span> ejecutar
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span className="kbd">?</span> IA
            </span>
            <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span className="kbd">esc</span> cerrar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CmdGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ padding: "14px 12px 6px" }}>
      <div className="eyebrow" style={{ fontSize: 9, padding: "0 12px", marginBottom: 6 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

type IconElement = ReactElement<{ className?: string }>;

interface CmdItemProps {
  icon: IconElement;
  label: string;
  desc?: string;
  kbd?: string[];
  pill?: { label: string; variant: "warning" | "positive" | "negative" | "info" | "violet" };
  mono?: string;
  active?: boolean;
  raw?: boolean;
}

function CmdItem({ icon, label, desc, kbd, pill, mono, active, raw }: CmdItemProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: 10,
        cursor: "pointer",
        background: active ? "rgba(123,91,255,0.12)" : "transparent",
        border: `1px solid ${active ? "rgba(123,91,255,0.25)" : "transparent"}`,
        transition: "background 0.12s",
      }}
    >
      {raw ? (
        icon
      ) : (
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "var(--color-bg-glass)",
            border: "1px solid var(--color-border-subtle)",
            color: "var(--color-text-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cloneElement(icon, { className: "icon icon-sm" })}
        </span>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{label}</div>
        {desc && <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{desc}</div>}
      </div>
      {pill && <span className={`pill ${pill.variant}`}>{pill.label}</span>}
      {mono && <span className="mono" style={{ fontSize: 12, color: "var(--color-text-muted)" }}>{mono}</span>}
      {kbd && (
        <span style={{ display: "inline-flex", gap: 4 }}>
          {kbd.map((k, i) => (
            <span key={i} className="kbd">
              {k}
            </span>
          ))}
        </span>
      )}
    </div>
  );
}

function CmdSquare({
  bg,
  color,
  children,
}: {
  bg: string;
  color: string;
  children: IconElement;
}) {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: 8,
        background: bg,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {cloneElement(children, { className: "icon icon-sm" })}
    </span>
  );
}
