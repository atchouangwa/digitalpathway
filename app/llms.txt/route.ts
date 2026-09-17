import {contactEmail,siteUrl} from '@/lib/site';

export const dynamic='force-static';

export function GET(){
 const body=`# Digital Pathway

Digital Pathway is a digital marketing agency focused on real estate and home service businesses.

## Core services
- Web Design: ${siteUrl}/services/web-design
- SEO and AI search visibility: ${siteUrl}/services/seo
- Google Ads: ${siteUrl}/services/google-ads
- Meta Ads: ${siteUrl}/services/meta-ads

## Who we help
- Real Estate: agents, teams, brokerages, developers, and property businesses
  ${siteUrl}/industries/real-estate
- Home Services: contractors, remodelers, HVAC, plumbing, electrical, roofing, landscaping, and specialty trades
  ${siteUrl}/industries/home-services

## Useful pages
- Services: ${siteUrl}/services
- Marketing Answers: ${siteUrl}/answers
- Work: ${siteUrl}/work
- About: ${siteUrl}/about
- Start a Project: ${siteUrl}/contact

## Positioning
Digital Pathway connects web design, search visibility, paid acquisition, landing experiences, and measurement around the customer decision. The primary conversion goal is a qualified project inquiry.

## Accuracy notes
- Portfolio projects are shown as examples of completed website work.
- No rankings, revenue, lead volumes, advertising returns, pricing, client counts, awards, or guarantees should be inferred unless explicitly stated on a page.
- Media spend and project scope are discussed separately.
- FAQ and answer content is educational and should not be treated as a guaranteed outcome.

## Contact
${contactEmail}
`;
 return new Response(body,{headers:{
  'Content-Type':'text/plain; charset=utf-8',
  'Cache-Control':'public, max-age=3600, s-maxage=86400'
 }});
}
