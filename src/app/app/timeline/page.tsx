import type { ReactNode } from "react";
import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { OrbitalRing } from "@/components/cosmos/orbital-ring";
import { Star } from "@/components/cosmos/star";
import { CatIcon } from "@/components/cosmos/cat-icon";
import { Topbar } from "@/components/layout/topbar";

export const metadata = { title: "Tu río de mayo" };

export default function TimelinePage() {
  return (
    <>
      <NebulaBg seed={22} density={0.7} />
      <Topbar crumbs={["Universo", "Tu río de mayo"]} />
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px 80px" }}>
        {/* Hero row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginBottom: 16 }}>
          <HeroCard />
          <HealthCard />
        </div>

        {/* Insights row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          <InsightCard
            kind="warning"
            pill={{ label: "Anomalía", variant: "warning" }}
            title="Gastaste 32 % más en restaurantes"
            body="€ 412 vs € 312 media. La cena del jueves en Sagàs pesó € 96."
          />
          <InsightCard
            kind="default"
            pill={{ label: "Proyección", variant: "info" }}
            title="Cerrarás mayo con +€ 1.840"
            body="Si tu ritmo se mantiene 6 días más, superas el objetivo del mes."
          />
          <InsightCard
            kind="positive"
            pill={{ label: "Plan", variant: "positive" }}
            title="Plan «Japón 2027» al 41 %"
            body="A este ritmo, listo para marzo de 2027. Dos meses antes de lo previsto."
          />
        </div>

        <River />
      </div>
    </>
  );
}

function HeroCard() {
  const meta = [
    { label: "Líquido", value: "€ 12.480" },
    { label: "Ahorro", value: "€ 18.220" },
    { label: "Inversión", value: "€ 22.180" },
    { label: "Deuda", value: "−€ 5.498", neg: true },
  ];
  return (
    <div className="glow-card lg aurora-edge" style={{ padding: "32px 36px", borderRadius: 24, position: "relative", overflow: "hidden" }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>Tu patrimonio · 25 mayo 2026</div>
      <div className="h-display tnum" style={{ fontSize: 84, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 12 }}>
        <span style={{ fontSize: 32, color: "var(--color-text-secondary)", verticalAlign: "top", display: "inline-block", marginTop: 14, marginRight: 4 }}>€</span>
        47.382<span style={{ color: "var(--color-text-secondary)", fontSize: 44 }}>,18</span>
      </div>
      <div className="mono" style={{ color: "var(--color-mint-positive)", fontSize: 13, marginBottom: 24 }}>
        ↗ +€ 2.140,40 este mes · +4,7 % vs abril
      </div>
      <hr className="divider" style={{ marginBottom: 18 }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {meta.map((m) => (
          <div key={m.label}>
            <div className="eyebrow" style={{ fontSize: 10, marginBottom: 6 }}>{m.label}</div>
            <div className="h-display tnum" style={{ fontSize: 22, color: m.neg ? "var(--color-coral-negative)" : "var(--color-text-primary)" }}>
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HealthCard() {
  const bars = [
    { label: "Ahorro", value: 82 },
    { label: "Liquidez", value: 71 },
    { label: "Diversificación", value: 65 },
    { label: "Deuda / ingreso", value: 88 },
  ];
  return (
    <div className="glow-card lg" style={{ padding: "28px 32px", borderRadius: 24, display: "flex", gap: 28 }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <OrbitalRing size={140} value={78} stroke={8} gradId="health-ring" />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="h-display tnum aurora-text" style={{ fontSize: 38, lineHeight: 1 }}>78</div>
          <div className="eyebrow" style={{ marginTop: 4 }}>Score</div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>Salud financiera</div>
        <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 18, lineHeight: 1.5 }}>
          Tu universo está en órbita estable. Mejora diversificación.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {bars.map((b) => (
            <div key={b.label}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                <span style={{ color: "var(--color-text-secondary)" }}>{b.label}</span>
                <span className="mono" style={{ color: "var(--color-text-primary)" }}>{b.value}</span>
              </div>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)" }}>
                <div style={{ width: `${b.value}%`, height: "100%", borderRadius: 2, background: "var(--gradient-aurora)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface InsightCardProps {
  kind: "warning" | "positive" | "default";
  pill: { label: string; variant: "warning" | "positive" | "info" };
  title: string;
  body: string;
}

function InsightCard({ kind, pill, title, body }: InsightCardProps) {
  return (
    <div className="glow-card" style={{ padding: 22, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Star size={32} kind={kind} />
        <span className={`pill ${pill.variant}`}>{pill.label}</span>
      </div>
      <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.005em", lineHeight: 1.35 }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.55, flex: 1 }}>{body}</div>
      <button
        type="button"
        style={{
          alignSelf: "flex-start",
          color: "var(--color-nebula-cyan)",
          fontSize: 13,
          fontWeight: 500,
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        Ver detalle <span style={{ marginTop: 1 }}>→</span>
      </button>
    </div>
  );
}

// ---------------- River ----------------

type TxRow = { icon: Parameters<typeof CatIcon>[0]["kind"]; merchant: string; meta: string; amount: string; positive?: boolean };
type RiverInsightT = { side: "left" | "right"; title: string; body: string };
type RiverDayT = { day: number; weekday: string; balance: string; txLeft?: TxRow[]; txRight?: TxRow[]; insight?: RiverInsightT };

const RIVER_DAYS: RiverDayT[] = [
  {
    day: 25, weekday: "Lun", balance: "€ 12.480",
    txLeft: [{ icon: "food", merchant: "Sagàs · Cena", meta: "Restaurantes · 21:14", amount: "96,00" }],
    txRight: [{ icon: "salary", merchant: "Nómina mayo", meta: "Ingreso · 09:02", amount: "2.840,00", positive: true }],
  },
  {
    day: 24, weekday: "Dom", balance: "€ 9.640",
    txLeft: [
      { icon: "shopping", merchant: "Zara", meta: "Compras · 17:32", amount: "74,90" },
      { icon: "movies", merchant: "Filmin", meta: "Suscripción · 12:00", amount: "7,99" },
    ],
    insight: { side: "right", title: "Domingo: 3 cargos pequeños", body: "Estos días tu media es de 1,4. ¿Quieres ver patrones de fin de semana?" },
  },
  {
    day: 23, weekday: "Sáb", balance: "€ 9.723",
    txLeft: [{ icon: "fuel", merchant: "Repsol El Prat", meta: "Combustible · 11:08", amount: "52,40" }],
    txRight: [{ icon: "food", merchant: "Brunch & Cake", meta: "Restaurantes · 12:40", amount: "38,20" }],
  },
  {
    day: 22, weekday: "Vie", balance: "€ 9.813",
    txLeft: [{ icon: "bills", merchant: "Endesa", meta: "Suministros · 08:00", amount: "64,12" }],
    txRight: [{ icon: "shopping", merchant: "Amazon · Libros", meta: "Compras · 18:21", amount: "28,40" }],
  },
  {
    day: 21, weekday: "Jue", balance: "€ 9.905",
    txLeft: [{ icon: "food", merchant: "Sagàs · Cena equipo", meta: "Restaurantes · 21:48", amount: "96,00" }],
    insight: { side: "left", title: "Pico en restaurantes", body: "Tu jueves de cena pesa el 23 % del gasto de la categoría este mes." },
  },
];

const RIVER_FUTURE: RiverDayT[] = [
  { day: 26, weekday: "Mar", balance: "€ 12.412", txRight: [{ icon: "movies", merchant: "Netflix", meta: "Recurrente · proyectado", amount: "13,99" }] },
  { day: 28, weekday: "Jue", balance: "€ 12.346", txLeft: [{ icon: "rent", merchant: "Alquiler junio", meta: "Recurrente · proyectado", amount: "950,00" }] },
];

function River() {
  return (
    <div>
      <div style={{ marginBottom: 6 }}>
        <h3 className="h-display" style={{ fontSize: 30, letterSpacing: "-0.025em", display: "inline-block", marginRight: 14 }}>
          Tu río de mayo
        </h3>
      </div>
      <div style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 28 }}>
        Cinco días recientes y proyecciones de los próximos.
      </div>

      <FutureMarker label="Hoy · 25 mayo" />

      <div style={{ position: "relative", padding: "12px 0" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "50%",
            width: 1,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(123,91,255,0.4) 15%, rgba(95,228,255,0.4) 85%, transparent 100%)",
            transform: "translateX(-0.5px)",
          }}
        />

        {RIVER_DAYS.map((d, i) => (
          <RiverDay key={i} {...d} />
        ))}

        <FutureMarker label="Próximos días · proyectado" projected />

        {RIVER_FUTURE.map((d, i) => (
          <RiverDay key={`f${i}`} {...d} future />
        ))}
      </div>
    </div>
  );
}

function FutureMarker({ label, projected }: { label: string; projected?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "20px 0" }}>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(123,91,255,0.4) 50%, transparent)" }} />
      <span className="eyebrow" style={{ fontSize: 10, color: projected ? "var(--color-text-muted)" : "var(--color-text-primary)", opacity: projected ? 0.7 : 1 }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(95,228,255,0.4) 50%, transparent)" }} />
    </div>
  );
}

function RiverDay({ day, weekday, balance, txLeft = [], txRight = [], insight, future }: RiverDayT & { future?: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 110px 1fr",
        gap: 18,
        alignItems: "flex-start",
        padding: "16px 0",
        opacity: future ? 0.55 : 1,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
        {txLeft.map((t, i) => <TxCard key={i} {...t} align="right" />)}
        {insight?.side === "left" && <RiverInsight {...insight} />}
      </div>
      <DayStamp day={day} weekday={weekday} balance={balance} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {txRight.map((t, i) => <TxCard key={i} {...t} />)}
        {insight?.side === "right" && <RiverInsight {...insight} />}
      </div>
    </div>
  );
}

function DayStamp({ day, weekday, balance }: { day: number; weekday: string; balance: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div style={{ position: "relative", width: 72, height: 72 }}>
        <div style={{ position: "absolute", inset: -10, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,91,255,0.25) 0%, transparent 70%)" }} />
        <div
          style={{
            position: "relative",
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "var(--color-bg-glass-strong)",
            border: "1px solid var(--color-border-default)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="h-display tnum" style={{ fontSize: 24, lineHeight: 1 }}>{day}</div>
          <div className="mono" style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--color-text-muted)", marginTop: 2 }}>{weekday}</div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div className="eyebrow" style={{ fontSize: 9, marginBottom: 2 }}>Saldo neto</div>
        <div className="h-display tnum" style={{ fontSize: 16 }}>{balance}</div>
      </div>
    </div>
  );
}

function TxCard({ icon, merchant, meta, amount, positive, align = "left" }: TxRow & { align?: "left" | "right" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 12,
        background: "var(--color-bg-glass)",
        border: "1px solid var(--color-border-subtle)",
        flexDirection: align === "right" ? "row-reverse" : "row",
        textAlign: align === "right" ? "right" : "left",
      }}
    >
      <CatIcon kind={icon} size={32} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{merchant}</div>
        <div style={{ fontSize: 11, color: "var(--color-text-muted)" }}>{meta}</div>
      </div>
      <div
        className="mono"
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: positive ? "var(--color-mint-positive)" : "var(--color-text-primary)",
          whiteSpace: "nowrap",
        }}
      >
        {positive ? "+" : "−"} € {amount}
      </div>
    </div>
  );
}

function RiverInsight({ title, body }: { title: string; body: string; side: "left" | "right" }): ReactNode {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 14,
        borderRadius: 14,
        background: "rgba(123,91,255,0.07)",
        border: "1px solid rgba(123,91,255,0.22)",
        textAlign: "left",
      }}
    >
      <Star size={28} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  );
}
