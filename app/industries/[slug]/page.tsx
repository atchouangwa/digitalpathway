import {industryCopy} from '@/lib/page-content';
import Image from 'next/image';
import {notFound} from 'next/navigation';
import {industries,projects} from '@/lib/content';
import {pageMetadata} from '@/lib/site';
import {PageHero,SectionHeader,WorkGrid,ServiceRows,Process,FAQSection,CTA,PrimaryButton} from '@/components/shared';
export function generateStaticParams(){return industries.map(i=>({slug:i.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const i=industries.find(i=>i.slug===slug);if(!i)notFound();const copy=industryCopy[i.slug as keyof typeof industryCopy];return pageMetadata(copy.title,copy.description,'/industries/'+slug);}
export default async function Industry({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const i=industries.find(i=>i.slug===slug);if(!i)notFound();const real=slug==='real-estate';
 const copy=industryCopy[i.slug as keyof typeof industryCopy];
 return <><PageHero label={i.name+' marketing'} title={i.title} text={i.description} breadcrumb={[{name:'Who We Help',href:'/industries'},{name:i.name,href:'/industries/'+slug}]}/>
 <section className="section container split-section"><div><p className="eyebrow">The decision starts online</p><h2>{real?'TRUST STARTS BEFORE THE INTRODUCTION.':'SEARCH. COMPARE. EVALUATE. CALL.'}</h2></div><div className="prose"><p className="large-copy">{i.body}</p><div className="audience-tags">{i.audience.map(a=><span key={a}>{a}</span>)}</div></div></section>
 <div className="industry-wide-image container"><Image src={i.image} alt={i.alt} width={1536} height={1024} sizes="90vw"/></div>
 <section className="section container"><SectionHeader label="What matters in your market" title={real?'LOCAL EXPERTISE.\nA STRONGER DIGITAL PRESENCE.':'THE RIGHT SIGNALS.\nAT THE RIGHT MOMENT.'}/><div className="scope-grid">{i.priorities.map(([h,p],n)=><article key={h}><span className="eyebrow">0{n+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></section>
 <section className="section contrast-section"><div className="container"><SectionHeader label="Find your starting point" title={copy.heading}/><div className="scope-grid">{copy.pathways.map(([h,p])=><article key={h}><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
 <section className="section dark"><div className="container"><SectionHeader label="Connected capabilities" title={real?'REAL ESTATE SERVICES.\nWORKING TOGETHER.':'FROM HOMEOWNER SEARCH\nTO QUOTE REQUEST.'}/><ServiceRows descriptions={copy.serviceDescriptions}/></div></section>
 <section className="section container"><SectionHeader label="Relevant work" title={'A BETTER WAY\nTO SHOW THE BUSINESS.'} text={real?'Explore our real estate and development website projects.':'Explore our property staging website work. Actual project imagery makes a stronger impression than generic claims.'}/><WorkGrid full selection={real?[projects[0],projects[2]]:[projects[1]]}/></section>
 <Process items={copy.steps} title={real?'FROM YOUR MARKET\nTO THE RIGHT CONVERSATION.':'FROM YOUR SERVICES\nTO THE RIGHT JOBS.'}/><FAQSection title={real?'REAL ESTATE\nMARKETING FAQ':'HOME SERVICE\nMARKETING FAQ'} intro={real?'Choosing the right approach for your role in property.':'Practical questions about growing a local service business.'} items={copy.faqs}/><section className="section container related-info"><h2>Teaching what you know?</h2><p>Our separate info product service helps real estate and home-service experts market education offers.</p><PrimaryButton href="/info-products" secondary>Explore Info Product Marketing</PrimaryButton></section><CTA {...copy.cta}/></>;
}
