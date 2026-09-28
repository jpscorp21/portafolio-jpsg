# Portfolio design system

This file is the visual source of truth for the portfolio. Read it before changing any interface. If a deliberate visual decision changes, update this document in the same change.

## Direction

The portfolio presents Jean Paul Saucedo as a senior full-stack developer who works across product interfaces, APIs, data, and infrastructure. The visual language combines a near-black technical workspace with a vivid orange signal color. It should feel precise, experienced, and human.

The memorable device is the hero portrait surrounded by four connected areas of work: UI, APIs, databases, and Linux deployment. Keep the rest of the interface restrained so this idea remains clear.

References:

- `docs/references/portfolio-reference-orange.png`: primary reference for the split hero, portrait treatment, black/orange palette, and sans-serif typography.
- `docs/references/portfolio-reference-gold.png`: reference for image-led project cards and a visible contact area.
- <https://full-stack-developer-22.aura.build/>: reference for generous spacing, direct navigation, and large typographic hierarchy.
- <https://jeanpaulsaucedo.netlify.app/>: source for existing project content.

References are inspiration only. Do not copy their identities, claims, testimonials, metrics, or personal information.

## Foundations

### Color

| Token | Dark theme | Light theme | Use |
| --- | --- | --- | --- |
| Background | `#0A0A0A` | `#FAFAF9` | Page canvas |
| Surface | `#171717` | `#FFFFFF` | Cards, menus, framed content |
| Text | `#FAFAFA` | `#171717` | Primary copy |
| Muted text | `#B8B8B8` | `#57534E` | Supporting copy |
| Accent | `#FF7A18` | `#C2410C` | Actions, focus, selected details |
| Border | `#343434` | `#D6D3D1` | Structure and separation |

Dark is the default. Orange is a signal, not a background texture: reserve it for calls to action, navigation feedback, small structural marks, and the contact panel. Use the light theme accent with white text to preserve contrast.

### Typography

- Display: Space Grotesk Variable, locally served. Use for headings, navigation, buttons, and short labels.
- Body: Source Sans 3 Variable, locally served. Use for paragraphs and supporting information.
- H1: `clamp(2.7rem, 5.8vw, 4.5rem)`, line-height 1.02, weight 700, maximum width approximately 13 characters.
- Section heading: `clamp(2.25rem, 4.8vw, 3.75rem)`.
- Body: 17 px by default, 1.6 line-height. Keep paragraphs below 80 characters per line.
- Use sentence case. Do not add all-caps labels or selectively color a word inside a headline.

### Layout and spacing

- Maximum content width: 1120 px.
- Base spacing unit: 8 px.
- Page gutters: 16 px on small screens; the content shell controls larger screens.
- Section spacing: 72-112 px, fluid with viewport width.
- Component radius: 12-20 px. Portrait frame may use an asymmetric radius.
- Header height: 76 px and sticky.

Desktop hero:

```text
┌────────────────────────────────────────────────────────────┐
│ status                                                     │
│ headline + proposition       portrait + capability nodes   │
│ primary actions              UI / API / DB / Linux          │
│ project + social links                                     │
└────────────────────────────────────────────────────────────┘
```

Stack hero content before the portrait below 992 px. All project and skill grids become one column on small screens.

## Components

- Primary button: orange fill and high-contrast text. Use for the single most important action in a group.
- Secondary button: transparent with a visible border. It must remain visually subordinate.
- Professional links: underlined text with explicit names. External links include a visible northeast arrow and open in a new tab.
- Project card: real image, title, concise problem statement, one supporting detail, and technology tags. The first project may span the full grid. Demo and repository links appear only when real URLs exist.
- Skill group: named category and a plain list. Never use proficiency percentages or progress bars.
- Timeline: reverse chronological sequence with periods, role, company, and outcome-oriented description.
- Contact panel: solid accent background. Keep email, WhatsApp, location, LinkedIn, and GitHub easy to scan.

## Images

- `src/assets/jean-paul-saucedo.png` is the source portrait. Preserve identity, crop, and natural proportions. Do not apply face alteration or generative edits.
- The hero portrait is at most 320 px wide and uses an orange geometric background plus restrained capability labels.
- Project screenshots live in `public/images/projects/`. Prefer real product images. Use descriptive alternate text and preserve the important area with `object-position`.
- Reference images live in `docs/references/` and must never be served as portfolio content.
- Social preview is 1200 × 630 px and uses the same color and type hierarchy.

## Interaction and accessibility

- Motion lasts 150-200 ms and only acknowledges an action or hover. Do not add continuous animation or staggered entrance effects.
- Respect `prefers-reduced-motion`.
- Interactive targets are at least 44 × 44 px.
- Keyboard focus uses a visible 3 px accent outline.
- All images need meaningful alternative text unless decorative.
- Navigation must work with keyboard, Escape must close the mobile menu, and the theme selection must persist.
- Maintain WCAG AA contrast in both themes. Validate both before merging UI changes.

## Content rules

- Write for technical recruiters and engineering teams. Prefer specific systems and outcomes over adjectives.
- Do not publish unverified metrics, job status, project links, or client claims.
- Keep Spanish and English content equivalent in meaning.
- New projects must use the content collection and must not require component edits.
