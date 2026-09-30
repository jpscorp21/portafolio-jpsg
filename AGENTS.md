## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Deployment

The portfolio uses Cloudflare for deployment and hosting.

Production site: [portafolio-jpsg.jpscorp21.workers.dev](https://portafolio-jpsg.jpscorp21.workers.dev/).

## Design skills

Before working on the portfolio UI, discover the relevant skills in the session's available-skills list and read their `SKILL.md` instructions.

These skills are installed in the local Codex skills directory (`$CODEX_HOME/skills`, defaulting to `~/.codex/skills`):

| Skill | When to use | Instruction file | Source |
| --- | --- | --- | --- |
| `frontend-design` | Creating or redesigning pages and components; choosing layout, typography, colors, and motion. | `~/.codex/skills/frontend-design/SKILL.md` | [Anthropic](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| `web-design-guidelines` | Reviewing UI, accessibility, usability, and interaction details. Fetch the latest guidelines as instructed by the skill. | `~/.codex/skills/web-design-guidelines/SKILL.md` | [Vercel](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) |

Use `frontend-design` for design implementation and `web-design-guidelines` for relevant UI reviews. Apply them within the project's Astro architecture and consult the Astro guides below when needed.

Keep design plans in `plans/` and document established visual decisions in `docs/`.

## Design system

Read [`DESIGN.md`](DESIGN.md) before creating or changing any user interface. Treat it as the visual source of truth for colors, typography, spacing, components, images, responsive behavior, interaction, and accessibility.

Every intentional change to the design system must update `DESIGN.md` in the same change. Keep reference images in `docs/references/`; never ship them as portfolio content.

These installations are local to the developer's machine, not bundled with this repository. If a skill is missing, report it and use `skill-installer` to install it from the linked source when authorized. Resolve paths against `$CODEX_HOME` when it is configured.

## Documentation

Project knowledge is organized in two directories:

- [`docs/`](docs/): Project documentation, technical decisions, and guides. Keep it updated as the project evolves.
- [`plans/`](plans/): Plans for future work, including objectives, scope, and implementation steps. Update plans as work progresses.

Consult relevant documentation and plans before starting related work.

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
