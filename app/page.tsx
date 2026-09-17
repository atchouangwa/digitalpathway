import Link from 'next/link';
import {CustomerJourney,Arrow} from '@/components/interactive';
import {SectionHeader,PrimaryButton,ServiceRows,IndustryPanels,WorkGrid,ProjectCard,Principles,Process,FAQSection,CTA,JsonLd} from '@/components/shared';
import {projects,faq,services} from '@/lib/content';
import {pageMetadata,siteUrl} from '@/lib/site';

const homeMetadata=pageMetadata(
 'Digital Pathway',
 'Digital Pathway helps real estate and home service businesses grow through conversion-focused websites, SEO, Google Ads, Meta Ads, and clearer search visibility.',
 '/'
);
export const metadata={
 ...homeMetadata,
 title:{absolute:'Real Estate & Home Service Marketing Agency | Digital Pathway'},
 openGraph:{...homeMetadata.openGraph,title:'Real Estate & Home Service Marketing Agency | Digital Pathway'},
 twitter:{...homeMetadata.twitter,title:'Real Estate & Home Service Marketing Agency | Digital Pathway'}
};

const aiVisibilityPrinciples=[
 ['Crawlable by default','Important services, answers, proof, and navigation should exist in accessible HTML with clear internal links.'],
 ['Answer the real question','Build content around the decision a customer is trying to make, then answer it directly before expanding the detail.'],
 ['Make the entity clear','Use consistent business, service, market, and page relationships so search systems do not have to guess what the company does.'],
 ['Evidence over filler','Authentic work, specific explanations, and current information create stronger trust signals than generic volume content.']
];

export default function Home(){return <>
 <section className="home-hero dark"><div className="container"><div className="hero-topline"><p className="eyebrow">Digital marketing for real estate + home services</p><span className="eyebrow hero-coordinate">Strategy → Experience → Acquisition</span></div><div className="hero-title-row"><h1><span>GET FOUND.</span><span>GET TRUSTED.</span><span>GET CHOSEN.</span></h1><div className="hero-path" aria-hidden="true"><span>01</span><i/><span>02</span><i/><span>03<Arrow size={30}/></span></div></div><div className="hero-bottom"><p>Conversion-focused web design, SEO, Google Ads, and Meta Ads for real estate and home service businesses. One connected path from search or scroll to qualified inquiry.</p><div className="hero-actions"><PrimaryButton/><PrimaryButton href="/work" secondary>View Our Work</PrimaryButton></div></div><div className="hero-foot"><p>Web Design <span>/</span> SEO <span>/</span> Google Ads <span>/</span> Meta Ads</p><a href="#selected-work">Scroll to explore <span aria-hidden="true">↓</span></a></div></div></section>

 <section id="selected-work" className="section container"><SectionHeader label="Selected work / 01" title={'WORK THAT MAKES\nTHE FIRST IMPRESSION COUNT.'}/><ProjectCard project={projects[0]} featured details/><div className="proof-index">{projects.slice(1).map((p,i)=><Link href={'/work/'+p.slug} key={p.slug} data-project={p.slug}><span className="eyebrow">0{i+2} / {p.category}</span><strong>{p.name}</strong><Arrow/></Link>)}</div></section>

 <section className="positioning-section section"><div className="container"><p className="eyebrow">The work deserves the attention</p><h2>GREAT WORK SHOULD<br/>BE EASIER<br/><span className="outline-type">TO CHOOSE.</span></h2><div className="positioning-copy"><span className="oversized-arrow" aria-hidden="true">↗</span><div><p className="large-copy">Your business may already deliver excellent work. Prospects are judging it before they ever speak with you.</p><p>We improve what they see when they search, click, compare, and decide. So the quality behind your business is easier to recognize.</p></div></div></div></section>

 <section className="section container"><SectionHeader label="The connected journey" title={'ONE PATH.\nEVERY TOUCHPOINT CONNECTED.'} text="Website, search, advertising, landing experience, and measurement. Aligned around the same customer decision."/><CustomerJourney/></section>

 <section className="section container"><SectionHeader label="What we do" title={'FOUR DISCIPLINES.\nONE GROWTH SYSTEM.'} text="Start with the constraint that matters most. Make every piece support the next."/><ServiceRows/></section>

 <section className="section contrast-section"><div className="container">
  <SectionHeader
   label="SEO + AI search visibility"
   title={'EASIER TO FIND.\nEASIER TO UNDERSTAND.\nEASIER TO CITE.'}
   text="Answer engine optimization is not a separate trick. It is strong SEO, clearer information architecture, useful direct answers, consistent entity signals, and evidence that makes the business worth referencing."
  />
  <div className="principles-grid">{aiVisibilityPrinciples.map(([h,p],i)=><div key={h}><span className="eyebrow">0{i+1}</span><h3>{h}</h3><p>{p}</p></div>)}</div>
  <div className="section-end"><PrimaryButton href="/answers" secondary>Explore Marketing Answers</PrimaryButton></div>
 </div></section>

 <section className="section dark"><div className="container"><SectionHeader label="Who we help" title={'BUILT AROUND\nHOW YOUR MARKET BUYS.'}/><IndustryPanels/></div></section>

 <section className="section container"><SectionHeader label="The portfolio" title={'REAL BUSINESSES.\nWORK YOU CAN EXPLORE.'} text="Real estate, property staging, and development. See the websites behind the first impression."/><WorkGrid full selection={[projects[1],projects[2]]}/><div className="section-end"><PrimaryButton href="/work" secondary>Explore all our work</PrimaryButton></div></section>

 <section className="section contrast-section"><div className="container"><SectionHeader label="How we think" title={'NOT MORE MARKETING.\nBETTER CONNECTION\nBETWEEN IT.'}/><Principles/></div></section>

 <Process/>

 <section className="section dark info-division"><div className="container info-division-grid"><div><p className="eyebrow">For industry experts / A separate offering</p><h2>TURN WHAT YOU KNOW<br/>INTO SOMETHING PEOPLE<br/>WANT TO LEARN.</h2><p>Info product marketing for real estate and home-service coaches, consultants, educators, experts, and creators. Connect your knowledge to a clear offer and a path to enrollment.</p><PrimaryButton href="/info-products" secondary>Explore Info Product Marketing</PrimaryButton></div><div className="info-division-type" aria-hidden="true"><span>KNOW.</span><span>TEACH.</span><span>GROW.</span></div></div></section>

 <FAQSection items={faq}/><CTA/>
 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'FAQPage',
  '@id':siteUrl+'/#faq',
  mainEntity:faq.map(([q,a])=>({
   '@type':'Question',
   name:q,
   acceptedAnswer:{'@type':'Answer',text:a}
  }))
 }}/>
 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'ItemList',
  '@id':siteUrl+'/#services',
  name:'Digital Pathway marketing services',
  itemListElement:services.map((service,index)=>({
   '@type':'ListItem',
   position:index+1,
   url:siteUrl+'/services/'+service.slug,
   name:service.name
  }))
 }}/>
 </>;
}
