import Link from 'next/link';
import {PageHero,SectionHeader,PrimaryButton,CTA,JsonLd} from '@/components/shared';
import {Arrow} from '@/components/interactive';
import {marketingAnswers} from '@/lib/answers';
import {pageMetadata,siteUrl} from '@/lib/site';

export const metadata=pageMetadata(
  'Marketing Answers for Real Estate & Home Services',
  'Direct answers about websites, SEO, AI search visibility, Google Ads, Meta Ads, local marketing, and conversion for real estate and home service businesses.',
  '/answers'
);

export default function Answers(){
 return <><PageHero
  label="Marketing answers"
  title={'QUESTIONS YOUR\nGROWTH PLAN\nSHOULD ANSWER.'}
  text="Clear, practical answers for real estate and home service businesses deciding what to improve across their website, search presence, and paid acquisition."
  breadcrumb={[{name:'Marketing Answers',href:'/answers'}]}
 ><PrimaryButton/><PrimaryButton href="/services" secondary>Explore Services</PrimaryButton></PageHero>

 <section className="section container split-section">
  <div><p className="eyebrow">Answer engine optimization / AEO</p><h2>BE USEFUL<br/>BEFORE YOU<br/>TRY TO RANK.</h2></div>
  <div className="prose">
   <p className="large-copy">AI search does not replace the fundamentals. It raises the value of being clear, specific, crawlable, and worth citing.</p>
   <p>Digital Pathway approaches AEO as an extension of SEO: answer the questions behind the search, make services and entities unambiguous, connect related pages, and support claims with real evidence instead of filler.</p>
   <p>This answer library is written for humans first. The same structure also gives search and AI systems cleaner context about the problems we solve and the markets we serve.</p>
  </div>
 </section>

 <section className="section contrast-section"><div className="container">
  <SectionHeader
   label="Direct answers"
   title={'START WITH THE\nDECISION IN FRONT OF YOU.'}
   text="These are practical starting points, not universal prescriptions. Your market, offer, website, capacity, and measurement determine the right sequence."
  />
  <div className="scope-grid">
   {marketingAnswers.map((item,index)=><article key={item.question}>
    <span className="eyebrow">{String(index+1).padStart(2,'0')}</span>
    <h3>{item.question}</h3>
    <p>{item.answer}</p>
    <Link className="text-link" href={item.href}>{item.link}<Arrow/></Link>
   </article>)}
  </div>
 </div></section>

 <section className="section dark"><div className="container split-section">
  <div><p className="eyebrow">The operating principle</p><h2>CLARITY<br/>COMPOUNDS.</h2></div>
  <div className="prose">
   <p className="large-copy">The strongest search strategy and the strongest conversion strategy usually reinforce each other.</p>
   <p>Specific service pages make campaigns more relevant. Better answers make organic pages more useful. Clear proof helps prospects evaluate the business and gives search systems stronger context. Better tracking shows which questions and channels deserve the next investment.</p>
   <PrimaryButton href="/contact" secondary>Find Your Starting Point</PrimaryButton>
  </div>
 </div></section>

 <CTA/>
 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'FAQPage',
  '@id':siteUrl+'/answers#faq',
  url:siteUrl+'/answers',
  mainEntity:marketingAnswers.map(item=>({
   '@type':'Question',
   name:item.question,
   acceptedAnswer:{'@type':'Answer',text:item.answer}
  }))
 }}/>
 <JsonLd data={{
  '@context':'https://schema.org',
  '@type':'CollectionPage',
  '@id':siteUrl+'/answers#webpage',
  url:siteUrl+'/answers',
  name:'Marketing Answers for Real Estate & Home Services',
  description:'Direct answers about websites, SEO, AI search visibility, Google Ads, Meta Ads, local marketing, and conversion.',
  isPartOf:{'@id':siteUrl+'/#website'},
  about:[
   {'@type':'Thing',name:'Real estate marketing'},
   {'@type':'Thing',name:'Home services marketing'},
   {'@type':'Thing',name:'Search engine optimization'},
   {'@type':'Thing',name:'Answer engine optimization'},
   {'@type':'Thing',name:'Google Ads'},
   {'@type':'Thing',name:'Meta Ads'}
  ]
 }}/>
 </>;
}
