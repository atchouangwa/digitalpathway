export type InsightFAQ = readonly [string,string];
export type InsightSection = {id:string;heading:string;paragraphs:string[];bullets?:string[]};
export type Insight = {
 slug:string; title:string; shortTitle:string; description:string; category:string;
 published:string; modified:string; readingTime:string; answer:string; takeaways:string[];
 sections:InsightSection[]; faqs:InsightFAQ[];
};

export const insights:Insight[]=[
 {
  slug:'home-service-marketing-system',
  title:'Home Service Marketing: A Practical System for Search, Trust and Qualified Inquiries',
  shortTitle:'The Home Service Marketing System',
  description:'A practical framework for connecting local SEO, AI search visibility, paid media, conversion-focused pages and lead-quality measurement for home service businesses.',
  category:'Home Services',published:'2026-09-16',modified:'2026-09-16',readingTime:'8 min read',
  answer:'Home service marketing works best as one connected system: make the business easy to find for high-intent local searches, prove the quality and relevance of the service, remove friction from the call or quote path, and feed real lead-quality data back into SEO and paid media decisions.',
  takeaways:[
   'Start with the jobs, service areas and customer decisions that matter most to the business.',
   'Build service and location content around real search intent instead of duplicating thin city pages.',
   'Treat the website as the handoff between search or advertising and the actual inquiry.',
   'Measure calls, forms, appointments and lead quality, not traffic or clicks in isolation.',
   'AI search visibility is an extension of strong SEO fundamentals, clear answers and credible business information.'
  ],
  sections:[
   {id:'foundation',heading:'1. Define the demand you actually want',paragraphs:[
    'The first marketing decision is not which channel to buy. It is which work the business wants more of, where that work can be served profitably, and what a qualified inquiry looks like. An HVAC company trying to grow replacement installs has a different acquisition problem from a plumber trying to fill emergency service capacity.',
    'That definition should shape page architecture, keyword priorities, campaign structure, creative, calls to action and reporting. When the target job is vague, every downstream metric becomes harder to interpret.'
   ],bullets:['Priority services and job types','Real service areas','Capacity and seasonality','Customer value and sales process','What makes an inquiry qualified']},
   {id:'search',heading:'2. Capture local demand across search surfaces',paragraphs:[
    'Local search is broader than a list of keywords. A homeowner may discover a company through the map pack, a service page, an AI-generated answer, a review profile or an ad. The website should make the same core facts clear across those surfaces: what the business does, where it works, why it is credible and how to take the next step.',
    'Strong local SEO usually requires technically crawlable pages, a clear service hierarchy, useful location context, internal links, consistent business information and a Google Business Profile strategy that reflects the real operation. The goal is not to manufacture hundreds of near-duplicate pages. It is to give distinct searches a genuinely relevant destination.'
   ]},
   {id:'conversion',heading:'3. Make the website carry intent through to action',paragraphs:[
    'A click is not the outcome. The page has to continue the question that brought the visitor there. A roofing repair search should land on a page that immediately confirms the service, explains the relevant process or problem, shows credible evidence and makes calling or requesting an estimate easy on mobile.',
    'Conversion improvements are often basic but consequential: stronger message match, faster pages, clearer service boundaries, better proof placement, fewer form fields, visible contact options and a useful confirmation experience.'
   ]},
   {id:'paid',heading:'4. Use paid media to complement organic demand',paragraphs:[
    'Google Ads is useful when the business wants to capture demand that already exists. Meta Ads can be useful when the offer benefits from visual proof, education, remarketing or creating demand before someone searches. Neither channel should be judged only by platform conversion counts.',
    'The campaign, landing page and follow-up process should share the same promise. Search terms, ad copy, page headlines and sales feedback are all evidence that can improve the next iteration.'
   ]},
   {id:'measurement',heading:'5. Close the loop with lead-quality measurement',paragraphs:[
    'Marketing reports become useful when they help answer operational questions. Which services produce the best inquiries? Which campaigns generate calls that turn into appointments? Which pages attract traffic but fail to move visitors toward a next step?',
    'At minimum, track meaningful form submissions and call actions. Where the stack allows it, connect those events to appointment and CRM stages so channel decisions can move closer to revenue quality instead of stopping at lead volume.'
   ]},
   {id:'ai-search',heading:'6. Prepare for AI answers without abandoning SEO fundamentals',paragraphs:[
    'Answer engines reward the same qualities a strong search experience needs: crawlable pages, specific information, clear language, useful internal relationships between pages and credible evidence. Direct answers to common customer questions can help both people and machines understand the business more quickly.',
    'There is no special AI-search shortcut that replaces good SEO. Structured data should accurately describe visible content, and any machine-readable files should be treated as supporting documentation rather than a substitute for useful pages.'
   ]}
  ],
  faqs:[
   ['What should a home service marketing strategy include?','A useful strategy typically connects local search visibility, the website, reputation signals, paid media where appropriate, conversion paths, and measurement of calls, forms, appointments and lead quality.'],
   ['Should every service area have its own page?','Only when the page serves a distinct customer need and contains genuinely useful local context. Repeating the same copy across many place names creates weak pages and a poor experience.'],
   ['Is SEO or Google Ads better for contractors?','They solve different timing problems. SEO builds an organic demand-capture asset over time. Google Ads can put the business in front of existing demand immediately. Many businesses use both when the economics support it.'],
   ['How should home service marketing be measured?','Start with qualified calls, quote requests and appointments. Then connect those inquiries to job type, source and downstream sales quality whenever the available systems allow it.']
  ]
 },
 {
  slug:'real-estate-marketing-system',
  title:'Real Estate Marketing: How Website, Search and Paid Media Work Together',
  shortTitle:'The Real Estate Marketing System',
  description:'A practical framework for agents, teams, brokerages, developers and property businesses that want a stronger path from local discovery to inquiry.',
  category:'Real Estate',published:'2026-09-16',modified:'2026-09-16',readingTime:'8 min read',
  answer:'Real estate marketing is strongest when local expertise, property or service pages, search visibility, campaign landing pages and follow-up all reinforce the same positioning. The goal is to make the right prospect understand the market relevance, trust the operator and know exactly what to do next.',
  takeaways:[
   'Position around the customer and market decision, not generic claims about service.',
   'Create useful local and service content that demonstrates real market knowledge.',
   'Separate buyer, seller, listing, development or investor journeys when their intent differs.',
   'Use paid media to amplify a clear offer rather than sending every click to the homepage.',
   'Measure inquiry quality and source so marketing decisions reflect actual business conversations.'
  ],
  sections:[
   {id:'positioning',heading:'1. Start with a specific market position',paragraphs:[
    'Real estate websites often look polished while saying very little that helps a prospect decide. The stronger starting point is a precise answer to three questions: who the business helps, which market or property context it knows deeply, and what kind of conversation it wants the visitor to begin.',
    'An agent focused on sellers in a defined market should not have the same information architecture as a development company presenting projects to investors or buyers. The site should reflect the actual decision path.'
   ]},
   {id:'local-authority',heading:'2. Turn market knowledge into useful search content',paragraphs:[
    'Search visibility grows from pages that deserve to exist. Community guides, seller resources, property-type pages and market-specific service pages can become useful entry points when they answer real questions rather than simply repeating geographic keywords.',
    'Useful local content should connect back to the commercial journey. A neighborhood page can explain housing stock, commute patterns, amenities or transaction considerations, then point naturally to relevant listings, seller information or a consultation path.'
   ]},
   {id:'website',heading:'3. Design the website as a decision system',paragraphs:[
    'The website should help a prospect move from recognition to confidence. That means making expertise visible, showing actual work or properties where permitted, explaining the process, answering objections and keeping the next action obvious.',
    'For seller-focused businesses, the path may center on a valuation or listing conversation. For developers, it may center on project interest. For brokerages or teams, the site may need multiple intent paths without making the navigation feel fragmented.'
   ]},
   {id:'campaigns',heading:'4. Give campaigns their own message-matched destinations',paragraphs:[
    'Paid traffic works better when the destination continues the promise of the ad. A campaign about a seller consultation, a new development or a specific market should not force visitors to decode a general homepage.',
    'Google Ads can capture active searches. Meta can support visual storytelling, remarketing and demand creation. In both cases, the message, landing page and follow-up should be planned as one sequence.'
   ]},
   {id:'proof',heading:'5. Build trust with specific, verifiable evidence',paragraphs:[
    'Real estate decisions are high-trust decisions. The strongest proof is specific and verifiable: actual projects, properties, market knowledge, credentials that can be substantiated, and client feedback when permission and sourcing are clear.',
    'Avoid filling a site with invented numbers or generic superlatives. Specificity is more credible than volume.'
   ]},
   {id:'measurement',heading:'6. Measure the path to a real conversation',paragraphs:[
    'Traffic can be useful context, but the commercial signal is the inquiry. Track meaningful actions such as calls, consultation requests, property inquiries and seller forms. Where possible, connect those events to lead source and CRM stages.',
    'The feedback loop matters because it reveals whether a channel is generating the right kind of conversation, not simply more activity.'
   ]}
  ],
  faqs:[
   ['What should a real estate website prioritize?','Clear positioning, market relevance, useful local content, verifiable proof, fast mobile usability and a direct path to the conversation the business wants to generate.'],
   ['Do real estate agents need local SEO?','Local SEO can be valuable when prospects search by market, service, property type or question. The opportunity depends on competition, the strength of existing local signals and the quality of the pages available to rank.'],
   ['Should ads send traffic to the homepage?','Not always. When the ad has a specific audience, property, offer or intent, a focused landing page can create stronger message match and a clearer next step.'],
   ['How should real estate marketing performance be measured?','Use search and campaign data as context, then prioritize meaningful inquiries such as listing conversations, property inquiries, consultation requests and qualified appointments.']
  ]
 },
 {
  slug:'seo-vs-google-ads-local-business',
  title:'SEO vs Google Ads for Local Businesses: When to Use Each',
  shortTitle:'SEO vs Google Ads',
  description:'A decision framework for choosing between SEO and Google Ads, understanding what each channel can do, and knowing when a combined strategy makes more sense.',
  category:'Search Strategy',published:'2026-09-16',modified:'2026-09-16',readingTime:'7 min read',
  answer:'SEO and Google Ads are not substitutes. SEO builds organic visibility and useful search assets over time. Google Ads buys immediate access to selected search demand. The right choice depends on urgency, budget, competition, website readiness, customer value and how quickly the business needs market feedback.',
  takeaways:[
   'Use SEO when building durable visibility and content assets is a strategic priority.',
   'Use Google Ads when immediate access to high-intent demand and faster testing matter more.',
   'Fix weak landing pages and tracking before scaling either channel aggressively.',
   'Compare channels on qualified inquiries and downstream value, not clicks alone.',
   'A combined approach can use paid-search feedback to improve organic priorities.'
  ],
  sections:[
   {id:'seo',heading:'What SEO is best at',paragraphs:[
    'SEO is a long-term demand-capture system. It improves the chance that useful service, location and informational pages appear when people search organically. The asset is the website and its accumulated relevance, authority and usefulness.',
    'SEO is especially valuable when the business has repeatable services, identifiable search demand and the patience to build a stronger organic footprint. It also supports AI-powered search experiences because those systems still depend heavily on crawlable, indexable web content.'
   ]},
   {id:'ads',heading:'What Google Ads is best at',paragraphs:[
    'Google Ads can place an offer in front of searchers immediately for selected queries. That makes it useful for launching a new offer, filling near-term capacity, entering a competitive market or testing which services and messages create qualified inquiries.',
    'The tradeoff is that visibility depends on continued spend and campaign economics. The landing page, offer, call handling and conversion tracking still determine whether paid traffic becomes useful business.'
   ]},
   {id:'decision',heading:'How to decide which one should come first',paragraphs:[
    'Choose based on the constraint. If the business needs demand now and has a website that can convert it, paid search may be the faster learning loop. If the business has strong economics but weak organic visibility, SEO may be the better strategic build.',
    'If the website is confusing, slow or untrustworthy, neither channel should be treated as the first fix. More traffic simply sends more people into the same friction.'
   ],bullets:['Urgency of lead generation','Available media budget','Search competition','Current organic authority','Landing-page quality','Sales capacity and response speed','Ability to track qualified outcomes']},
   {id:'together',heading:'Why the channels often work better together',paragraphs:[
    'Paid search can reveal which queries, offers and landing-page messages generate useful conversations. SEO can turn that learning into durable service and content assets. Organic visibility can also reduce dependence on paid placement for every click.',
    'The point is not to force every business into a multi-channel package. It is to make channel decisions from the same customer, offer and measurement model.'
   ]},
   {id:'measurement',heading:'Use the same business metrics for both',paragraphs:[
    'Search Console rankings and ad-platform conversions are useful diagnostics, but they are not the final business outcome. Compare qualified calls, forms, booked appointments and downstream sales quality when possible.',
    'A shared measurement layer makes SEO and Google Ads easier to evaluate because both channels are being judged against the same definition of a good inquiry.'
   ]}
  ],
  faqs:[
   ['Is SEO cheaper than Google Ads?','They have different cost structures. SEO requires ongoing investment in technical work, content and authority building. Google Ads requires media spend plus campaign management. The better comparison is cost and value per qualified outcome over the time horizon that matters to the business.'],
   ['How quickly does SEO work compared with Google Ads?','Google Ads can generate visibility as soon as a campaign is approved and live. SEO usually requires more time because search engines must crawl, evaluate and rank the work. Exact timing varies by market and starting point.'],
   ['Can Google Ads help SEO?','Paid ads do not directly buy organic rankings, but paid-search data can reveal useful information about search terms, offers, landing pages and conversion behavior that can inform SEO priorities.'],
   ['Should a local business run both SEO and Google Ads?','It can make sense when the economics support both immediate demand capture and long-term organic growth. It is not automatically necessary for every business.']
  ]
 },
 {
  slug:'answer-engine-optimization-local-business',
  title:'AEO for Local Businesses: How to Structure a Site for AI Answers',
  shortTitle:'AEO for Local Businesses',
  description:'What answer engine optimization means in practice, which SEO fundamentals still matter, and how local businesses can make their websites easier for search and AI systems to understand.',
  category:'SEO + AI Search',published:'2026-09-16',modified:'2026-09-16',readingTime:'9 min read',
  answer:'Answer engine optimization is best treated as an extension of SEO, not a separate hack. Local businesses improve their chances of being understood and cited by publishing crawlable, specific, people-first content, answering real customer questions, keeping business facts consistent, using sensible internal links and applying structured data only when it accurately matches visible content.',
  takeaways:[
   'AI visibility starts with normal search eligibility: crawling, indexing, useful content and a strong page experience.',
   'Write direct answers for real customer questions, then support them with deeper context and proof.',
   'Make entities and relationships explicit: services, markets, business name, projects and related pages.',
   'Use structured data to describe visible content, not to manufacture signals that are not on the page.',
   'Treat llms.txt as optional compatibility documentation, not a Google ranking factor or replacement for SEO.'
  ],
  sections:[
   {id:'definition',heading:'What AEO actually means',paragraphs:[
    'AEO is shorthand for making content easier to retrieve and use in answer-oriented search experiences. For a local business, the practical work overlaps heavily with strong SEO: clear information architecture, crawlable pages, specific service information, useful answers, internal linking, entity consistency and credible evidence.',
    'The useful question is not “How do we trick an AI system into mentioning us?” It is “What would make this business a clear, reliable source for the questions its customers are asking?” That framing leads to better pages for both humans and machines.'
   ]},
   {id:'crawlability',heading:'1. Make important information crawlable and indexable',paragraphs:[
    'If a search engine cannot reliably access the page, AI-powered search features cannot use it as a normal search source. Keep important service and business information in textual HTML, use internal links that expose important pages, maintain a clean sitemap and avoid accidental noindex or robots blocks.',
    'JavaScript frameworks can rank, but rendering choices should not hide essential content behind interactions that crawlers or users must fight to access.'
   ]},
   {id:'answers',heading:'2. Answer real questions clearly',paragraphs:[
    'A strong answer page leads with a concise response, then adds the nuance a serious reader needs. This is useful because many customer questions have a simple first answer and a more complicated decision behind it.',
    'For example, a contractor marketing site might answer whether every service area needs a unique page, then explain when a location page is justified, what local information should be included, and when the better choice is a broader service-area page.'
   ]},
   {id:'entities',heading:'3. Make the business and its relationships unambiguous',paragraphs:[
    'Search systems build understanding from repeated, consistent facts. The website should make the business name, services, audience, projects, contact information and internal page relationships clear. Breadcrumbs, descriptive navigation, sensible headings and consistent naming all help.',
    'External business profiles and reputable mentions can reinforce that understanding when they accurately represent the same entity. Consistency matters more than producing large volumes of low-quality mentions.'
   ]},
   {id:'structured-data',heading:'4. Use structured data accurately',paragraphs:[
    'Structured data can help search engines understand what a page represents, but it is not a special AEO switch. Use relevant schema types such as Organization, Service, Article, BreadcrumbList and FAQPage only when the markup reflects information users can actually see.',
    'Avoid adding ratings, reviews, prices, locations or credentials to schema unless those facts are real, current and visible where appropriate.'
   ]},
   {id:'content-system',heading:'5. Build topical depth around the customer journey',paragraphs:[
    'A single generic page rarely answers every question that matters. Build a small set of high-quality pages around services, industries, comparisons and recurring customer questions, then connect them with internal links.',
    'The goal is not to create hundreds of pages for every possible keyword variation. It is to build enough useful context that a person or retrieval system can understand the expertise and find the right page for a specific question.'
   ]},
   {id:'llms',heading:'6. Understand what llms.txt can and cannot do',paragraphs:[
    'Some teams publish an llms.txt file as a compact machine-readable directory of important site content. It can be reasonable as optional compatibility documentation for systems that choose to use it.',
    'It should not be treated as a Google ranking tactic. The pages themselves, normal crawlability, search eligibility, content quality and business credibility remain the important work.'
   ]},
   {id:'measurement',heading:'7. Measure search and business outcomes together',paragraphs:[
    'AI search measurement is still evolving. Use Search Console and analytics to understand organic discovery, then keep the commercial focus on the actions that matter: calls, forms, appointments, qualified inquiries and sales feedback.',
    'The objective is not simply to be mentioned by an answer engine. It is to be visible for relevant questions and useful enough that the right prospect continues the journey.'
   ]}
  ],
  faqs:[
   ['What is AEO?','AEO stands for answer engine optimization. In practice it means making useful content and business information easy for answer-oriented search systems to retrieve, understand and cite.'],
   ['Is AEO different from SEO?','The terms describe different search experiences, but the foundations overlap heavily. Crawlability, indexing, helpful content, internal linking, page experience and credibility remain central.'],
   ['Do I need special schema for AI search?','No special AI schema is required. Use standard structured data when it accurately describes visible content and helps search systems understand the page.'],
   ['Does llms.txt improve Google rankings?','Google has stated that it does not use llms.txt for Google Search rankings or its generative search features. It can still be maintained as optional documentation for other systems that may choose to read it.'],
   ['Can AEO guarantee that ChatGPT or Google AI mentions my business?','No. No legitimate optimization can guarantee a specific AI citation or recommendation. The practical goal is to improve discoverability, clarity and credibility for relevant queries.']
  ]
 }
];

export function getInsight(slug:string){return insights.find(i=>i.slug===slug);}
