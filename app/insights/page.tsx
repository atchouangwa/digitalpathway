import Link from 'next/link';
import {insights} from '@/lib/insights';
import {pageMetadata,siteUrl} from '@/lib/site';
import {PageHero,PrimaryButton,SectionHeader,CTA,JsonLd} from '@/components/shared';
import {Arrow} from '@/components/interactive';

export const metadata=pageMetadata(
 'Marketing Insights for Real Estate & Home Services',
 'Practical guides on local SEO, AI search visibility, paid media, conversion-focused websites, and growth systems for real estate and home service businesses.',
 '/insights'
);

export default function Insights(){return <>
 <PageHero label="Insights / Search, conversion & growth" title={'PRACTICAL THINKING.\nBUILT FOR REAL\nDECISIONS.'} text="Clear answers on the systems behind local discovery, trust, paid acquisition, conversion, and AI search visibility." breadcrumb={[{name:'Insights',href:'/insights'}]}><PrimaryButton href="/contact">Start a Project</PrimaryButton></PageHero>
 <section className="section container"><SectionHeader label="Latest guides" title={'USEFUL ANSWERS.\nNO FILLER.'} text="Built around the questions real estate and home service businesses ask before they spend more on marketing."/>
  <div className="insight-grid">{insights.map((article,index)=><Link className="insight-card" key={article.slug} href={'/insights/'+article.slug}>
   <span className="eyebrow">0{index+1} / {article.category}</span><h2>{article.shortTitle}</h2><p>{article.description}</p><span className="insight-meta">{article.readingTime} · Updated {new Date(article.modified+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</span><span className="text-link">Read the guide<Arrow/></span>
  </Link>)}</div>
 </section>
 <section className="section contrast-section"><div className="container split-section"><div><p className="eyebrow">How we approach content</p><h2>ANSWER THE QUESTION.<br/>THEN EARN THE TRUST.</h2></div><div className="prose"><p className="large-copy">Strong search content should help a person make a better decision, not simply occupy a keyword.</p><p>We focus on clear answers, useful context, real business constraints, and visible evidence. That same discipline makes content easier for traditional search engines and AI-powered answer experiences to understand.</p><PrimaryButton href="/services/seo" secondary>Explore SEO + AI Search</PrimaryButton></div></div></section>
 <CTA/>
 <JsonLd data={{'@context':'https://schema.org','@type':'CollectionPage',name:'Digital Pathway Insights',url:siteUrl+'/insights',description:'Practical marketing guides for real estate and home service businesses.',mainEntity:{'@type':'ItemList',itemListElement:insights.map((article,index)=>({'@type':'ListItem',position:index+1,url:siteUrl+'/insights/'+article.slug,name:article.title}))}}}/>
 </>;
}
