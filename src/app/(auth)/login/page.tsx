import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { Logo } from "@/components/layout/logo";

export const metadata = { title: "Entra a tu universo" };

export default function LoginPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      {/* Left decorative */}
      <div style={{ position: "relative", overflow: "hidden", borderRight: "1px solid var(--color-border-subtle)" }}>
        <NebulaBg seed={66} density={1.4} />

        <div
          style={{
            position: "absolute",
            top: 32,
            left: 40,
            right: 40,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo />
          <a
            href="/"
            style={{
              fontSize: 13,
              color: "var(--color-text-secondary)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            ← Volver al inicio
          </a>
        </div>

        <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Constellation />
        </div>

        <div style={{ position: "absolute", bottom: 56, left: 56, right: 56, zIndex: 2, maxWidth: 480 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Manifiesto · 003</div>
          <h2 className="h-display" style={{ fontSize: 32, letterSpacing: "-0.03em", marginBottom: 14, lineHeight: 1.15 }}>
            Tu dinero no es una hoja de cálculo,<br />
            <span style={{ fontStyle: "italic" }} className="aurora-text">
              es como una constelación.
            </span>
          </h2>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6, maxWidth: 420 }}>
            Conecta puntos, dibuja órbitas, deja que algunas estrellas se apaguen y otras brillen. Nosotros sólo te damos el lienzo.
          </p>
        </div>
      </div>

      {/* Right form */}
      <div
        style={{
          background: "var(--color-bg-base)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 56,
        }}
      >
        <div style={{ position: "absolute", top: 32, right: 40, fontSize: 13, color: "var(--color-text-muted)" }}>
          ¿Primera vez?{" "}
          <a
            href="/onboarding/goals"
            style={{
              color: "var(--color-text-primary)",
              textDecoration: "underline",
              textDecorationColor: "rgba(123,91,255,0.6)",
            }}
          >
            Crea uno nuevo
          </a>
        </div>

        <div style={{ width: "100%", maxWidth: 380 }}>
          <h1 className="h-display" style={{ fontSize: 40, letterSpacing: "-0.04em", marginBottom: 12 }}>
            Entra a tu universo.
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 32, lineHeight: 1.55 }}>
            Una constelación te espera donde la dejaste. Tu sesión se mantiene cifrada.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <button className="btn btn-secondary" style={{ height: 48, justifyContent: "center", width: "100%" }}>
              <GoogleLogo />
              Continuar con Google
            </button>
            <button className="btn btn-secondary" style={{ height: 48, justifyContent: "center", width: "100%" }}>
              <AppleLogo />
              Continuar con Apple
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "8px 0 20px" }}>
            <div style={{ flex: 1, height: 1, background: "var(--color-border-subtle)" }} />
            <span className="eyebrow" style={{ fontSize: 10 }}>o con email</span>
            <div style={{ flex: 1, height: 1, background: "var(--color-border-subtle)" }} />
          </div>

          <label style={{ fontSize: 12, color: "var(--color-text-muted)", display: "block", marginBottom: 6 }}>
            Email
          </label>
          <input className="input" defaultValue="carlos@finanzia.app" style={{ marginBottom: 14 }} />
          <button className="btn btn-aurora btn-lg" style={{ width: "100%", justifyContent: "center", height: 48 }}>
            Enviar enlace mágico
          </button>

          <p style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 28, lineHeight: 1.6, textAlign: "center" }}>
            Al entrar aceptas los{" "}
            <a style={{ color: "var(--color-text-secondary)", textDecoration: "underline" }}>Términos</a> y la{" "}
            <a style={{ color: "var(--color-text-secondary)", textDecoration: "underline" }}>Política de privacidad</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

function Constellation() {
  const nodes = [
    { x: 50, y: 50, r: 6, center: true },
    { x: 18, y: 25, r: 3 },
    { x: 78, y: 22, r: 3 },
    { x: 88, y: 58, r: 3 },
    { x: 22, y: 78, r: 3 },
    { x: 64, y: 86, r: 3 },
    { x: 10, y: 60, r: 3 },
    { x: 50, y: 12, r: 3 },
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7],
    [1, 7], [2, 7], [1, 6], [2, 3], [4, 5], [3, 5], [1, 4],
  ];
  return (
    <svg viewBox="0 0 100 100" width={520} height={520} aria-hidden>
      <defs>
        <linearGradient id="con-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7B5BFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5FE4FF" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="con-glow">
          <stop offset="0%" stopColor="#5FE4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5FE4FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {edges.map(([a, b], i) => {
        const na = nodes[a]!;
        const nb = nodes[b]!;
        return (
          <line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="url(#con-line)"
            strokeWidth="0.2"
            strokeDasharray="0.6 0.6"
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.center ? 6 : 3} fill="url(#con-glow)" />
          <circle cx={n.x} cy={n.y} r={n.center ? 1.6 : 0.9} fill="#fff" />
        </g>
      ))}
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.6 9.2c0-.6-.05-1.2-.16-1.7H9v3.3h4.8c-.2 1.1-.8 2-1.8 2.6v2.1h2.9c1.7-1.5 2.7-3.8 2.7-6.3z" />
      <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3C2.4 15.8 5.5 18 9 18z" />
      <path fill="#FBBC05" d="M3.9 10.7c-.2-.5-.3-1.1-.3-1.7s.1-1.2.3-1.7V5H.9C.3 6.2 0 7.6 0 9s.3 2.8.9 4l3-2.3z" />
      <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.5 1.4l2.6-2.6C13.5.9 11.4 0 9 0 5.5 0 2.4 2.2.9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="#fff" aria-hidden>
      <path d="M13.6 9.4c0-2.4 2-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.9-.9-3.1-.9C3.7 4 1.9 5 .9 6.7c-1.4 2.5-.4 6.1 1.1 8.1.7 1 1.5 2 2.6 2 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.1zM11.2 2.4c.6-.7 1-1.7.8-2.6-.8.1-1.7.6-2.3 1.2-.5.6-1 1.6-.9 2.5 1 .1 1.8-.4 2.4-1.1z" />
    </svg>
  );
}
