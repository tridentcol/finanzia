import { cloneElement, type ReactNode } from "react";
import { I } from "@/components/icons";
import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { Topbar } from "@/components/layout/topbar";

export const metadata = { title: "Coach IA" };

export default function CoachPage() {
  return (
    <>
      <NebulaBg seed={44} density={0.6} />
      <Topbar crumbs={["Universo", "Coach IA", "Mayo 2026"]} />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 340px", overflow: "hidden", minHeight: 0 }}>
        {/* Chat pane */}
        <div style={{ overflowY: "auto", padding: "24px 32px 32px" }} className="no-scrollbar">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 32 }}>
              <CoachAvatar size={44} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <h1 className="h-display" style={{ fontSize: 24, margin: 0, letterSpacing: "-0.02em" }}>
                    Conversación sobre tu mayo
                  </h1>
                  <span className="pill violet">
                    <span className="mono">Contexto: 8,2K tok cached</span>
                  </span>
                </div>
                <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>
                  Iniciada hace 4 minutos · 12 mensajes · 3 acciones aplicadas
                </div>
              </div>
            </div>

            <MsgUser>¿Por qué cierro mayo peor de lo previsto?</MsgUser>

            <MsgAI>
              <p style={{ margin: "0 0 14px" }}>
                No vas peor: vas <strong>4,7 % por encima</strong> del cierre proyectado. Lo que ha cambiado es la <em>forma</em> del gasto, no el total.
              </p>
              <p style={{ margin: "0 0 14px" }}>
                Comparé tus tres últimos meses. Restaurantes subió 32 % este mayo, pero compensaste con un −18 % en compras online. El neto: +€ 64 sobre lo previsto.
              </p>

              <ReasoningCard />

              <p style={{ margin: "14px 0 16px" }}>
                Si quieres mantener la foto de abril, mueve € 80 del presupuesto «Compras» al de «Restaurantes». Lo puedo aplicar.
              </p>

              <ActionChips />
            </MsgAI>
          </div>
        </div>

        <KnowledgePanel />
      </div>

      <Composer />
    </>
  );
}

