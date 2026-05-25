import { cloneElement } from "react";
import Link from "next/link";
import { I } from "@/components/icons";
import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { Sparkline } from "@/components/cosmos/sparkline";
import { Star } from "@/components/cosmos/star";
import { Logo } from "@/components/layout/logo";

export const metadata = { title: "Tu universo financiero" };

export default function LandingPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <NebulaBg seed={11} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            padding: "24px 56px",
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            background: "rgba(5,6,10,0.5)",
            borderBottom: "1px solid var(--color-border-subtle)",
          }}
        >
          <Logo size={17} />
          <nav style={{ display: "flex", gap: 28, margin: "0 auto", fontSize: 13, color: "var(--color-text-secondary)" }}>
            <a style={{ color: "var(--color-text-primary)" }}>Concepto</a>
            <a>Cómo funciona</a>
            <a>Planes</a>
            <a>Manifiesto</a>
          </nav>
          <div style={{ display: "flex", gap: 8 }}>
            <Link href="/login" className="btn btn-ghost btn-sm">Entrar</Link>
            <Link href="/onboarding/goals" className="btn btn-aurora btn-sm">Empezar</Link>
          </div>
        </header>

        {/* Hero */}
        <section style={{ padding: "64px 56px 32px", textAlign: "center" }}>
          <div className="pill dot violet" style={{ marginBottom: 24, height: 28, padding: "0 14px" }}>
            <span className="dot" style={{ background: "#7B5BFF" }} />
            <span style={{ color: "var(--color-text-secondary)" }}>Tu copiloto financiero con IA · Beta privada</span>
          </div>
          <h1 className="h-display" style={{ fontSize: 84, margin: "0 auto 24px", maxWidth: 980, letterSpacing: "-0.04em" }}>
            Tu universo financiero,<br />
            <span className="aurora-text">en un solo lienzo.</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--color-text-secondary)", maxWidth: 640, margin: "0 auto 32px" }}>
            Finanzia une tus cuentas, tus metas y tu IA en un único lienzo navegable. Insights accionables, no gráficos por defecto.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <Link href="/onboarding/goals" className="btn btn-aurora btn-lg">
              Pedir acceso anticipado {I.arrowRight}
            </Link>
            <Link href="/app/timeline" className="btn btn-secondary btn-lg">
              Ver concepto
            </Link>
          </div>
        </section>

        {/* Hero preview card */}
        <section style={{ padding: "24px 56px 80px" }}>
          <div
            className="glow-card aurora-edge lg"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: 56,
              alignItems: "center",
              maxWidth: 1120,
              margin: "0 auto",
              padding: "40px 44px",
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Tu patrimonio · 25 mayo 2026</div>
              <div className="h-display tnum" style={{ fontSize: 80, marginBottom: 12, letterSpacing: "-0.04em" }}>
                <span className="aurora-text" style={{ fontSize: 36, verticalAlign: "top", display: "inline-block", marginTop: 12, marginRight: 4 }}>€</span>
                <span className="aurora-text">47.382</span>
                <span className="aurora-text" style={{ fontSize: 44 }}>,18</span>
              </div>
              <div className="mono" style={{ color: "var(--color-mint-positive)", fontSize: 13, marginBottom: 28 }}>
                ↗ +€ 2.140,40 este mes · +4,7 %
              </div>
              <Sparkline w={420} h={72} gradId="hero-spark" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <MiniInsight kind="default" title="Tu río fluye en positivo" body="+4,7 % de patrimonio neto este mes." />
              <MiniInsight kind="warning" title="Una constelación se calienta" body="Restaurantes 32 % por encima de tu media." />
              <MiniInsight kind="positive" title="Plan Japón al 41 %" body="A este ritmo, listo para marzo de 2027." />
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "32px 56px 80px", maxWidth: 1240, margin: "0 auto" }}>
          <div className="eyebrow" style={{ textAlign: "center", marginBottom: 18 }}>
            Más allá del dashboard
          </div>
          <h2 className="h-display" style={{ fontSize: 48, textAlign: "center", marginBottom: 56, letterSpacing: "-0.035em" }}>
            Tres formas nuevas de mirar tu dinero.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: I.river, title: "Río temporal", body: "Navega tu pasado y proyecta tu futuro en una sola línea de tiempo continua." },
              { icon: I.sparkle, title: "Constelación de categorías", body: "Tus categorías brillan como estrellas; las que se calientan saltan a la vista." },
              { icon: I.bot, title: "Cartas proactivas", body: "La IA aparece sólo cuando tiene algo que aportar. Silencio cuando todo va bien." },
            ].map((f, i) => (
              <div key={i} className="glow-card" style={{ padding: 24 }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(123,91,255,0.14)",
                    color: "var(--color-nebula-violet)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    border: "1px solid rgba(123,91,255,0.25)",
                  }}
                >
                  {cloneElement(f.icon, { className: "icon icon-lg" })}
                </span>
                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Three promises */}
        <section style={{ padding: "32px 56px 80px", maxWidth: 1240, margin: "0 auto" }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Tres promesas</div>
          <h2 className="h-display" style={{ fontSize: 44, marginBottom: 40, letterSpacing: "-0.035em", maxWidth: 720 }}>
            Lo que Finanzia hace por ti, sin pedirlo dos veces.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { n: "01", title: "Decisiones inteligentes", body: "No te enseña gráficos. Te dice qué hacer y por qué, con números encima." },
              { n: "02", title: "Aire, no ruido", body: "Una sola cifra por pantalla. El resto, sólo si la pides." },
              { n: "03", title: "Privacidad por defecto", body: "Tus datos viven cifrados. La IA olvida cuando tú olvidas." },
            ].map((p, i) => (
              <div key={i} className="glow-card" style={{ padding: 28 }}>
                <div className="h-display aurora-text" style={{ fontSize: 40, marginBottom: 14 }}>{p.n}</div>
                <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.55 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section style={{ padding: "40px 56px 80px", textAlign: "center" }}>
          <h2 className="h-display" style={{ fontSize: 56, margin: "0 auto 28px", maxWidth: 860, letterSpacing: "-0.04em" }}>
            Tu próximo movimiento<br />empieza con <span className="aurora-text">uno.</span>
          </h2>
          <Link href="/onboarding/goals" className="btn btn-aurora btn-lg" style={{ height: 52, fontSize: 16 }}>
            Pedir acceso anticipado {I.arrowRight}
          </Link>
        </section>

        <footer
          style={{
            padding: "24px 56px",
            borderTop: "1px solid var(--color-border-subtle)",
            display: "flex",
            alignItems: "center",
            fontSize: 12,
            color: "var(--color-text-muted)",
          }}
        >
          <span>© 2026 Finanzia</span>
          <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
            <a>Privacidad</a>
            <a>Términos</a>
            <a>Manifiesto</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function MiniInsight({ kind, title, body }: { kind: "default" | "warning" | "positive"; title: string; body: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: 14,
        borderRadius: 14,
        background: "rgba(255,255,255,0.025)",
        border: "1px solid var(--color-border-subtle)",
      }}
    >
      <Star size={24} kind={kind} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{title}</div>
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>{body}</div>
      </div>
    </div>
  );
}
