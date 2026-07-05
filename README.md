# Aurion Health Intelligence Website — V9 Mobile Polish

This version applies the V8 final corrections plus a mobile-first hero/layout fix based on the phone screenshot.

## What changed in V9

- Fixed the mobile hero so it no longer stays in a narrow two-column layout.
- Stacked the hero text and video properly on phones.
- Reduced mobile hero heading size.
- Made hero buttons full width on phones.
- Improved mobile spacing, card radius, and video block size.
- Added overflow protection to avoid horizontal scrolling.
- Kept V8 SEO, favicon, sitemap, robots, videos, PNG visuals, and final public wording corrections.

## Local run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deploy update

Copy this folder into your current GitHub working folder, then commit and push:

```bash
cd ~/Downloads
unzip -o aurion-health-intelligence-brand-website-v9-mobile-polish.zip
rsync -av --delete --exclude='.git' --exclude='node_modules' --exclude='.next' aurion-health-intelligence-brand-website-v9-mobile-polish/ aurion-health-intelligence-brand-website-v7-contact-explore-polish/
cd aurion-health-intelligence-brand-website-v7-contact-explore-polish
git status
git add .
git commit -m "Apply V9 mobile polish"
git push origin main
```
