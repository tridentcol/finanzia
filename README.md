# Finanzia

> Tu universo financiero, en un solo lienzo.

Webapp premium de finanzas personales con motor heurístico + IA opcional (Claude).
Stack: Next.js 15 + Supabase + Tailwind v4. Sistema visual «cosmos».

## Estado actual

**Las 7 pantallas del diseño** están materializadas como rutas reales de Next, generadas a partir del handoff de Claude Design:

| Ruta                       | Pantalla                                  |
| -------------------------- | ----------------------------------------- |
| `/`                        | Landing pública                           |
| `/login`                   | Entrada (magic link + Google/Apple)       |
| `/onboarding/goals`        | Onboarding paso 4 — selección de metas    |
| `/app/timeline`            | Timeline (home) con el río de mayo        |
| `/app/plans`               | Sistema solar de planes de ahorro          |
| `/app/coach`               | Coach IA con panel «Lo que sé de ti»      |
| `⌘K` en cualquier `/app/*` | Command bar (overlay global)              |

La capa de datos (Supabase + auth + dominio) está pendiente: las pantallas usan datos de ejemplo. Validación con Zod, clientes Supabase y motor heurístico están preparados pero todavía sin conectar.

## Cómo correrlo en local

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

No requiere env vars para el preview actual. Cuando se conecte Supabase y Claude, se añaden en Vercel → Project → Environment Variables (ver `.env.example`).

## Estructura

```
src/
├── app/
│   ├── (auth)/login/        # entrada
│   ├── onboarding/goals/    # onboarding paso 4
│   ├── app/                 # zona autenticada (sidebar shell)
│   │   ├── layout.tsx       # sidebar + main
│   │   ├── timeline/        # home — river
│   │   ├── plans/           # sistema solar
│   │   └── coach/           # IA chat + knowledge panel
│   ├── layout.tsx           # root, fonts, providers
│   └── page.tsx             # landing pública
├── components/
│   ├── cosmos/              # NebulaBg, GlowCard, OrbitalRing,
│   │                        # Star, Sparkline, CatIcon, NumberDisplay
│   ├── command/             # CommandBar + ⌘K provider
│   ├── layout/              # Sidebar, Topbar, Logo
│   ├── ui/                  # Button, Input, Label
│   ├── icons.tsx            # lucide-style SVG set
│   └── providers.tsx        # TanStack, Toaster, CommandBar
├── domain/                  # lógica de dominio pura (próximo)
├── server/
│   ├── auth/
│   └── supabase/            # server/browser/service/middleware clients
├── lib/                     # env, result, logger, utils
└── styles/globals.css       # tokens cosmos + utilities
```

## Decisiones de diseño aplicadas

- **Tipografía**: DM Sans (display + UI) + IBM Plex Mono (cifras y kbd). Una sola familia sans, sin serif.
- **Paleta**: cosmos dark — bg deep navy + acentos nebulares (violet/blue/cyan/rose) + semánticos (mint/coral/amber).
- **Metáforas**: río temporal (timeline), sistema solar (planes), constelación (login), nebula como fondo global per-screen.
- **Motion**: blob drift + starfield twinkle, todo respeta `prefers-reduced-motion`.
- **UX backbone**: `⌘K` command palette + cards proactivas + timeline navegable.

## Plan completo

`/root/.claude/plans/quiero-crear-una-webapp-glowing-cosmos.md` (referencia local del agente).

Roadmap por fases:

- **Fase 0** Bootstrap ✓ (config + design system + 7 pantallas)
- **Fase 1** Core financiero (cuentas, transacciones, import CSV) — siguiente
- **Fase 2** Presupuestos, metas, deudas, recurrentes
- **Fase 3** Motor heurístico + cards proactivas reales
- **Fase 4** Command palette funcional (ya está el shell)
- **Fase 5** Coach IA con Claude + OCR de tickets
- **Fase 6** Visualizaciones avanzadas (sankey, heatmap, treemap-nebulosa)
- **Fase 7** i18n + multi-moneda completa
- **Fase 8** Integraciones bancarias + notificaciones
- **Fase 9** Pulido + performance + a11y + PWA
