# Digital Pathway

Monochrome agency website in the existing Next.js App Router / TypeScript project. Original URLs, service scope, portfolio relationships, and public contact inbox are preserved.

## Run
Node 24. Use npm install, npm run dev, npm run build, npm run typecheck, and npm test. Tailwind uses its PostCSS plugin. The design is a bespoke CSS component system with Tailwind utilities available. Geist is optimized and self-hosted by next/font at build time. No animation runtime is shipped.

## Pages and components
All original URLs remain: /, /services, /services/web-design, /services/seo, /services/google-ads, /services/meta-ads, /industries, /industries/real-estate, /industries/home-services, /info-products, /work, /about, /contact.
New detail pages: /work/dana-williams, /work/henry-clay-co, /work/onu-ventures. Project data supports services, problem, strategy, execution, results, gallery, and testimonial. Optional unverified fields are absent and hidden.
Data: lib/content.ts. Shared server components: components/shared.tsx. Interactive navigation and journey: components/interactive.tsx. Intake: components/project-form.tsx. Metadata and inbox: lib/site.ts. Sitemap, robots, OG image, Organization, Service, and Breadcrumb JSON-LD are included.

## Project intake
The old email-draft generator is replaced with a four-step form and POST /api/inquiries.
Configure ONE adapter in Vercel:
- Resend: RESEND_API_KEY and INQUIRY_FROM_EMAIL (verified sender). Optional INQUIRY_TO_EMAIL defaults to the existing public inbox.
- HTTPS webhook: PROJECT_WEBHOOK_URL, optional PROJECT_WEBHOOK_TOKEN. A webhook takes precedence. Supports an approved Zapier, Make, GoHighLevel, HubSpot integration bridge, or custom API.

Webhook JSON: event, requestId, submittedAt, source, name, email, company, website, businessType, services, goal, timeline, consent. Acknowledge only after accepting the inquiry. Use requestId for durable deduplication. Do not redirect. Optional token uses Bearer authorization.

Success is shown only after provider acceptance, not a claim of inbox delivery. With no configuration, the page clearly discloses online inquiries are unavailable and provides the existing email. It never silently discards leads. Redeploy after configuration.

Client/server validation, origin checks, payload limits, honeypot, timeouts, and a bounded per-instance rate limiter are included. The limiter is best effort in serverless deployments, not distributed abuse defense. Add durable limiting or Vercel WAF if needed. No personal payloads or credentials are logged. No PII is persisted in browser storage.

## Tracking
Data layer events: start_project_click, service_click, portfolio_click, form_start, form_step_complete, form_submit, email_click, phone_click, case_study_view.
No personal form values are sent to analytics. form_submit fires only on API acceptance. Phone tracking is prepared for a future verified phone link; no number is invented.
An approved GTM container can consume these events for GA4, Google Ads, and Meta Pixel. No vendor IDs, pixels, or consent assertions are fabricated.

## Verification
GitHub Actions builds the app and runs Playwright across 1440, 1024, 768, 390, and 375px for every route. Screenshots/traces are retained as artifacts. Checks cover links, image loading, overflow, metadata, mobile focus, keyboard controls, reduced motion, validation, and honest missing-provider behavior. External delivery requires an authorized provider and real delivery verification.

## Provenance
- Business, services, portfolio relationship: project owner.
- Original facts/contact: preserved from commit 8231ce7c926e27a93368ebcf4527f8eed511a6c9.
- Inbox: francis@digitalpathway.io, originally verified at https://digitalpathway.io/company.
- Authentic screenshots: https://myrealtordanawilliams.com/, https://www.henryclayco.com/, https://www.onuventuresinc.com/.
- architecture.webp and interior.webp are existing AI-generated concept illustrations, not client projects. Alt text labels them conceptual.
- Default presentation is grayscale. Portfolio hover can restore original color.
- No invented results, testimonials, clients, credentials, pricing, guarantees, personnel, or offices.
- Orb Group provided editorial inspiration. Digital Pathway layout and copy are original.
