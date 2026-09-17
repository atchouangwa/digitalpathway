import Link from 'next/link';
import {notFound} from 'next/navigation';
import {services,projects} from '@/lib/content';
import {pageMetadata,siteUrl} from '@/lib/site';
import {PageHero,SectionHeader,PrimaryButton,WorkGrid,Process,FAQSection,CTA,JsonLd} from '@/components/shared';
import {Arrow} from '@/components/interactive';

const serviceMeta:Record<string,{title:string;description:string}>={
 'web-design':{
  title:'Web Design for Real Estate & Home Services',
  description:'Conversion-focused web design for real estate and home service businesses, including responsive development, landing pages, inquiry paths, and technical SEO foundations.'
 },
 'seo':{
  title:'SEO & AI Search for Real Estate & Home Services',
  description:'Technical SEO, local search strategy, service content, internal linking, and AI search visibility for real estate and home service businesses.'
 },
 'google-ads':{
  title:'Google Ads for Real Estate & Home Services',
  description:'Google Ads strategy for real estate and home service businesses, including search intent, campaign structure, landing page alignment, and conversion measurement.'
 },
 'meta-ads':{
  title:'Meta Ads for Real Estate & Home Services',
  description:'Meta Ads strategy for real estate and home service businesses, including audience and offer strategy, creative concepts, landing pages, retargeting, and measurement.'
 }
};

export function generateStaticParams(){return services.map(s=>({slug:s.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const s=services.find(s=>s.slug===slug);
 if(!s)notFound();
 const meta=serviceMeta[slug];
 return pageMetadata(meta?.title||s.name+' for Real Estate & Home Services',meta?.description||s.intro,'/services/'+slug);
}

const aiVisibility=[
 ['Crawlability & indexability','Keep important service information available in rendered HTML, use clean internal links, remove technical blockers, and make the pages that matter easy for search systems to discover.'],
 ['Direct answers & information architecture','Organize pages around the questions behind the search. Clear headings, concise answers, useful supporting detail, and logical links make the site easier to understand for people and answer engines.'],
 ['Entity & service clarity','Keep the business, services, industries, and relationships between pages consistent. Use structured data where it accurately represents visible content instead of adding markup that makes unsupported claims.'],
 ['Evidence & freshness','Support the message with authentic work, specific expertise, current information, and useful context. Thin rewrites and generic AI content do not create a stronger reason to rank or be cited.']
] as const;

export default async function Service({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const s=services.find(s=>s.slug===slug);
 if(!s)notFound();
 const serviceUrl=siteUrl+'/services/'+slug;
 return <><PageHero label={s.name} title={s.line} text={s.intro} breadcrumb={[{name:'Services',href:'/services'},{name:s.name,href:'/services/'+s.slug}]}>
  <PrimaryButton/><PrimaryButton href="#scope" secondary>Explore the approach</PrimaryButton>
 </PageHero>

 <section className="section container split-section"><div><p className="eyebrow">The challenge</p><h2>{s.problemTitle}</h2></div><div className="prose"><p className="large-copy">{s.problem}</p><div className="outcome"><p className="eyebrow">The direction</p><p>{s.outcome}</p></div></div></section>

 <section id="scope" className="section contrast-section"><div className="container"><SectionHeader label="What we can help with" title={'THE RIGHT WORK.\nA CLEAR SCOPE.'} text="The exact deliverables, platforms, and integrations are agreed around your project."/><div className="scope-grid">{s.items.map(([h,p],i)=><article key={h}><span className="eyebrow">0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div className="considerations"><p className="eyebrow">Planning considerations</p><ul>{s.considerations.map(c=><li key={c}>{c}</li>)}</ul></div></div></section>

 {slug==='seo'?<section className="section container"><SectionHeader label="SEO + answer engine optimization" title={'SEARCH IS CHANGING.\nTHE FOUNDATION ISN’T.'} text="The goal is not to optimize for one chatbot. Build a site that is technically accessible, genuinely useful, unambiguous about what the business does, and strong enough to deserve a citation."/><div className="scope-grid">{aiVisibility.map(([h,p],i)=><article key={h}><span className="eyebrow">0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div className="section-end"><PrimaryButton href="/answers" secondary>Explore Marketing Answers</PrimaryButton></div></section>:null}

 <section className="section dark"><div className="container split-section"><div><p className="eyebrow">Connected by design</p><h2>ONE SERVICE.<br/>PART OF A<br/>BIGGER PICTURE.</h2></div><div className="prose"><p className="large-copy">{s.connection}</p><div className="related-links">{services.filter(x=>x.slug!==slug).map(x=><Link key={x.slug} href={'/services/'+x.slug}>{x.name}<Arrow/></Link>)}</div></div></div></section>

 <section className="section container"><SectionHeader label="Built around your market" title={'SPECIFIC CUSTOMERS.\nSPECIFIC DECISIONS.'}/><div className="market-links"><Link href="/industries/real-estate"><h3>Real Estate</h3><p>Build confidence in your local expertise before the first conversation.</p><span className="text-link">Explore real estate marketing<Arrow/></span></Link><Link href="/industries/home-services"><h3>Home Services</h3><p>Make services clear, demonstrate quality, and help homeowners take the next step.</p><span className="text-link">Explore home service marketing<Arrow/></span></Link></div></section>

 <Process/>
 <section className="section container"><SectionHeader label="Proof through work" title={'SEE THE FIRST\nIMPRESSION IN ACTION.'} text={slug==='web-design'?'Explore actual websites from our portfolio.':'Our website portfolio shows the digital experiences behind the wider acquisition journey.'}/><WorkGrid full selection={slug==='web-design'?projects:[projects[slug==='meta-ads'?1:0]]}/></section>
 <FAQSection items={s.faqs.map(([q,a])=>[q,a] as const)}/>
 <CTA/>

 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'Service',
  '@id':serviceUrl+'#service',
  name:s.name,
  serviceType:s.name,
  description:s.intro,
  url:serviceUrl,
  provider:{'@id':siteUrl+'/#organization'},
  audience:{'@type':'BusinessAudience',audienceType:'Real estate and home service businesses'}
 }}/>
 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'FAQPage',
  '@id':serviceUrl+'#faq',
  mainEntity:s.faqs.map(([q,a])=>({
   '@type':'Question',
   name:q,
   acceptedAnswer:{'@type':'Answer',text:a}
  }))
 }}/>
 </>;
}
