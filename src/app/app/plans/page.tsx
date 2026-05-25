import { cloneElement } from "react";
import { I } from "@/components/icons";
import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { OrbitalRing } from "@/components/cosmos/orbital-ring";
import { Star } from "@/components/cosmos/star";
import { Topbar } from "@/components/layout/topbar";

export const metadata = { title: "Tu sistema solar de planes" };

interface Planet {
  id: string;
  emoji: string;
  label: string;
  pct: number;
  size: number;
  orbit: number;
  angle: number;
  g1: string;
  g2: string;
  priority: string;
  status: { label: string; variant: "positive" | "warning" | "info" };
  saved: number;
  target: number;
  eta: string;
}

const PLANETS: Planet[] = [
  { id: "emergencia", emoji: "🛟", label: "Fondo emergencia", pct: 86, size: 56, orbit: 0, angle: 30,
    g1: "#5DE2A2", g2: "#5FB8FF", priority: "Prioridad alta", status: { label: "A tiempo", variant: "positive" },
    saved: 4300, target: 5000, eta: "Listo en 2 meses al ritmo actual" },
  { id: "japon", emoji: "🌸", label: "Japón 2027", pct: 41, size: 48, orbit: 1, angle: 110,
    g1: "#FFB547", g2: "#FF5B9E", priority: "Prioridad media", status: { label: "A tiempo", variant: "positive" },
    saved: 2870, target: 7000, eta: "Listo en 10 meses al ritmo actual" },
  { id: "coche", emoji: "🚗", label: "Coche eléctrico", pct: 22, size: 40, orbit: 1, angle: 220,
    g1: "#5FE4FF", g2: "#4F8CFF", priority: "Prioridad baja", status: { label: "Falta ritmo", variant: "warning" },
    saved: 5500, target: 25000, eta: "Reajusta el ritmo: faltan 38 meses" },
  { id: "piso", emoji: "🏡", label: "Entrada piso", pct: 12, size: 64, orbit: 3, angle: 290,
    g1: "#7B5BFF", g2: "#FF5B9E", priority: "Prioridad alta", status: { label: "Largo plazo", variant: "info" },
    saved: 3600, target: 30000, eta: "Listo en 48 meses al ritmo actual" },
  { id: "sabatico", emoji: "🌴", label: "Año sabático", pct: 34, size: 44, orbit: 2, angle: 180,
    g1: "#A78BFF", g2: "#7B5BFF", priority: "Prioridad media", status: { label: "A tiempo", variant: "positive" },
    saved: 6800, target: 20000, eta: "Listo en 22 meses al ritmo actual" },
];

export default function PlansPage() {
  return (
    <>
      <NebulaBg seed={33} density={0.7} />
      <Topbar crumbs={["Planificación", "Tu sistema solar"]} />
      <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px 80px" }}>
        <header style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <h1 className="h-display" style={{ fontSize: 52, letterSpacing: "-0.038em", maxWidth: 600, marginBottom: 8 }}>
              Tu sistema solar de planes.
            </h1>
            <div style={{ fontSize: 15, color: "var(--color-text-secondary)", maxWidth: 560 }}>
              5 órbitas en marcha. La cercanía indica plazo, el tamaño tu objetivo.
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="eyebrow" style={{ marginBottom: 6 }}>Aporte mensual conjunto</div>
            <div className="h-display tnum" style={{ fontSize: 38 }}>€ 920</div>
          </div>
        </header>

        <PlanetSystem />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 32 }}>
          <PlanCard plan={PLANETS[0]!} />
          <PlanCard plan={PLANETS[1]!} />
          <PlanCard plan={PLANETS[3]!} />
          <NewPlanCard />
        </div>

        <div className="glow-card aurora-edge" style={{ marginTop: 24, padding: "24px 28px", display: "flex", gap: 18, alignItems: "center" }}>
          <Star size={36} />
          <div style={{ flex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: 4 }}>Coach IA · sugerencia</div>
            <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4 }}>
              Subiendo «Coche eléctrico» a € 220/mes, todos tus planes siguen a tiempo.
            </div>
            <div style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>
              Margen de seguridad: € 180 mensuales. Sin afectar a «Japón 2027».
            </div>
          </div>
          <button className="btn btn-aurora btn-sm">
            Ver simulación {I.arrowRight}
          </button>
        </div>
      </div>
    </>
  );
}

