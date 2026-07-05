# Aurion Health Intelligence Limited Website — V8 Final Corrections

This is the corrected deployment-ready version of the Aurion Health Intelligence Limited website.

## Key corrections in V8

- Added stronger SEO metadata for Google and social previews.
- Added Open Graph preview image.
- Added favicon files for browser tabs and Apple devices.
- Added `robots.txt` and `sitemap.xml` through Next.js app routes.
- Removed the lock-file dependency issue that caused Vercel install problems.
- Removed internal wording such as “the website now...” from public page copy.
- Refined homepage copy, explore copy, partner copy, and contact guidance.
- Kept the Aurion blue-green brand style, video visuals, PNG visuals, and open team model.

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build locally

```bash
npm run build
```

## Deploy update to GitHub and Vercel

After copying these files into the existing GitHub project folder:

```bash
git add .
git commit -m "Final SEO favicon and wording corrections"
git push
```

Vercel will redeploy automatically after the push.

## Important contact note

The website currently uses `contact@aurionhealthintelligence.com` as the professional public-facing email. Replace it only when that mailbox is active, or set up a professional domain email before sharing widely.
