import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getInsight,insights} from '@/lib/insights';
import {pageMetadata,siteUrl} from '@/lib/site';
import {PageHero,FAQSection,CTA,JsonLd} from '@/components/shared';
import {Arrow} from '@/components/interactive';

export function generateStaticParams(){return insights.map(article=>({slug:article.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const article=getInsight(slug);if(!article)notFound();return pageMetadata(article.title,article.description,'/insights/'+article.slug);}

export default async function InsightArticle({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;const article=getInsight(slug);if(!article)notFound();
 const related=insights.filter(item=>item.slug!==article.slug).slice(0,3);
 const publishedLabel=new Date(article.published+'T12:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
 const modifiedLabel=new Date(article.modified+'T12:00:00').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
 return <>
  <PageHero label={article.category+' / '+article.readingTime} title={article.title.toUpperCase()} text={article.description} breadcrumb={[{name:'Insights',href:'/insights'},{name:article.shortTitle,href:'/insights/'+article.slug}]}/>
  <article className="article-shell container">
   <aside className="article-rail" aria-label="Article navigation"><p className="eyebrow">In this guide</p><nav>{article.sections.map(section=><a key={section.id} href={'#'+section.id}>{section.heading}<span aria-hidden="true">↓</span></a>)}</nav><div className="article-dates"><span>Published {publishedLabel}</span><span>Updated {modifiedLabel}</span></div></aside>
   <div className="article-main">
    <section className="direct-answer" aria-labelledby="direct-answer-title"><p className="eyebrow">Direct answer</p><h2 id="direct-answer-title">The short version</h2><p className="large-copy">{article.answer}</p></section>
    <section className="key-takeaways" aria-labelledby="takeaways-title"><p className="eyebrow">Key takeaways</p><h2 id="takeaways-title">What matters most</h2><ul>{article.takeaways.map(item=><li key={item}>{item}</li>)}</ul></section>
    <div className="article-content">{article.sections.map(section=><section id={section.id} key={section.id} className="article-section"><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets?<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>:null}</section>)}</div>
    <div className="article-editorial-note"><p className="eyebrow">Editorial standard</p><p>Digital Pathway publishes guidance to help businesses make better marketing decisions. We avoid invented performance claims, guaranteed rankings, fabricated reviews, and unsupported credentials.</p></div>
   </div>
  </article>
  <FAQSection items={article.faqs}/>
  <section className="section container"><p className="eyebrow">Keep exploring</p><div className="related-insights">{related.map(item=><Link href={'/insights/'+item.slug} key={item.slug}><span>{item.category}</span><strong>{item.shortTitle}</strong><Arrow/></Link>)}</div></section>
  <CTA/>
  <JsonLd data={{'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.description,datePublished:article.published,dateModified:article.modified,mainEntityOfPage:siteUrl+'/insights/'+article.slug,author:{'@type':'Organization',name:'Digital Pathway',url:siteUrl},publisher:{'@type':'Organization',name:'Digital Pathway',url:siteUrl},about:article.category}}/>
 </>;
}
