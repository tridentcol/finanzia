# Design handoff — Finanzia → Claude Design → implementación

Este documento contiene:

1. **El prompt master** para Claude Design (copia-pega directo).
2. **Variantes por pantalla** para refinar en pasos.
3. **Cómo hacerme el handoff de vuelta** para que implemente el resultado en código.

---

## 1 · Prompt master (copia esto entero)

```text
Diseña la interfaz de "Finanzia", una webapp premium de finanzas
personales con IA. No es un dashboard convencional: es un lienzo
navegable donde el dinero del usuario fluye como un río, las
categorías brillan como constelaciones y la IA aparece sólo cuando
tiene algo que aportar. La esencia es "decisiones inteligentes" — no
registros, no gráficos por defecto: insights accionables, simulaciones
realistas, copiloto silencioso.

═════════════════════════════════════════════════════════════════════
PRINCIPIOS RECTORES (no negociables)
═════════════════════════════════════════════════════════════════════

1. Anti-dashboard. Cada pantalla tiene UN número grande que ancla la
   atención (net worth, saldo del mes, % de meta). Nada de grids de
   widgets sin jerarquía.
2. Heurística primero, IA después. La IA es copiloto, no protagonista.
   No parece una app de chat con un LLM pegado encima.
3. Premium = aire. Espaciado generoso, microcopy preciso, motion
   orgánico (no rebotes infantiles).
4. Densidad gradual. Vista por defecto baja densidad; modo denso
   opcional para power users.
5. Datos como objetos celestes, no como filas planas. Cuentas =
   planetas, categorías = constelaciones, metas = órbitas, saldo
   = río temporal navegable.

═════════════════════════════════════════════════════════════════════
SISTEMA DE DISEÑO — TOKENS FIJOS (úsalos tal cual)
═════════════════════════════════════════════════════════════════════

PALETA · tema oscuro como canónico
  bg-deep         #05060A   fondo profundo, base global
  bg-base         #0A0B14   surface principal
  bg-elevated    #0F1120   surface sobre el lienzo
  bg-glass        rgba(255,255,255,0.03)   glassmorphism sutil
  bg-glass-strong rgba(255,255,255,0.06)   glass más opaco
  border-subtle   rgba(255,255,255,0.06)
  border-default  rgba(255,255,255,0.10)
  border-strong   rgba(255,255,255,0.16)
  text-primary    #F0F2FF
  text-secondary  #A8ADC9
  text-muted      #6B6F8D

ACENTOS NEBULARES (gradientes, glows, hero text)
  nebula-violet   #7B5BFF   acento dominante
  nebula-blue     #4F8CFF
  nebula-cyan     #5FE4FF
  nebula-rose     #FF5B9E   pop de calidez
  gradient-aurora linear-gradient(135deg, #7B5BFF 0%, #4F8CFF 50%, #5FE4FF 100%)
  gradient-deep-space radial-gradient(ellipse at top, #1A1735 0%, #05060A 60%)

SEMÁNTICOS
  mint-positive  #5DE2A2  ingresos, hitos, ratios sanos
  coral-negative #FF6E7A  gastos, alertas críticas, deuda
  amber-warning  #FFB547  anomalías, presupuestos quemándose
  azure-info     #5FB8FF  proyecciones, info contextual

GLOW (sombras coloreadas para acento, no decorativas)
  glow-violet  0 0 40px -10px rgba(123,91,255,0.5)
  glow-mint    0 0 32px -8px  rgba(93,226,162,0.4)
  glow-coral   0 0 32px -8px  rgba(255,110,122,0.4)
  shadow-elev  0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -24px rgba(0,0,0,0.5)

TIPOGRAFÍA — DM Sans + IBM Plex Mono (decidida, no cambiar)
  Display:  DM Sans, weight 300, font-variation-settings "opsz" 40,
            letter-spacing -0.035em a -0.04em
  UI:       DM Sans, weights 400/500/600, opsz 14, tracking normal
  Mono:     IBM Plex Mono, weights 400/500 — cifras tabulares,
            códigos, metadatos técnicos, kbd shortcuts
  Numérico: siempre font-variant-numeric: tabular-nums lining-nums
  Scale:    12 / 14 / 16 / 20 / 25 / 31 / 39 / 49 / 64 / 80 / 96 px

ESPACIADO (sistema base 4, stops generosos)
  4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 120 px
  Premium = más aire que un SaaS estándar.

RADII
  4, 8, 12, 16, 24, 999 px
  Cards principales: 16-24 px (rounded-2xl / rounded-3xl)
  Botones primarios: pill (999)
  Inputs: 12 px

═════════════════════════════════════════════════════════════════════
FONDO GLOBAL — "Nebula Canvas"
═════════════════════════════════════════════════════════════════════

Toda la app vive sobre un canvas fijo position:fixed con tres capas:

1. Radial deep-space gradient en la parte superior (ya descrito).
2. Tres "blobs" gaussianos:
   - Violeta arriba-izquierda
   - Cyan-blue derecha-medio
   - Rose abajo-centro
   Cada blob: blur 60-80px, mix-blend-mode screen, drift orgánico
   28-40s loop (translate ±50px, ease-in-out).
3. Starfield: ~1500 puntos blancos sutiles con twinkle suave
   (oscilación de alpha 0.2-0.8, periodo 4-8s aleatorio).
4. Vignette radial muy ligero al borde para anclar el contenido.

Bajo prefers-reduced-motion: blobs estáticos, sin twinkle, sin drift.

═════════════════════════════════════════════════════════════════════
PANTALLAS A DISEÑAR (7 obligatorias + 3 deseables)
═════════════════════════════════════════════════════════════════════

▒▒▒ 01 · LANDING PÚBLICA ▒▒▒
Hero centrado:
  - Badge orbit pill arriba: "● Tu copiloto financiero con IA · Beta privada"
    (dot violeta con glow, pill rgba violeta sutil)
  - H1: "Tu universo financiero," + line break + "en un solo lienzo."
    El segundo verso con gradient-aurora aplicado al texto.
    Tamaño 72-96px en desktop, line-height 1.02, tracking -0.04em.
  - Lead: párrafo de 2 frases, max-width 640px, text-secondary,
    19px, line-height 1.55.
  - CTA principal aurora (pill) + CTA secundario glass.

Hero preview (card grande bajo el hero):
  - Columna izquierda: hero number "€ 47.382,18" en aurora-text,
    delta verde "+€ 2.140,40 este mes · +4,7 %",
    sparkline aurora 2px con dot brillante al final.
  - Columna derecha: 3 mini-insights apilados, cada uno con un "star"
    redondo (24px gradient-aurora con glow) + título + descripción.

Sección "Más allá del dashboard" con 3 features en grid:
  - Río temporal · Constelación de categorías · Cartas proactivas
  - Cada feature: icono en cuadrado violeta (40px, rgba violeta),
    título 16px medio, descripción 14px secondary.

Sección "Tres promesas" con 3 cards numeradas (01/02/03 en
aurora-text 40px, Plex Mono no — DM Sans con font-variation opsz 40).

Cierre con CTA grande "Tu próximo movimiento empieza con uno."

Header fijo: logo izquierda, nav central (Concepto / Cómo funciona /
Planes / Manifiesto), Entrar + Empezar a la derecha.

Footer minimal: © año + Privacidad + Términos.

▒▒▒ 02 · TIMELINE (HOME DE LA APP) — la pantalla más importante ▒▒▒

Layout: sidebar 240px + área principal scrollable.

Sidebar (sticky, glass sobre nebula):
  - Logo arriba
  - Grupos colapsables con etiquetas Plex Mono uppercase 10px tracking 0.18em:
    UNIVERSO → Timeline · Insights (con badge violeta count) · Coach IA
    MOVIMIENTOS → Cuentas · Transacciones · Recurrentes
    PLANIFICACIÓN → Presupuestos · Planes · Deudas
  - Nav items: icono lucide 16px + texto 14px, padding 10/12,
    radius 10, hover bg-glass, activa bg-glass-strong + border-default
  - Footer: avatar 32px gradient + "Carlos S." + "Plan Premium" +
    settings icon ghost

Topbar (sticky, glass blur):
  - Breadcrumbs: "Universo › Tu río de mayo" (último en text-primary)
  - Command trigger: pill 320px "Busca, navega, pregunta…" con
    icono search + kbd "⌘K" a la derecha
  - Botón "Nueva" secondary con plus
  - Bell icon ghost

Contenido principal — dos filas hero:

Fila 1 (grid 1.4fr 1fr):
  HERO CARD (lienzo principal):
    - Eyebrow: "Tu patrimonio · 25 mayo 2026" Plex Mono uppercase
    - Hero number: "€ 47.382,18" — DM Sans 300, 88px,
      currency symbol € pequeño (32px) elevado.
    - Delta verde mint: "↗ +€ 2.140,40 este mes · +4,7 % vs abril"
      en Plex Mono.
    - Meta row separada por divider: Líquido / Ahorro / Inversión / Deuda
      cada uno con label uppercase Plex 11px y valor DM Sans 22px.

  HEALTH CARD:
    - Eyebrow "Salud financiera"
    - Orbital ring SVG 120x120 (gradient violet→blue→cyan) mostrando
      score 78
    - 4 mini-bars al lado con etiquetas: Ahorro / Liquidez /
      Diversificación / Deuda-ingreso. Cada bar con fill aurora.

Fila 2 (grid 3 columnas):
  3 INSIGHT CARDS:
    - Glass, padding 20, radius 16
    - Cada una: top con "star" 32px (gradient según severity:
      violeta default, ámbar+coral para warning, mint+blue para
      positive) + pill etiqueta tipo
    - H4 título (14px, font-medium)
    - P descripción 13px secondary
    - CTA cyan "Ver detalle →"
  Ejemplos:
    · Warning: "Gastaste 32% más en restaurantes"
    · Info:    "Cerrarás mayo con +€ 1.840"
    · Positive: "Plan «Japón 2027» al 41%"

THE RIVER (sección core):
  - H3: "Tu río de mayo" (DM Sans 300, 28px, tracking -0.02em)
  - Sub: "Cinco días recientes y proyecciones de los próximos."
  - Future marker: línea horizontal con label "Hoy · 25 mayo"
    (Plex Mono uppercase, divider con aurora gradient sutil)
  - Vertical timeline central:
    · Eje vertical 1px con linear-gradient (transparent → violet →
      cyan → transparent)
    · Por cada día: grid 3 columnas (tx-list izq | stamp central | tx-list der)
    · Stamp central: círculo 72px glass con border + glow halo violeta,
      número del día (DM Sans 300, 24px) + nombre del día Plex 10px,
      bajo: "Saldo neto" + cifra DM Sans 300 18px
    · Transacciones: cards horizontales glass con icono categoría 32px
      cuadrado radius 10, merchant 13px medio, meta 11px muted,
      amount Plex Mono 13px medium (mint para in, primary para out)
    · River-insight intercalado: card con star gradient + título +
      texto, fondo rgba violeta 0.08, border violeta 0.2
  - Otro future marker debajo: "Próximos días · proyectado",
    opacity 0.6 en las cards futuras

▒▒▒ 03 · COMMAND BAR (⌘K abierto) ▒▒▒

Overlay sobre la pantalla activa (timeline blurred al 40% opacity).

Bar centrado, top 14vh, width 680px:
  - Container: radius 20, rgba(15,17,32,0.85), backdrop-blur 40px
    saturate 180%, glow violeta sutil (0 0 80px -20px violeta 0.3)
  - Input row: search icon 20px muted + input grande 17px + chip "⌘K"
    violeta a la derecha
  - Bajo el input row: hint AI siempre presente (card glass aurora-
    tinted con dot pulsante violeta, label "Pregunta a Finanzia
    (Claude)", luego texto sugerido sobre la query del usuario)
  - Cuerpo scrollable max-height 60vh:
    · Group label Plex Mono uppercase muted "Acciones rápidas"
    · Items: icono 28px cuadrado en glass, label 14px + descripción
      12px muted, kbd shortcuts a la derecha
    · Item activo: bg violeta 0.12
    · Otros grupos: Categorías (con pills tipo) · Transacciones · Navegación
  - Footer: hints "↑↓ navegar · ↵ ejecutar · ? IA" + "esc cerrar"

▒▒▒ 04 · PLANES DE AHORRO (sistema solar) ▒▒▒

Layout app shell igual.

Page header:
  - H1 DM Sans 200 56px "Tu sistema solar de planes."
  - Sub 15px secondary
  - A la derecha: "Aporte mensual conjunto" + "€ 920" DM Sans 36px 300

PLANET SYSTEM (visualización principal):
  Container 460px alto, glass radius 24, overflow hidden.
  - 4 órbitas concéntricas con border-dashed muy sutil (~0.08 opacity)
  - Estrella central: 60px círculo gradient-aurora con glow doble
    (60px violet + 120px cyan)
  - Planetas en órbitas distintas (proximidad indica plazo / progreso):
    · Fondo emergencia 86% — 56px radial mint→blue, emoji 🛟
    · Japón 2027 41% — 48px radial amber→rose, emoji 🌸
    · Coche eléctrico 22% — 40px radial cyan→blue, emoji 🚗
    · Entrada piso 12% — 64px radial violet→rose, emoji 🏡 (más lejos)
    · Año sabático 34% — 44px radial light-violet→violet, emoji 🌴
  - Cada planeta con label flotante: pill glass "Nombre · 41%"

Bajo el sistema, GRID DE 3 CARDS DETALLE + 1 CARD vacío para crear:
  Cada card glass radius 18:
    - Top: emoji 28px + pill estado (positive "A tiempo" / warning
      "Falta ritmo")
    - Eyebrow muted Plex tipo "Prioridad alta"
    - Plan name DM Sans 300 24px
    - Orbital ring 144x144 SVG con gradient correspondiente al plan,
      número % grande en el centro
    - Plan amounts: ahorro actual DM Sans 300 20px + de € target
    - ETA card: rgba violeta + texto "Listo en X meses al ritmo actual"

Card "+ Nuevo plan": border-dashed, hover transición a violeta.

Coach hint en la parte inferior:
  - Card aurora-tinted full-width con star + título + texto +
    botón "Ver simulación"

▒▒▒ 05 · COACH IA ▒▒▒

Layout: sidebar normal + área principal con grid 1fr / 320px:

Pane izquierdo (chat, max-width 760px centrado):
  Convo header:
    - Avatar 44px gradient-aurora con orbiting ring animado
    - H1 "Conversación sobre tu mayo"
    - Sub muted
    - Pill violeta "Contexto: 8,2 K tok cached"

  Messages stream:
    · Mensaje usuario: alineado derecha, body en glass card con
      border-subtle, avatar 32px gradient cyan→mint a la derecha,
      "who" label Plex uppercase muted arriba.
    · Mensaje AI: alineado izquierda, avatar 32px aurora con glow,
      body sin card (texto fluyendo), 15px line-height 1.65.
    · Reasoning card embedded en mensaje AI: rgba bg, divider dashed
      entre rows, "verdict" card mint al final.
    · Action chips horizontales debajo: pills glass con icono + label.

  Composer sticky bottom:
    - Suggestion chips encima
    - Box pill grande con input + actions (upload, mic, send aurora)

Pane derecho (knowledge panel, glass strong):
  - H3 "Lo que sé de ti" DM Sans 300
  - Sub muted "Contexto cifrado y cacheado..."
  - Secciones con border-subtle entre ellas:
    · Identidad: moneda base, tz, situación
    · Snapshot financiero: patrimonio, liquidez, ahorro mensual,
      tasa, health score
    · Mes actual: ingresos, gastos, top categoría, anomalías
    · Planes activos
  - Cada row: span text-secondary + strong Plex Mono pequeño
    (positive verde / negative coral cuando aplica)
  - Bottom: card cyan tint "Cache hit · ahorraste 6,4 K tokens"

▒▒▒ 06 · ONBOARDING (paso 4 de 8 — selección de metas) ▒▒▒

Layout split: izquierda copy / derecha form.

Header top fijo:
  - Logo izquierda
  - Progress en el centro: barra fina 2px aurora-fill + 8 steps con
    marcadores (done verde mint, current aurora con glow, pending
    rgba)
  - Salir ghost

Lado izquierdo (copy):
  - Eyebrow Plex uppercase "Paso 4 · Tus metas"
  - H1 DM Sans 200 56px "¿Qué quieres conseguir en los próximos
    12 meses?" con "conseguir" en aurora-text
  - 2 párrafos lead
  - Card aurora-tinted "Por qué te lo pedimos" con star icon y
    explicación de cómo afecta a insights y coach

Lado derecho (form card glass radius 24):
  - Field "Tu situación actual" con 4 range-cards 2x2:
    · 🌱 Construir base | 🌳 Crecer ahorro
    · 🚀 Invertir | 🛡️ Reducir deuda
    Card selected: border violeta + bg violeta 0.08 + ring
  - Field "Metas concretas (varias)":
    Goal pills horizontal flex-wrap, cada pill: emoji + checkbox
    circular (gradient aurora cuando seleccionado) + label
    Ejemplos: 🛟 Fondo emergencia · 🌸 Japón · 🏡 Piso · 🚗 Coche · etc.
  - Actions footer: "Continuar sin elegir →" link muted +
    botones Atrás / Continuar aurora

▒▒▒ 07 · LOGIN / SIGNUP ▒▒▒

Layout split 50/50 desktop.

Lado izquierdo (decorativo):
  - Starfield denso animado
  - Constelación SVG grande en el centro (≈420px):
    · 8 nodos blancos pequeños conectados por líneas dashed con
      gradient aurora
    · Halo radial cyan detrás de cada nodo
    · Nodo central más grande con halo mayor
  - Top: logo + "← Volver al inicio"
  - Bottom: bloque manifiesto con eyebrow + H2 DM Sans 200 36px
    con "como una constelación" en italic-aurora + lead

Lado derecho (form):
  Form max-width 380 centrado:
    - H1 "Entra a tu universo." 40px DM Sans 200
    - Subtitle con link "crea uno nuevo"
    - Botones sociales apilados: Google (logo color) + Apple (logo
      blanco), glass + border-default
    - Divider: línea + "o con email" + línea
    - Input email pre-filled "carlos@finanzia.app"
    - Botón "Enviar enlace mágico" aurora full-width 48px
    - Foot text muted con links a términos y privacidad

═════════════════════════════════════════════════════════════════════
PANTALLAS DESEABLES (si hay tiempo)
═════════════════════════════════════════════════════════════════════

8 · Transacciones (tabla densa virtualizada con filtros pills, drawer
    de detalle al click, bulk actions sticky bottom)
9 · Detalle de cuenta (hero account number + sparkline + transacciones
    recientes + acciones rápidas)
10 · Reports (sankey de flujo de caja + heatmap calendario + treemap
    como nebulosa)

═════════════════════════════════════════════════════════════════════
COMPONENTES Y PATRONES CLAVE
═════════════════════════════════════════════════════════════════════

• Botones (pill 999):
  - Primary: text-primary bg sobre dark, sombra elev
  - Aurora: gradient-aurora bg, glow violet-blue, hover translate -1px
  - Secondary: glass + border default, hover glass-strong
  - Ghost: transparent, hover bg-glass
  - Danger: coral bg
  Sizes: sm 32px / md 40px / lg 48px / icon cuadrado

• Cards:
  - GlowCard: glass radius 16-24, padding 20-32, opcional glow color
    (violet/mint/coral/aurora) que se activa en hover si interactive
  - Hero card: gradient overlay sutil border (linear 135deg violet
    fade-to-transparent) tipo "aurora-edge"

• Inputs:
  - 44px height, radius 12, bg-glass, border-default
  - Focus: border violet + ring 30% violet

• Pills/Tags:
  - height 24px, padding 10
  - variants: info (cyan), positive (mint), warning (amber),
    critical (coral), neutral (secondary), violet

• Kbd:
  - radius 4, bg rgba 0.06, border default, Plex Mono 11px,
    height 20px

• Star (avatar de insight/IA):
  - círculo gradient con glow proporcional al peso del mensaje,
    32px o 44px según contexto

• Orbital ring:
  - SVG circular con stroke gradient, transición de progreso
    duración 1s ease-cosmos (cubic-bezier 0.16,1,0.3,1)

• Aurora divider:
  - 1px height, gradient horizontal transparent → violet → cyan →
    transparent

═════════════════════════════════════════════════════════════════════
MOTION (Framer Motion variants)
═════════════════════════════════════════════════════════════════════

- Ease cosmos: cubic-bezier(0.16, 1, 0.3, 1)
- Spring soft: { stiffness: 120, damping: 20 }
- Spring bounce: { stiffness: 280, damping: 18 }
- Entradas fadeRise: opacity 0→1, y 12→0, dur 0.45, ease cosmos
- StaggerChildren 0.06s entre cards
- Hover cards interactivos: y -2px, dur 0.18
- Hero number cambios: useSpring animation 0.7s

Cualquier cosa decorativa: desactivada bajo prefers-reduced-motion.

═════════════════════════════════════════════════════════════════════
COPY Y TONO
═════════════════════════════════════════════════════════════════════

Voz: precisa, cálida, segura, con toque editorial. Sin tecnicismos
sin necesidad. Sin imperativos vacíos. Cuando hablamos del producto,
hablamos en segunda persona ("tu río", "tus planes").

Microcopy ejemplos a usar:
  - "Tu río de mayo" en vez de "Timeline · Mayo"
  - "Tu sistema solar de planes" en vez de "Goals"
  - "Lo que sé de ti" en vez de "User context"
  - "Tu próximo movimiento empieza con uno." (CTA cierre landing)
  - "Las estrellas brillan cuando tu mes va bien." (cuando hay
    racha positiva)
  - Eyebrows en Plex Mono uppercase tracking 0.16em, no más de
    18 caracteres.

═════════════════════════════════════════════════════════════════════
ANTIPATTERNS (NO HAGAS ESTO)
═════════════════════════════════════════════════════════════════════

✗ Filas de KPIs idénticos en grid 4 columnas en el home (típico SaaS)
✗ Gráficos sin contexto narrativo
✗ Microcopy genérico ("Bienvenido de nuevo, Carlos!")
✗ Modals centrados grandes para acciones rápidas (usa drawer/sheet
   o el command bar)
✗ Iconos de colores aleatorios (categorías sí pueden tener color
   propio, pero todo lo demás sigue la paleta)
✗ Botones cuadrados (excepto inputs y cards)
✗ Bordes 1px con color saturado (siempre rgba blanco bajo)
✗ Animaciones de rebote infantiles
✗ "Loading..." sin skeleton con la forma del contenido real
✗ Mezclar serif con sans (la decisión es sans-only DM Sans)

═════════════════════════════════════════════════════════════════════
ACCESIBILIDAD
═════════════════════════════════════════════════════════════════════

- Contraste AA mínimo, AAA en hero numbers
- Focus ring violeta 2px offset 2px en cualquier interactivo
- Navegación completa por teclado (incluido command bar)
- Reduced motion: sustituye springs por tween 150ms
- Tabular nums obligatorias en cualquier número visible

═════════════════════════════════════════════════════════════════════
ENTREGABLE ESPERADO
═════════════════════════════════════════════════════════════════════

Genera las 7 pantallas obligatorias listadas en formato desktop
(1440x900 mínimo). Si la herramienta lo permite, exporta también
componentes en código (preferencia: React + Tailwind v4 + CSS
variables coincidiendo con los tokens listados arriba, o HTML/CSS
puro como fallback). Si hay variantes por estado, muestra el
default + hover + active para botones e insight cards.
```

