# Portfolio content guide

## Update personal information

Edit `src/data/portfolio.ts` for profile links, skill groups, and work experience. Every visitor-facing sentence must have Spanish and English versions. Keep dates and claims factual; mention the source date when current status is uncertain.

## Add a project

1. Copy `docs/project-template.md` into `src/content/projects/` with a lowercase hyphenated filename.
2. Fill both language blocks and provide at least one technology.
3. Add a real screenshot to `public/images/projects/` and use an absolute path beginning with `/images/projects/`.
4. Set a unique positive `order`. Set `featured: true` to show it on the home page.
5. Omit `demoUrl` and `repositoryUrl` when they do not exist. The interface will hide those actions.
6. Run `npm run build`; the collection schema will reject incomplete content.

## Replace the CV

Replace `public/cv/jean-paul-saucedo.pdf` and keep the filename unchanged. Update the visible experience and the CV language note if the new document changes either one.

## Update translations

The page interface is translated in `src/components/PortfolioPage.astro`, `Hero.astro`, and `SiteHeader.astro`. Profile, skills, and experience translations are in `src/data/portfolio.ts`. Project translations are in each project Markdown file.

## Change the design

Read `DESIGN.md` first. When changing a token, layout rule, reusable component, image treatment, or interaction pattern, update `DESIGN.md` in the same commit.
