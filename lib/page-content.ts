import type {FAQ} from './content';

type PageCopy = {
  title: string;
  description: string;
  introduction: string;
  scopeTitle: string;
  processTitle: string;
  steps: readonly FAQ[];
  markets: readonly [string, string];
  cta: {title: string; text: string; label: string};
};

// Each page answers a different buying decision. Shared layouts do not require shared copy.
export const serviceCopy: Record<string, PageCopy> = {
  'web-design': {
    title: 'Web Design for Real Estate & Home Services',
    description: 'Custom websites for real estate and home service businesses. Connect clear service pages, mobile design, search foundations, and a simpler inquiry process.',
    introduction: 'Your next client needs to understand what you do, see work they trust, and know how to reach you. We design websites for real estate and home service businesses around those decisions.',
    scopeTitle: 'WEB DESIGN WITH\nA JOB TO DO.',
    processTitle: 'FROM YOUR BUSINESS\nTO A BETTER WEBSITE.',
    steps: [
      ['Understand the visitor', 'Identify who visits, what brings them to the site, and what they need before calling or requesting a consultation. Review the existing pages before deciding what needs to change.'],
      ['Plan the pages', 'Map the navigation, service content, project evidence, and inquiry paths. Agree the copy structure and required assets before moving into responsive design.'],
      ['Build and check', 'Develop the agreed experience. Check mobile layouts, forms, internal links, loading behavior, and technical SEO foundations before launch.'],
      ['Learn after launch', 'Review the available traffic and inquiry data. Look for pages where visitors lose the thread, forms they abandon, and questions the content still needs to answer.'],
    ],
    markets: ['An agent website needs to establish the person behind the service. A brokerage or developer may need to explain a broader business. The content, project presentation, and inquiry paths should reflect that distinction.', 'A homeowner needs to know whether you handle their type of job and serve their area. Put service details, genuine project photos, and a clear call or quote request within easy reach on mobile.'],
    cta: {title: 'A WEBSITE THAT\nDOES YOUR WORK JUSTICE.', text: 'Share your current website, the customers you want to reach, and what visitors should do next. We can discuss whether to improve the existing site or build a new one.', label: 'Discuss Your Website'},
  },
  seo: {
    title: 'SEO & Local Search Services',
    description: 'SEO for real estate and home service businesses: technical fixes, useful service and location pages, Google Business Profile strategy, and search measurement.',
    introduction: 'When a homeowner searches for a contractor or a seller looks for local expertise, your business needs a relevant answer. Our SEO work connects technical foundations, useful content, and local search visibility.',
    scopeTitle: 'SEO BUILT AROUND\nTHE RIGHT SEARCHES.',
    processTitle: 'FIND THE GAPS.\nBUILD RELEVANCE.',
    steps: [
      ['Establish the baseline', 'Review available search data, indexed pages, technical issues, and the services that matter commercially. Separate searches for your name from searches by people who have not found you yet.'],
      ['Choose useful priorities', 'Match customer questions to existing pages. Identify where to improve a service page, add genuinely useful local information, or fix a technical barrier.'],
      ['Improve the site', 'Implement the agreed technical and content changes. Clarify titles, headings, internal links, and page purpose so both readers and search engines can understand the site.'],
      ['Measure relevant progress', 'Review search visibility, organic visits to priority pages, and inquiries where tracking allows. Use those signals to decide what to improve next, rather than chasing unrelated traffic.'],
    ],
    markets: ['Buyers and sellers ask different questions about a community, a property, and representation. Build content around your actual local knowledge and services so visitors can judge whether you are the right professional to contact.', 'A service page should explain the job a homeowner needs done. A location page should add useful information about an area you genuinely cover. Both need a straightforward route to a call or quote request.'],
    cta: {title: 'MAKE YOUR BUSINESS\nEASIER TO FIND.', text: 'Tell us which services you want to grow, where you work, and whether organic search is bringing the right inquiries. Your starting point determines the SEO priorities.', label: 'Discuss Your SEO Priorities'},
  },
  'google-ads': {
    title: 'Google Ads Management for Local Businesses',
    description: 'Google Ads for real estate and home services. Align search campaigns, keywords, landing pages, and conversion tracking around relevant calls and inquiries.',
    introduction: 'A click matters when it comes from someone you can help. We connect Google Ads campaigns, service-specific landing pages, and conversion measurement for real estate and home service businesses.',
    scopeTitle: 'GOOGLE ADS FROM\nSEARCH TO INQUIRY.',
    processTitle: 'KNOW THE INTENT.\nFOLLOW THE INQUIRY.',
    steps: [
      ['Define a valuable inquiry', 'Agree which services, customers, and locations the campaign should reach. Understand your capacity and the inquiries you do not want before choosing keywords.'],
      ['Connect the ad and page', 'Group searches around a clear service or offer. Write ads and select landing pages that answer the same need, with a visible call, form, or booking path.'],
      ['Launch with measurement', 'Check campaign settings, agreed budgets, negative keywords, and available conversion tracking. Confirm that the important actions can be distinguished from general page visits.'],
      ['Review lead quality', 'Compare search terms and conversion data with your feedback on actual inquiries. Refine targeting, messaging, and landing pages around what is bringing useful conversations.'],
    ],
    markets: ['A seller seeking representation has a different goal from a buyer browsing properties. Campaigns should distinguish those intentions and send each visitor to a page written for that decision.', 'Someone seeking an urgent repair is in a different situation from someone researching a remodel. Match the search, service area, ad message, and next step to the jobs your business is ready to take.'],
    cta: {title: 'MAKE THE NEXT CLICK\nMORE RELEVANT.', text: 'Tell us what you want to promote, where you operate, and what makes an inquiry worthwhile. If campaigns are already running, describe what is working and what is wasting time.', label: 'Discuss Your Google Ads'},
  },
  'meta-ads': {
    title: 'Meta Ads for Real Estate & Home Services',
    description: 'Facebook and Instagram advertising for real estate and home services. Connect offer strategy, creative, landing pages, and testing to a clear inquiry path.',
    introduction: 'Your future customer may be scrolling, not searching. Our Facebook and Instagram advertising connects a relevant offer, convincing creative, and a clear next step for real estate and home service businesses.',
    scopeTitle: 'META ADS WITH\nA REASON TO RESPOND.',
    processTitle: 'FIND THE MESSAGE.\nTEST THE RESPONSE.',
    steps: [
      ['Clarify the offer', 'Identify who the service helps, what matters to them, and why they would act now. Review the proof and project imagery available to support the message.'],
      ['Develop the creative', 'Plan distinct angles around customer questions and objections. Connect the visual, headline, and offer instead of changing graphics without a clear testing purpose.'],
      ['Connect the next step', 'Build the agreed campaign and inquiry journey. Make sure the landing page or form continues the message and that the business is prepared to respond to interest.'],
      ['Learn beyond the click', 'Review creative response alongside available conversion data and inquiry quality. Use that feedback to refine the offer, creative, audience approach, and follow-up.'],
    ],
    markets: ['Property imagery can earn attention, but the message needs to explain why someone should speak with you. Separate buyer, seller, and property business offers rather than asking one ad to serve every audience.', 'Real project imagery helps a homeowner picture the work. Explain the service behind the image, answer an important concern, and offer a next step suited to the size and timing of the job.'],
    cta: {title: 'GIVE PEOPLE A REASON\nTO STOP AND CONSIDER.', text: 'Share the service or offer you want to promote, your available photos or video, and what should happen after someone responds to an ad.', label: 'Discuss Your Meta Ads'},
  },
};