function CoachAvatar({ size = 44 }: { size?: number }) {
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          inset: -6,
          borderRadius: "50%",
          border: "1px dashed rgba(123,91,255,0.4)",
          animation: "coachspin 12s linear infinite",
        }}
      />
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: "var(--gradient-aurora)",
          boxShadow: "0 0 24px -4px rgba(123,91,255,0.6), inset 0 0 12px rgba(255,255,255,0.3)",
        }}
      />
      <style>{`@keyframes coachspin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function MsgUser({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginBottom: 28, alignItems: "flex-start" }}>
      <div style={{ maxWidth: 480, textAlign: "right" }}>
        <div className="eyebrow" style={{ fontSize: 9, marginBottom: 6 }}>Tú · 14:02</div>
        <div
          style={{
            padding: "12px 16px",
            borderRadius: 18,
            background: "var(--color-bg-glass-strong)",
            border: "1px solid var(--color-border-subtle)",
            fontSize: 14,
            textAlign: "left",
          }}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #5FE4FF 0%, #5DE2A2 100%)",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          color: "#05060A",
        }}
      >
        CS
      </div>
    </div>
  );
}

function MsgAI({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 24, alignItems: "flex-start" }}>
      <CoachAvatar size={32} />
      <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
        <div className="eyebrow" style={{ fontSize: 9, marginBottom: 6 }}>Finanzia · 14:02</div>
        <div style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-text-primary)" }}>{children}</div>
      </div>
    </div>
  );
}

function ReasoningCard() {
  const rows = [
    { k: "Cierre abril", v: "€ 2.092" },
    { k: "Cierre proyectado mayo", v: "€ 2.156" },
    { k: "Δ Restaurantes", v: "+€ 100", col: "var(--color-coral-negative)" },
    { k: "Δ Compras", v: "−€ 36", col: "var(--color-mint-positive)" },
  ];
  return (
    <div
      style={{
        padding: "16px 18px",
        borderRadius: 14,
        background: "rgba(255,255,255,0.025)",
        border: "1px solid var(--color-border-subtle)",
        margin: "4px 0",
        fontSize: 13,
      }}
    >
      <div className="eyebrow" style={{ fontSize: 9, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ color: "var(--color-nebula-violet)" }}>◆</span>
        Razonamiento
      </div>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 0",
            borderBottom: i < rows.length - 1 ? "1px dashed var(--color-border-subtle)" : "none",
          }}
        >
          <span style={{ color: "var(--color-text-secondary)" }}>{r.k}</span>
          <span className="mono" style={{ color: r.col ?? "var(--color-text-primary)" }}>{r.v}</span>
        </div>
      ))}
      <div
        style={{
          marginTop: 12,
          padding: "10px 14px",
          borderRadius: 10,
          background: "rgba(93,226,162,0.08)",
          border: "1px solid rgba(93,226,162,0.25)",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ color: "var(--color-mint-positive)" }}>{cloneElement(I.check, { className: "icon icon-sm" })}</span>
        <span style={{ fontSize: 12, color: "var(--color-text-primary)" }}>
          <strong>Veredicto:</strong> mes sano, recomposición interna sin pérdida real.
        </span>
      </div>
    </div>
  );
}

function ActionChips() {
  const chips = [
    { icon: I.repeat, label: "Mover € 80 Compras → Restaurantes" },
    { icon: I.sparkle, label: "Simular junio igual" },
    { icon: I.pie, label: "Ver presupuestos" },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {chips.map((c, i) => (
        <button
          key={i}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            height: 30,
            borderRadius: 999,
            background: "var(--color-bg-glass)",
            border: "1px solid var(--color-border-default)",
            color: "var(--color-text-primary)",
            fontSize: 12,
          }}
        >
          {cloneElement(c.icon, { className: "icon icon-sm", style: { color: "var(--color-nebula-cyan)" } })}
          <span>{c.label}</span>
        </button>
      ))}
    </div>
  );
}

function Composer() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--color-border-subtle)",
        padding: "16px 32px 24px",
        background: "rgba(10,11,20,0.5)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div style={{ maxWidth: 720 + 340 + 32, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          {["¿Cómo voy con «Japón 2027»?", "Simula subir mi ahorro un 5 %", "Resume mis recurrentes"].map((s, i) => (
            <button
              key={i}
              style={{
                padding: "6px 12px",
                height: 28,
                borderRadius: 999,
                background: "transparent",
                border: "1px solid var(--color-border-subtle)",
                color: "var(--color-text-secondary)",
                fontSize: 12,
              }}
            >
              {s}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 8px 8px 18px",
            borderRadius: 999,
            background: "var(--color-bg-glass)",
            border: "1px solid var(--color-border-default)",
          }}
        >
          <button className="btn btn-ghost btn-icon btn-sm" style={{ borderRadius: "50%" }} aria-label="Adjuntar">
            {I.paperclip}
          </button>
          <input
            placeholder="Pregunta cualquier cosa sobre tu dinero…"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--color-text-primary)",
              fontSize: 14,
              fontFamily: "inherit",
              height: 36,
            }}
          />
          <button className="btn btn-ghost btn-icon btn-sm" style={{ borderRadius: "50%" }} aria-label="Dictado">
            {I.mic}
          </button>
          <button className="btn btn-aurora btn-icon" style={{ width: 40, height: 40 }} aria-label="Enviar">
            {I.send}
          </button>
        </div>
      </div>
    </div>
  );
}

type Row = readonly [string, string, ("pos" | "neg" | "warn")?];
type Section = { label: string; rows: Row[] };

function KnowledgePanel() {
  const sections: Section[] = [
    {
      label: "Identidad",
      rows: [
        ["Moneda", "EUR"],
        ["Zona horaria", "Europe/Madrid"],
        ["Situación", "Asalariado · 1 hogar"],
      ],
    },
    {
      label: "Snapshot financiero",
      rows: [
        ["Patrimonio", "€ 47.382", "pos"],
        ["Liquidez", "€ 12.480"],
        ["Ahorro mensual", "€ 920", "pos"],
        ["Tasa de ahorro", "32 %", "pos"],
        ["Health score", "78 / 100"],
      ],
    },
    {
      label: "Mes actual",
      rows: [
        ["Ingresos", "€ 2.840", "pos"],
        ["Gastos", "€ 1.640"],
        ["Top categoría", "Restaurantes · €412"],
        ["Anomalías", "1 detectada", "warn"],
      ],
    },
    {
      label: "Planes activos",
      rows: [
        ["Fondo emergencia", "86 %", "pos"],
        ["Japón 2027", "41 %"],
        ["Entrada piso", "12 %"],
      ],
    },
  ];

  return (
    <aside
      className="no-scrollbar"
      style={{
        background: "rgba(15,17,32,0.6)",
        borderLeft: "1px solid var(--color-border-subtle)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: "24px 22px",
        overflowY: "auto",
      }}
    >
      <h3 className="h-display" style={{ fontSize: 22, letterSpacing: "-0.02em", marginBottom: 6 }}>
        Lo que sé de ti
      </h3>
      <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 20, lineHeight: 1.5 }}>
        Contexto cifrado y cacheado. Olvido cuando tú olvidas.
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {sections.map((s, i) => (
          <div key={i} style={{ padding: "16px 0", borderTop: i ? "1px solid var(--color-border-subtle)" : "none" }}>
            <div className="eyebrow" style={{ fontSize: 9, marginBottom: 10 }}>{s.label}</div>
            {s.rows.map(([k, v, tag], j) => {
              const col =
                tag === "pos" ? "var(--color-mint-positive)" :
                tag === "neg" ? "var(--color-coral-negative)" :
                tag === "warn" ? "var(--color-amber-warning)" :
                "var(--color-text-primary)";
              return (
                <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", gap: 8, fontSize: 12 }}>
                  <span style={{ color: "var(--color-text-secondary)" }}>{k}</span>
                  <span className="mono" style={{ color: col, fontWeight: 500 }}>{v}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 16,
          padding: "12px 14px",
          borderRadius: 12,
          background: "rgba(95,228,255,0.08)",
          border: "1px solid rgba(95,228,255,0.25)",
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <span style={{ color: "var(--color-nebula-cyan)", marginTop: 1 }}>{cloneElement(I.sparkle, { className: "icon icon-sm" })}</span>
        <div>
          <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2 }}>Cache hit</div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
            Ahorraste 6,4K tokens en esta sesión.
          </div>
        </div>
      </div>
    </aside>
  );
}
