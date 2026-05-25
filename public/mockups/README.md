# Mockups · Finanzia

Sistema visual **cosmos** aplicado a las pantallas clave del producto. HTML/CSS puro — sin React ni dependencias — para iterar el diseño antes de materializarlo en componentes Next.

## Cómo revisarlos

Abre `mockups/index.html` en el navegador. Cada tarjeta tiene preview en miniatura y abre la pantalla completa al hacer clic.

## Pantallas incluidas

| # | Archivo | Qué muestra |
|---|---|---|
| 01 | `01-landing.html` | Landing pública con hero editorial, orbit badge, preview de la app y manifiesto. |
| 02 | `02-timeline.html` | **El home.** River financiero, hero number, salud, cards proactivas y eventos pasados + proyectados. |
| 03 | `03-command-bar.html` | `⌘K` abierto sobre el timeline. Cuatro modos: acciones, navegación, búsqueda, Ask AI. |
| 04 | `04-plans.html` | Planes de ahorro como sistema solar con orbital rings y sugerencias del coach. |
| 05 | `05-coach-ia.html` | Chat con Claude, simulación financiera, panel «lo que sé de ti» transparente, cache de tokens. |
| 06 | `06-onboarding.html` | Wizard de 8 pasos (paso 4 mostrado): selección de metas con justificación. |
| 07 | `07-login.html` | Entrada con magic link + Google/Apple, constelación animada y manifiesto. |

## Decisiones visuales clave a aprobar

- **Paleta** dark con acentos nebulares (violet/blue/cyan/rose) + semánticos (mint/coral/amber).
- **Tipografía**: Fraunces (display, números grandes), Geist Sans (UI), Geist Mono (cifras y códigos).
- **Movimiento**: drift orgánico de nebulas, twinkle de estrellas, springs suaves para entrada de cards. Todo respeta `prefers-reduced-motion`.
- **Patrón anti-dashboard**: hero number grande por pantalla, microcopy poético pero conciso, datos primero como narrativa visual, tabla solo cuando importa.
- **Metáforas centrales**: río temporal (timeline), sistema solar (planes), constelación (login), nebula (fondo global).

## Si algo no cuadra

Anota qué quieres cambiar (tono, espaciado, una pantalla concreta, una metáfora que no funciona) y lo reviso antes de codificar los componentes React.
