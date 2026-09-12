# Digital Pathway

Production-ready marketing website for Digital Pathway, focused on real estate and home service businesses. Built with Next.js App Router, React, TypeScript, Motion, and locally served fonts.

## Development

```sh
npm ci
npm run dev
```

Production checks: `npm run build` and `npm run typecheck`. Serve the production build with `npm start`.

## Pages

Home, Services, four service detail pages (Web Design, SEO, Meta Ads, Google Ads), Industries, two industry detail pages (Real Estate, Home Services), Work, Info Products, About, and Contact. Includes a custom 404, sitemap, robots.txt, page metadata, and favicon.

## Deploy on Vercel

Import `atchouangwa/digitalpathway` and select the Next.js framework. Build: `npm run build`. Install: `npm ci`. Use the repository root. Vercel's Git integration can automatically deploy future pushes to main.

Optional environment variables:

- `NEXT_PUBLIC_SITE_URL`: approved primary domain. Without it, the Vercel production URL is used for canonical links and the sitemap.
- `NEXT_PUBLIC_CONTACT_EMAIL`: business inbox. Default: `francis@digitalpathway.io`, published on Digital Pathway's public company page.

## Inquiry flow

The contact form validates inputs, prepares an inquiry in the visitor's browser, and provides a `mailto:` draft plus copy fallback. It does **not** submit to a backend or claim that an email was delivered. No contact data is stored by the site. The visitor must send the prepared draft from their email app. A CRM/webhook or email API can replace this flow when an approved destination and credentials are configured.

## Tracking

The site emits `project_cta_click`, `portfolio_click`, `email_click`, and `inquiry_draft_created` to `window.dataLayer`. No visitor form values are included. No analytics vendors or tracking IDs are fabricated or preinstalled. Connect an approved tag manager and consent policy before loading advertising pixels.

## Content and asset provenance

- Brand, target markets, and services: supplied by the project owner.
- Portfolio relationship: owner supplied https://myrealtordanawilliams.com/, https://www.henryclayco.com/, https://www.onuventuresinc.com/ as completed work. Screenshots show those actual live websites. No unverified performance metrics or scope claims are added.
- Business inbox: https://digitalpathway.io/company, reviewed September 12, 2026. No public statistics, client counts, or founder claims were imported.
- Visual inspiration: https://www.orbgroup.com/en/. Original Digital Pathway layout and copy; no Orb case studies, logos, or results reused.
- `architecture.webp` and `interior.webp`: original AI-generated conceptual architectural imagery. They are industry illustrations, not photographs of client projects. Portfolio screenshots are separate.
- Fonts: Barlow Condensed and Manrope via Fontsource, self-hosted. Icons: Phosphor.

## Design decisions

Condensed typography, asymmetric photography, a lime accent, and simple editorial grids. Design variance 8, motion 5, density 3. Light/dark theme tokens, reduced-motion support, keyboard navigation, semantic disclosure widgets, and touch-sized controls.

The supplied Emil Kowalski, Taste Skill, Motion/Framer, and UI UX Pro Max guidance informed typography, layout, animation timing, responsiveness, and accessibility. Orb's specific direction takes priority over generic database palette recommendations.

## Known operational details

No custom domain, external analytics ID, CRM, paid integration, or email API is provisioned by the source code. Do not add fabricated reviews, pricing, guarantees, or case-study results. Image previews are WebP assets stored in this repository; there are no external image dependencies at runtime.
