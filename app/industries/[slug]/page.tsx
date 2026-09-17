import Image from 'next/image';
import {notFound} from 'next/navigation';
import {industries,projects,type FAQ} from '@/lib/content';
import {pageMetadata,siteUrl} from '@/lib/site';
import {PageHero,SectionHeader,WorkGrid,ServiceRows,Process,FAQSection,CTA,PrimaryButton,JsonLd} from '@/components/shared';

export function generateStaticParams(){return industries.map(i=>({slug:i.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const i=industries.find(i=>i.slug===slug);
 if(!i)notFound();
 const title=slug==='real-estate'?'Real Estate Digital Marketing Agency':'Home Services Digital Marketing Agency';
 return pageMetadata(title,i.description,'/industries/'+slug);
}

export default async function Industry({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const i=industries.find(i=>i.slug===slug);
 if(!i)notFound();
 const real=slug==='real-estate';
 const industryUrl=siteUrl+'/industries/'+slug;
 const questions:FAQ[]=real?[
  ['Who is this for?','Agents, real estate teams, brokerages, developers, and property businesses looking for a more connected digital presence.'],
  ['Can you support seller and listing inquiries?','Website pages and campaign journeys can be planned around specific services and audiences, including sellers and listing conversations. Scope follows the business goal.'],
  ['Do you include MLS or IDX integrations?','Those integrations are not promised as a standard inclusion. If your project needs one, availability, licensing, platform compatibility, and scope must be confirmed.']
 ]:[
  ['Which trades is this relevant to?','Contractors, remodelers, HVAC, plumbing, electrical, roofing, landscaping, and specialty trades are examples of the businesses this approach is built for. This list is not a client roster.'],
  ['Can campaigns focus on the work we want more of?','The starting point is understanding your services, capacity, service area, and preferred jobs. Messaging and conversion paths should reflect those priorities.'],
  ['How do you measure calls and quote requests?','We define the relevant actions and available integrations before launch. Tracking should be paired with your feedback on lead quality.']
 ];

 return <><PageHero label={i.name+' marketing'} title={i.title} text={i.description} breadcrumb={[{name:'Who We Help',href:'/industries'},{name:i.name,href:'/industries/'+slug}]}/>

 <section className="section container split-section"><div><p className="eyebrow">The decision starts online</p><h2>{real?'TRUST STARTS BEFORE THE INTRODUCTION.':'SEARCH. COMPARE. EVALUATE. CALL.'}</h2></div><div className="prose"><p className="large-copy">{i.body}</p><div className="audience-tags">{i.audience.map(a=><span key={a}>{a}</span>)}</div></div></section>

 <div className="industry-wide-image container"><Image src={i.image} alt={i.alt} width={1536} height={1024} sizes="90vw"/></div>

 <section className="section container"><SectionHeader label="What matters in your market" title={real?'LOCAL EXPERTISE.\nA STRONGER DIGITAL PRESENCE.':'THE RIGHT SIGNALS.\nAT THE RIGHT MOMENT.'}/><div className="scope-grid">{i.priorities.map(([h,p],n)=><article key={h}><span className="eyebrow">0{n+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></section>

 <section className="section dark"><div className="container"><SectionHeader label="Connected capabilities" title={'MAKE EVERY\nTOUCHPOINT COUNT.'}/><ServiceRows/></div></section>

 <section className="section container"><SectionHeader label="Relevant work" title={'A BETTER WAY\nTO SHOW THE BUSINESS.'} text={real?'Explore our real estate and development website projects.':'Explore our property staging website work. Actual project imagery makes a stronger impression than generic claims.'}/><WorkGrid full selection={real?[projects[0],projects[2]]:[projects[1]]}/></section>

 <Process/>
 <FAQSection items={questions}/>
 <section className="section container related-info"><h2>Teaching what you know?</h2><p>Our separate info product service helps real estate and home-service experts market education offers.</p><PrimaryButton href="/info-products" secondary>Explore Info Product Marketing</PrimaryButton></section>
 <CTA/>

 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'Service',
  '@id':industryUrl+'#service',
  name:i.name+' Digital Marketing',
  serviceType:i.name+' digital marketing',
  description:i.description,
  url:industryUrl,
  provider:{'@id':siteUrl+'/#organization'},
  audience:{'@type':'BusinessAudience',audienceType:i.audience.join(', ')}
 }}/>
 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'FAQPage',
  '@id':industryUrl+'#faq',
  mainEntity:questions.map(([q,a])=>({
   '@type':'Question',
   name:q,
   acceptedAnswer:{'@type':'Answer',text:a}
  }))
 }}/>
 </>;
}
