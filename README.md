# Senior Software Engineer Portfolio

A project-first portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

- Update project details in `src/data/projects.ts`.
- Place supplied screenshots in `public/images/projects/` and add entries to each project's `screenshots` array.
- Update contact details and the résumé URL in `src/data/site.ts` when they are available.

## Portfolio V2 content

Work stays on `portfolio-v2`; `main` is the stable production branch.

- `src/data/projects.ts` retains the complete project descriptions, contributions, features, and public URLs. `featured` selects the four primary showcases; other projects appear under More work.
- Add real screenshots to a project's `screenshots` array using `{ src, alt, width, height }`. Use local paths under `public/images/projects/`, descriptive alt text, and the image's actual pixel dimensions. Set `presentation` to `mobile` for a horizontal phone gallery or `desktop` for full-width dashboard/browser captures. With no screenshots, the existing image appears as explicitly labelled concept imagery.
- `src/data/experience.ts` contains the supplied experience summary and a typed employment list. Add only verified roles, companies, dates, locations, responsibilities, and technologies. The employment list stays hidden until populated.
- `src/data/skills.ts` owns the five toolkit groups and core technology emphasis.
- `src/data/site.ts` owns contact details. Email, LinkedIn, and résumé actions are hidden while unset. Before setting `resumeUrl`, add the real document to `public/` and use its local URL.

Still needed: employment history; Queue contribution; verified Fleet Master and Queue stacks; email/LinkedIn; résumé PDF; real mobile screenshots and desktop captures. Do not infer these from project categories.

Run `npm run typecheck`, `npm run lint`, and `npm run build`. In environments that prevent Turbopack's local worker port, `npm run build -- --webpack` provides an alternative production build.
