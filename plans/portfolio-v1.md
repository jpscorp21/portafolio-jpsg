# Portfolio v1 implementation plan

## Goal

Build a bilingual, static Astro portfolio for Jean Paul Saucedo, positioning him as a Senior Full-Stack Developer with seven years of experience across frontend, backend, databases, Rocky Linux, Docker, and deployment.

## Deliverables

- Spanish home at `/` and English home at `/en/`.
- Sticky navigation, dark theme by default, persistent light theme, and accessible mobile menu.
- Hero with portrait, CV download, email, project, GitHub, and LinkedIn actions.
- Four verified projects from the previous portfolio: financial system, real estate management, inventory, and collections.
- Skills grouped by frontend, backend, databases, infrastructure/deployment, and tools.
- Reverse chronological experience based on `CV2025.pdf`, with the open role explicitly marked as CV 2025 information pending confirmation.
- Contact area with email, WhatsApp, GitHub, LinkedIn, and Caacupé, Paraguay.
- Local fonts, responsive images, bilingual metadata, canonical URLs, language alternatives, and a 1200 × 630 social image.
- Extensible Markdown project collection plus maintenance documentation.

## Architecture

- Static Astro pages share one `PortfolioPage` component and typed locale data.
- Profile and experience live in `src/data/portfolio.ts`.
- Projects live in `src/content/projects/` and are validated by `src/content.config.ts`.
- Static CV and public project images live in `public/`; the portrait remains a source image optimized by Astro.
- JavaScript is limited to the theme switch and mobile navigation.

## Verification checklist

- [x] `npm run build` and `npm run check` succeed with no diagnostics.
- [x] Spanish and English routes contain equivalent content.
- [x] Dark and light themes render without a theme flash and persist after navigation.
- [x] Keyboard navigation, focus visibility, menu Escape behavior, and reduced motion work.
- [x] CV, email, WhatsApp, LinkedIn, and GitHub links resolve correctly.
- [x] Projects without demo or repository URLs show no empty actions.
- [x] Mobile and desktop layouts have no overflow or obscured anchors; the intermediate grid breakpoint is CSS-driven.
- [x] UI is reviewed against `DESIGN.md` and the installed web design guidelines.
- [x] Lighthouse mobile on the production build: Performance 100, Accessibility 100, LCP 1.7 s, CLS 0.036, Total Blocking Time 0 ms.

## Pending content

- Confirm whether the Logica S.A role remains current after the 2025 CV.
- Add verified project metrics, live demos, repositories, and newer screenshots when available.
- Replace the CV file while preserving `/cv/jean-paul-saucedo.pdf` whenever a new version is ready.
- Confirm the final production domain before changing canonical URLs.
