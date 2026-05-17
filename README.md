# qollektor-docs

Public documentation site for [Qollektor](https://github.com/qovio/qollektor) — the group-order platform with SEPA-QR payment flow.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) and deployed to GitHub Pages at **https://docs.qollektor.de**.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the built site locally
```

Requires Node.js 22.12+.

## Authoring content

- Pages live under `src/content/docs/` and are routed by file path.
- Sidebar groups (`organizer`, `participant`, `reference`) are auto-generated from directory contents; configured in `astro.config.mjs`.
- Use frontmatter `sidebar.order` to control ordering within a group.
- Default locale is German (`de`); English translations can be added under `src/content/docs/en/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The custom domain `docs.qollektor.de` is enforced via `public/CNAME`.

DNS: a `CNAME docs → qovio.github.io.` record points the subdomain to GitHub Pages. After the first deploy, the custom domain must be set in **Settings → Pages** and *Enforce HTTPS* enabled once the certificate provisions.
