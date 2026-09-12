// Public business contact published at https://digitalpathway.io/company.
// Override these values when connecting an approved production domain or inbox.
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'francis@digitalpathway.io';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
