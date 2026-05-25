# Finanzia

> Tu universo financiero, en un solo lienzo.

Webapp premium de finanzas personales con motor heurístico + IA opcional (Claude).
Stack: Next.js 15 + Supabase + Tailwind v4. Sistema visual «cosmos».

## Estado actual

Bootstrap inicial + sistema de diseño + **7 mockups visuales** para validar la dirección antes de codificar las pantallas en React.

- 🏠 **Landing** del deploy lista una galería de mockups con instrucciones.
- 🎨 **Mockups** en HTML/CSS puro servidos como estáticos en `/mockups/*`.
- ⚙️ **Componentes cosmos** ya como primitivas React (NebulaBg, GlowCard, OrbitalRing, NumberDisplay, AuroraDivider).
- 🔐 **Supabase clients** preparados (server/browser/service/middleware) — se activan al añadir las env vars.

## Cómo correrlo en local

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

Los mockups quedan accesibles en:

- `/mockups/index.html` (galería)
- `/mockups/01-landing.html` … `/mockups/07-login.html`

## Despliegue

Vercel + branch `claude/finanzia-finance-webapp-FgjCT`.

No requiere env vars para el preview actual (solo mockups + landing). Cuando se conecte Supabase y Claude, se añaden en Vercel → Project → Environment Variables (ver `.env.example`).

## Estructura

```
src/
├── app/                 # App Router
├── components/
│   ├── cosmos/          # NebulaBg, GlowCard, OrbitalRing, NumberDisplay
│   └── ui/              # Button, Input, Label (shadcn-style)
├── domain/              # Lógica de dominio pura (próximo)
├── server/
│   ├── auth/
│   └── supabase/
├── lib/                 # env, result, logger, utils
└── styles/              # globals.css con tokens cosmos
public/mockups/          # mockups HTML estáticos
```

## Plan completo

`/root/.claude/plans/quiero-crear-una-webapp-glowing-cosmos.md` (referencia local del agente).

Resumen del roadmap por fases:

- **Fase 0** Bootstrap (en curso)
- **Fase 1** Core financiero (cuentas, transacciones, import CSV)
- **Fase 2** Presupuestos, metas, deudas, recurrentes
- **Fase 3** Motor heurístico + cards proactivas + timeline río
- **Fase 4** Command palette ⌘K
- **Fase 5** Coach IA con Claude + OCR de tickets
- **Fase 6** Visualizaciones avanzadas (sankey, heatmap, treemap-nebulosa)
- **Fase 7** i18n + multi-moneda completa
- **Fase 8** Integraciones bancarias + notificaciones
- **Fase 9** Pulido + performance + a11y + PWA