---

## 2 · Cómo usar el prompt

### Opción A — Generar todo de una vez
Pega el bloque entero arriba. Algunas herramientas tienen límites de
tokens; si recorta, divide en dos pasadas:

**Pasada 1 — sistema:** desde el inicio hasta el final de
*COMPONENTES Y PATRONES CLAVE*. Pide que genere el sistema de
componentes base (botones, cards, inputs, pills, nebula bg) en una
página de design library.

**Pasada 2 — pantallas:** pega la sección PANTALLAS A DISEÑAR y
pídele que reutilice los componentes ya definidos.

### Opción B — Pantalla por pantalla
Si quieres iterar con más control, usa solo la sección
*SISTEMA DE DISEÑO — TOKENS FIJOS* + *FONDO GLOBAL* + el bloque de
una sola pantalla (ej. ▒▒▒ 02 · TIMELINE ▒▒▒). Repite por cada
pantalla.

### Refinamiento
Después de cada generación, puedes pedir ajustes con prompts cortos:

> "Reduce la densidad de la sección 'Health card'. Mueve los 4
> mini-bars debajo del ring en lugar de al lado. Hazlos más finos."

> "El hero number se ve flojo, sube el peso de 300 a 400 y aprieta
> el tracking a -0.045em."

> "Cambia los planetas en el sistema solar: que el más grande sea
> 'Entrada piso' (el más lejos) y el más pequeño 'Coche eléctrico'."

