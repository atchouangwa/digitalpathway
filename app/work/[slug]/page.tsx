import Image from 'next/image';
import {notFound} from 'next/navigation';
import {projects} from '@/lib/content';
import {pageMetadata} from '@/lib/site';
import {PageHero,WorkGrid,SectionHeader,CTA} from '@/components/shared';
import {Arrow} from '@/components/interactive';
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return pageMetadata(p.name+' Website Project',p.description,'/work/'+p.slug);}
export default async function CaseStudy({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=projects.find(p=>p.slug===slug);if(!p)notFound();return <>
 <PageHero label={p.category+' / Selected work'} title={p.name.toUpperCase()} text={p.description} breadcrumb={[{name:'Our Work',href:'/work'},{name:p.name,href:'/work/'+p.slug}]}><a className="button" href={p.url} target="_blank" rel="noopener noreferrer" data-project={p.slug}>Visit website<Arrow/></a></PageHero>
 <section className="section container"><div className="case-hero-image"><Image src={p.image} alt={p.alt} width={1350} height={920} sizes="90vw" priority/></div><dl className="project-facts"><div><dt>Client</dt><dd>{p.name}</dd></div><div><dt>Industry</dt><dd>{p.category}</dd></div>{p.services?.length?<div><dt>Services</dt><dd>{p.services.join(', ')}</dd></div>:null}<div><dt>Website</dt><dd><a href={p.url} target="_blank" rel="noopener noreferrer" data-project={p.slug}>{new URL(p.url).hostname.replace(/^www\./,'')} ↗</a></dd></div></dl>
 {[['The challenge',p.problem],['The strategy',p.strategy],['The execution',p.execution],['The results',p.results]].map(([h,t])=>t?<div className="case-story split-section" key={h}><h2>{h}</h2><p>{t}</p></div>:null)}
 {p.gallery?.map(g=><Image key={g.src} src={g.src} alt={g.alt} width={1440} height={960} sizes="90vw"/>)}
 {p.testimonial?<blockquote><p>{p.testimonial.quote}</p><cite>{p.testimonial.attribution}</cite></blockquote>:null}</section>
 <section className="section container"><SectionHeader label="More from the portfolio" title={'ANOTHER BUSINESS.\nANOTHER FIRST IMPRESSION.'}/><WorkGrid full selection={projects.filter(x=>x.slug!==slug)}/></section><CTA/></>;}
