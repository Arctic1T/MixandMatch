# Mix and Match Cafe

**Live website:** https://arctic1t.github.io/MixandMatch/

This repository is the source-code backup; the link above opens the actual bilingual cafe website.

A bilingual English/Spanish cafe website for Mix and Match in Ciudad Sandino, Nicaragua. The site uses a Vite + React frontend, responsive menu and gallery sections, a website-first language chooser, scroll motion, and React Bits-inspired glow and text-loop interactions.

## Local development

Install Node.js 22 and pnpm 10, then run:

```bash
pnpm install
pnpm run dev
```

Type-check, test, and build with:

```bash
pnpm run check
pnpm test --run
pnpm run build
```

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. In the repository settings, open **Pages** and choose **GitHub Actions** as the publishing source. Each push to `main` builds the static frontend and publishes `dist/public`.

The Pages build uses the repository base path `/MixandMatch/`. The app also uses publicly hosted image URLs from the Manus storage paths included in the source; move those assets to an independent CDN or storage bucket if this repository needs to be fully independent of Manus.

## Content notes

The phone number remains `BLANK` until the owner supplies it. The footer links visitors to a Google search for Mix and Match rather than displaying invented testimonials or ratings. Replace that URL with the verified Google Business Profile URL when available.

Do not commit `.env` files, credentials, database URLs, API keys, `node_modules`, logs, or generated build artifacts.