---

## 3 · Handoff de vuelta — qué necesito recibir

Para que materialice el diseño en código React limpio en este repo,
mándame **una de estas tres opciones** (en orden de preferencia):

### 🥇 Opción 1 — Export de código

Si Claude Design exporta React + Tailwind:
- Comparte el ZIP o pega los componentes en archivos nuevos bajo
  `design-export/` en este repo (yo lo adapto a la arquitectura).
- También útil: el `globals.css` que genere con los tokens, lo
  comparo con el mío.

### 🥈 Opción 2 — Screenshots + decisiones

Si solo puedes exportar imagen:
- **Screenshots de cada pantalla** (PNG, resolución 2x si es posible),
  guárdalos en `docs/design-screens/`. Nómbralos `01-landing.png`,
  `02-timeline.png`, etc.
- **Apunta cualquier decisión que tomaste** que se aparte del prompt:
  "cambié el tracking del hero a X", "usé un layout 2 columnas en
  vez de 3 en planes", etc.
- Si Claude Design ofrece "design tokens" como JSON, también
  inclúyelo en `docs/design-tokens.json`.

### 🥉 Opción 3 — Sólo descripción

Si la herramienta no permite export, copia las decisiones de diseño
que tomó por pantalla. Yo reconstruyo en código a partir de eso.

---

## 4 · Qué hago yo cuando me lo pases

1. Reviso vs mis primitivas cosmos existentes (NebulaBg, GlowCard,
   OrbitalRing, NumberDisplay) y veo qué reutilizo y qué hay que
   crear nuevo.
2. Actualizo los tokens en `src/styles/globals.css` si hay
   refinamientos.
3. Materializo cada pantalla como ruta real en
   `src/app/app/<route>/page.tsx` con Server Components +
   componentes cliente donde haga falta.
4. Reemplazo los mockups HTML por las páginas Next reales.
5. Push y deploy. Tienes las pantallas reales para clickear, no
   sólo HTML estático.

---

## 5 · Lo que NO espero del diseño

- Que defina el schema de base de datos, las server actions, la
  lógica de IA o las integraciones bancarias. Eso está cubierto en
  el plan técnico.
- Que decida la arquitectura de componentes. Yo lo organizo según
  el patrón Server Component + islas cliente que ya está montado.
- Que cambie las decisiones ya cerradas: stack (Next 15 + Supabase),
  tipografía (DM Sans + Plex Mono), paleta (cosmos dark), metáforas
  (río + sistema solar + constelación + nebula).