function PlanetSystem() {
  const cx = 512;
  const cy = 230;
  const orbitRadii = [88, 150, 215, 290];
  const polar = (r: number, angDeg: number) => {
    const a = (angDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) * 0.55 };
  };
  return (
    <div className="glow-card" style={{ position: "relative", height: 460, borderRadius: 24, padding: 0, overflow: "hidden" }}>
      <svg viewBox="0 0 1024 460" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        {orbitRadii.map((r, i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.55} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="2 6" />
        ))}
      </svg>

      {/* Central star */}
      <div style={{ position: "absolute", left: cx, top: cy, transform: "translate(-50%, -50%)" }}>
        <div style={{ position: "absolute", inset: -50, borderRadius: "50%", background: "radial-gradient(circle, rgba(95,228,255,0.4) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", inset: -22, borderRadius: "50%", background: "radial-gradient(circle, rgba(123,91,255,0.55) 0%, transparent 70%)" }} />
        <div
          style={{
            position: "relative",
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "var(--gradient-aurora)",
            boxShadow: "0 0 40px rgba(123,91,255,0.7), inset 0 0 20px rgba(255,255,255,0.5)",
          }}
        />
      </div>

      {PLANETS.map((p) => {
        const pos = polar(orbitRadii[p.orbit]!, p.angle);
        return <PlanetNode key={p.id} planet={p} x={pos.x} y={pos.y} />;
      })}
    </div>
  );
}

function PlanetNode({ planet, x, y }: { planet: Planet; x: number; y: number }) {
  const { size, emoji, label, pct, g1, g2 } = planet;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)" }}>
      <div style={{ position: "absolute", inset: -size * 0.5, borderRadius: "50%", background: `radial-gradient(circle, ${hexAlpha(g1, 0.4)} 0%, transparent 65%)` }} />
      <div
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          background: `radial-gradient(circle at 30% 30%, ${g1} 0%, ${g2} 80%)`,
          boxShadow: `0 0 24px ${hexAlpha(g1, 0.5)}, inset 0 -4px 8px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.3)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.42,
        }}
      >
        {emoji}
      </div>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "calc(100% + 8px)",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 10px",
          height: 24,
          borderRadius: 999,
          background: "rgba(15,17,32,0.85)",
          backdropFilter: "blur(10px)",
          border: "1px solid var(--color-border-default)",
          fontSize: 11,
          whiteSpace: "nowrap",
        }}
      >
        <span>{label}</span>
        <span className="mono" style={{ color: "var(--color-text-muted)" }}>·</span>
        <span className="mono aurora-text" style={{ fontWeight: 500 }}>{pct}%</span>
      </div>
    </div>
  );
}

function hexAlpha(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function PlanCard({ plan }: { plan: Planet }) {
  const { emoji, label, pct, status, priority, saved, target, eta, g1, g2, id } = plan;
  return (
    <div className="glow-card" style={{ padding: 22, borderRadius: 18, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 24 }}>{emoji}</span>
        <span className={`pill ${status.variant}`} style={{ marginLeft: "auto" }}>{status.label}</span>
      </div>
      <div className="eyebrow" style={{ marginBottom: 4 }}>{priority}</div>
      <div className="h-display" style={{ fontSize: 22, marginBottom: 16, letterSpacing: "-0.02em" }}>{label}</div>

      <div style={{ position: "relative", alignSelf: "center", marginBottom: 16 }}>
        <OrbitalRing size={130} value={pct} stroke={7} gradId={`plan-${id}`} from={g1} via={g2} to={g2} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div className="h-display tnum" style={{ fontSize: 30, lineHeight: 1 }}>{pct}%</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <div>
          <div className="eyebrow" style={{ fontSize: 9, marginBottom: 2 }}>Ahorrado</div>
          <div className="h-display tnum" style={{ fontSize: 18 }}>€ {saved.toLocaleString("es-ES")}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="eyebrow" style={{ fontSize: 9, marginBottom: 2 }}>Meta</div>
          <div className="mono" style={{ fontSize: 13, color: "var(--color-text-secondary)" }}>€ {target.toLocaleString("es-ES")}</div>
        </div>
      </div>

      <div
        style={{
          padding: "10px 12px",
          borderRadius: 10,
          background: "rgba(123,91,255,0.08)",
          border: "1px solid rgba(123,91,255,0.2)",
          fontSize: 12,
          color: "var(--color-text-secondary)",
          lineHeight: 1.45,
        }}
      >
        <span style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>{eta}</span>
      </div>
    </div>
  );
}

function NewPlanCard() {
  return (
    <div
      style={{
        borderRadius: 18,
        border: "1.5px dashed var(--color-border-default)",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 22,
        minHeight: 380,
        transition: "all 0.18s",
        cursor: "pointer",
        color: "var(--color-text-muted)",
      }}
    >
      <span
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "1.5px dashed var(--color-border-default)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          color: "var(--color-nebula-violet)",
        }}
      >
        {cloneElement(I.plus, { className: "icon icon-xl" })}
      </span>
      <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-text-secondary)", marginBottom: 6 }}>Nuevo plan</div>
      <div style={{ fontSize: 12, color: "var(--color-text-muted)", textAlign: "center", maxWidth: 180 }}>
        Pon una meta en órbita. Finanzia calcula el ritmo.
      </div>
    </div>
  );
}
