# Validation record

Validated on September 28, 2026 against the production build.

- `npm run build`: passed.
- `npm run check`: passed with 0 errors, warnings, or hints.
- Lighthouse mobile: Performance 100, Accessibility 100.
- Lighthouse metrics: LCP 1.7 s, CLS 0.036, Total Blocking Time 0 ms.
- Manual review: Spanish and English routes, dark and light themes, mobile navigation, Escape handling, theme persistence, project image treatment, contact links, and CV download.
- Web Interface Guidelines review: explicit image dimensions, semantic controls and links, icon button labels, visible focus, reduced-motion handling, touch targets, theme colors, and skip navigation are present.

## Hero update — September 29, 2026

- `npm run check`: 0 errors, warnings, or hints. `npm run build`: passed for both routes.
- Browser review: desktop dark/light, Spanish mobile at 390 px, English mobile at 320 px; no horizontal overflow at either mobile width.
- Navbar portrait, Hero title, localized copy, and configured WhatsApp destination verified.
- Mobile navigation opens and closes with Escape; keyboard focus visible. Theme toggle verified in both directions.
- Hero/Header/CSS review against Web Interface Guidelines: semantic links, explicit avatar dimensions, decorative SVG hidden, visible focus and existing reduced-motion rules preserved.
- Scope: Hero and navbar portrait only; no production deployment or new Lighthouse run.