export const industryCopy = {
  'real-estate': {
    title: 'Real Estate Marketing for Agents & Property Businesses',
    description: 'Real estate marketing for agents, teams, brokerages, and developers. Connect your website, local SEO, Google Ads, and Meta Ads to buyer and seller inquiries.',
    heading: 'REAL ESTATE MARKETING.\nBUILT FOR YOUR ROLE.',
    pathways: [
      ['Agents', 'Make your market knowledge and approach to representation clear. Give buyers and sellers distinct reasons to contact you, supported by the experience and work you can verify.'],
      ['Teams & brokerages', 'Present a coherent business while making it easy to understand who handles each inquiry. Plan service pages and conversion paths around how your team actually works.'],
      ['Developers', 'Help visitors understand the business and its projects. Use project information, imagery, and a clear inquiry route to support conversations with the relevant audience.'],
      ['Property businesses', 'Explain your role in the property decision. A staging business, for example, needs to make its service and visual work understandable to the people commissioning it.'],
    ],
    serviceDescriptions: [
      'Present your expertise, properties, or projects with a clear path for buyer, seller, and business inquiries.',
      'Answer community and service questions with useful content grounded in the markets you actually know.',
      'Connect searches for your services to relevant ads and pages built for the buyer or seller behind the query.',
      'Use property imagery, a distinct point of view, and a clear offer to start a relevant conversation.',
    ],
    steps: [
      ['Choose the conversation', 'Decide whether the priority is seller representation, buyer inquiries, a development, or a property service. Define the audience and the areas that matter.'],
      ['Build the message', 'Bring together your positioning, verified credentials, available imagery, and service information. Give each audience a page and next step that makes sense.'],
      ['Connect the channels', 'Launch the agreed website, search, or advertising work around the same offer. Confirm lead capture and routing requirements before sending visitors to the page.'],
      ['Follow the opportunity', 'Review inquiries with the people handling them. Separate early research from relevant conversations so improvements reflect your sales process.'],
    ],
    faqs: [
      ['Is this for individual agents or larger property businesses?', 'Both. An individual agent may need a personal website and seller inquiry path. A team, brokerage, or developer may need a broader presentation, several audiences, and different inquiry routes. We scope the work around that structure.'],
      ['Can you focus on attracting sellers?', 'Yes. Seller-focused positioning, content, landing pages, and campaigns can be planned around listing conversations. We first clarify your market, offer, and how you handle inquiries.'],
      ['Why would I need a website alongside property portals?', 'A portal presents inventory within its own experience. Your website gives you space to explain your expertise, approach, and services, and to guide visitors toward a conversation with your business.'],
      ['How does local SEO support real estate marketing?', 'Useful community and service content can help people discover your expertise while researching a market or choosing representation. The content should reflect what you actually know and where you work.'],
      ['Do you include MLS or IDX integrations?', 'These are not a standard promised inclusion. If the website needs listing feeds, we confirm provider availability, licensing, platform compatibility, and scope before committing to an integration.'],
    ],
    cta: {title: 'TURN LOCAL EXPERTISE\nINTO A CLEARER CHOICE.', text: 'Tell us your role in real estate, the markets you work in, and whether you want more buyer, seller, or property business conversations.', label: 'Discuss Your Real Estate Marketing'},
  },
  'home-services': {
    title: 'Home Service Marketing for Contractors & Trades',
    description: 'Marketing for contractors and home service companies. Connect web design, local SEO, Google Ads, and Meta Ads to relevant calls and quote requests.',
    heading: 'HOME SERVICE MARKETING.\nBUILT AROUND THE JOB.',
    pathways: [
      ['Repairs & urgent needs', 'When timing matters, homeowners need to understand the service, area covered, and how to contact you quickly. Make the call path easy to use and represent your actual availability accurately.'],
      ['Remodeling & planned projects', 'A considered purchase needs more detail. Show relevant work, explain the service and next steps, and give homeowners a practical way to describe the project they have in mind.'],
      ['Recurring property care', 'For services such as landscaping or maintenance, clarify what is covered and where you work. The inquiry should help you understand the property and the service needed.'],
      ['Specialty trades', 'Make specialist work understandable to the customer who needs it. Clear descriptions and relevant project evidence help visitors recognize whether the job matches your expertise.'],
    ],
    serviceDescriptions: [
      'Show the jobs you do, the areas you serve, and the quality of your work. Make calls and quote requests easy on mobile.',
      'Build useful service and location pages around the work homeowners are searching for in your genuine service area.',
      'Match service searches to specific ads and landing pages, with feedback on job fit and inquiry quality.',
      'Use real work and clear offers to build consideration before a homeowner is ready to request an estimate.',
    ],
    steps: [
      ['Define the right jobs', 'Understand your priority services, service area, capacity, and preferred project types. Identify the inquiries that take time without being a good fit.'],
      ['Make the service clear', 'Plan useful service content, genuine project imagery, and a call or quote request path. Answer the questions homeowners ask before they are ready to contact you.'],
      ['Bring the path together', 'Connect the agreed website, local SEO, or advertising work. Check mobile usability, contact details, forms, and available conversion tracking before launch.'],
      ['Review the fit', 'Look at which inquiries concern the right services and locations. Combine tracking with your feedback on estimates and jobs to guide the next changes.'],
    ],
    faqs: [
      ['Which home service businesses is this for?', 'Contractors, remodelers, HVAC, plumbing, electrical, roofing, landscaping, and specialty trades are examples of businesses this approach is designed for. The right scope depends on the work you do and how homeowners choose you.'],
      ['Can we focus on specific jobs or neighborhoods?', 'We start with the services and areas you actually cover, your capacity, and the jobs you want more of. Website content and campaign planning should reflect those priorities.'],
      ['Should we start with SEO or Google Ads?', 'That depends on your current website, search visibility, demand, and budget. SEO improves the organic foundation. Google Ads can reach people actively searching, provided the landing page and inquiry process are ready.'],
      ['What if the phone rings but the jobs are a poor fit?', 'Look beyond call volume. Service type, location, timing, and project fit can reveal where messaging or targeting is too broad. Your feedback on inquiries should inform the next change.'],
      ['Do we need professional project photography?', 'Useful, accurate photos of your actual work are a strong starting point. We review the assets available and identify any production needs while defining the scope. Do not substitute unrelated work for evidence of your own.'],
    ],
    cta: {title: 'MORE RELEVANT CALLS.\nA CLEARER PATH TO WORK.', text: 'Tell us the services you want to grow, the areas you cover, and what makes a job a good fit. We will use that context to discuss the right starting point.', label: 'Discuss Your Home Service Marketing'},
  },
} satisfies Record<string, {title: string; description: string; heading: string; pathways: readonly FAQ[]; serviceDescriptions: string[]; steps: readonly FAQ[]; faqs: readonly FAQ[]; cta: PageCopy['cta']}>;
