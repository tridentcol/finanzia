import Link from "next/link";
import { Button } from "@/components/ui/button";

const mockups = [
  {
    id: "01",
    slug: "01-landing",
    title: "Landing pública",
    desc: "Hero editorial, badge orbit, preview con sparkline aurora y mini-insights, manifiesto en tres promesas.",
  },
  {
    id: "02",
    slug: "02-timeline",
    title: "Timeline · home de la app",
    desc: "Río financiero pasado + proyectado, hero number, salud financiera y cards proactivas. La pantalla más importante.",
  },
  {
    id: "03",
    slug: "03-command-bar",
    title: "Command Bar (⌘K)",
    desc: "Cuatro modos en uno: acciones, navegación, búsqueda y Ask AI con contexto cifrado.",
  },
  {
    id: "04",
    slug: "04-plans",
    title: "Planes de ahorro",
    desc: "Sistema solar de metas con orbital rings, ETAs realistas y sugerencias del coach para reasignar aportes.",
  },
  {
    id: "05",
    slug: "05-coach-ia",
    title: "Coach IA",
    desc: "Conversación con Claude, simulación financiera ejecutable y panel «lo que sé de ti» transparente con cache hit.",
  },
  {
    id: "06",
    slug: "06-onboarding",
    title: "Onboarding",
    desc: "Wizard de 8 pasos. Paso 4 mostrado: selección de metas con justificación del «por qué te lo pedimos».",
  },
  {
    id: "07",
    slug: "07-login",
    title: "Entrada / Crear cuenta",
    desc: "Magic link + Google/Apple, constelación animada en SVG y manifiesto a la izquierda.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen px-6 py-24 md:px-16 lg:px-24">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between pb-12">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="relative inline-flex h-8 w-8 items-center justify-center">
            <span
              className="absolute inset-0 rounded-full blur-md opacity-60"
              style={{ background: "var(--gradient-aurora)" }}
            />
            <span
              className="relative inline-block h-3 w-3 rounded-full"
              style={{ background: "var(--gradient-aurora)" }}
            />
          </span>
          <span className="font-[family-name:var(--font-display)] text-xl font-light tracking-tight">
            finanzia
          </span>
        </Link>
        <div className="hidden items-center gap-6 text-sm text-[var(--color-text-secondary)] md:flex">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
            Beta privada · Diseño en revisión
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl text-center">
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest"
          style={{
            background: "rgba(123,91,255,0.1)",
            borderColor: "rgba(123,91,255,0.25)",
            color: "#cbbfff",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: "var(--color-nebula-violet)",
              boxShadow: "0 0 8px rgba(123,91,255,0.8)",
            }}
          />
          MOCKUPS PARA APROBACIÓN
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl font-extralight leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
          Tu universo financiero,
          <br />
          <span className="aurora-text">en un solo lienzo.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
          Finanzia es un lienzo navegable donde tu dinero fluye como un río, las categorías brillan
          como constelaciones y la IA actúa como un copiloto silencioso. Estas son las siete
          pantallas clave del concepto, en HTML/CSS puro, para que valides el sistema visual
          «cosmos» antes de que lo materialice en React.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="aurora" size="lg">
            <a href="/mockups/index.html">Abrir índice de mockups →</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="/mockups/02-timeline.html">Ir directo al Timeline</a>
          </Button>
        </div>
      </section>

      {/* Mockup grid */}
      <section className="mx-auto mt-24 max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-text-muted)]">
              Las siete pantallas
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-light tracking-tight">
              Para revisar y comentar.
            </h2>
          </div>
          <a
            href="/mockups/index.html"
            className="hidden text-sm text-[var(--color-nebula-cyan)] hover:underline md:inline"
          >
            Ver en galería completa →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mockups.map((m) => (
            <a
              key={m.id}
              href={`/mockups/${m.slug}.html`}
              className="group glass relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-strong)]"
              style={{ minHeight: 220 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-[family-name:var(--font-mono)] text-xs tracking-widest text-[var(--color-text-muted)]">
                  {m.id}
                </span>
                <span className="text-[var(--color-text-muted)] transition-all group-hover:text-[var(--color-nebula-cyan)] group-hover:translate-x-1">
                  →
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-light tracking-tight">
                {m.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {m.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="mx-auto mt-24 max-w-3xl">
        <div
          className="rounded-2xl border p-8"
          style={{
            background: "rgba(123,91,255,0.06)",
            borderColor: "rgba(123,91,255,0.2)",
          }}
        >
          <div className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[#cbbfff]">
            Lo que necesito de ti
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-light tracking-tight">
            Validación antes de codificar.
          </h3>
          <ol className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <li>
              <strong className="text-[var(--color-text-primary)]">1 · Paleta.</strong> ¿La dirección
              cosmos (violet · blue · cyan + acentos rose/mint/coral) te convence o quieres
              explorar otra tonalidad?
            </li>
            <li>
              <strong className="text-[var(--color-text-primary)]">2 · Metáforas.</strong> Río
              temporal, sistema solar, constelación, nebula como fondo global — ¿alguna no encaja?
            </li>
            <li>
              <strong className="text-[var(--color-text-primary)]">3 · Tono del copy.</strong> «Tu
              río de mayo», «Tu sistema solar de planes» — ¿poético justo, demasiado, poco?
            </li>
            <li>
              <strong className="text-[var(--color-text-primary)]">4 · Pantallas concretas.</strong>{" "}
              ¿Cambiarías densidad, jerarquía o sección de alguna en particular?
            </li>
          </ol>
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-6xl border-t pt-8 text-center text-xs text-[var(--color-text-muted)]">
        <span className="font-[family-name:var(--font-mono)] tracking-widest uppercase">
          Finanzia · diseño en revisión · {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}
