# Guru Portfolio

Modern personal portfolio built with Next.js App Router and TypeScript.

## Stack

- Next.js 14
- React 18
- TypeScript
- CSS Modules

## Main Routes

- `/` - editorial landing page with CTA, proof strip, services, experience snapshot, and featured case studies
- `/projects/acb-platform`
- `/projects/terraform-multi-cloud-migration`
- `/projects/sharepoint-data-migration`
- `/robots.txt`
- `/sitemap.xml`

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## SEO Configuration

Set `NEXT_PUBLIC_SITE_URL` to your deployed domain so canonical URLs, sitemap output, and metadata use the correct production base URL.

Example:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

Without that value, the app falls back to `http://localhost:3000`.

## Content Model

Primary content lives in:

- `content/site.ts`
- `content/projects.ts`
- `types/content.ts`

Update those files to change homepage messaging, services, case study content, or metadata without rewriting layout code.

## Notes

- The previous Create React App source has been preserved in `legacy-src/`.
- The resume link currently points to the existing hosted PDF URL. Replace it with a first-party asset when you are ready.
- Case study metrics are public-safe and sanitized. Replace them with exact values if you want stricter factual precision before launch.
