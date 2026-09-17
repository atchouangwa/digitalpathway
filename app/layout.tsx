import type {Metadata,Viewport} from 'next';
import {Geist} from 'next/font/google';
import {Navbar,Tracking} from '@/components/interactive';
import {Footer,JsonLd} from '@/components/shared';
import {siteUrl,contactEmail} from '@/lib/site';
import './globals.css';
import './elite.css';

const geist=Geist({subsets:['latin'],variable:'--font-geist',display:'swap'});

const defaultTitle='Real Estate & Home Service Marketing Agency | Digital Pathway';
const defaultDescription='Digital Pathway helps real estate and home service businesses grow through conversion-focused websites, SEO, Google Ads, Meta Ads, and stronger search visibility.';

export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 applicationName:'Digital Pathway',
 title:{default:defaultTitle,template:'%s | Digital Pathway'},
 description:defaultDescription,
 alternates:{canonical:'/'},
 icons:{icon:'/icon.svg'},
 openGraph:{
  type:'website',
  locale:'en_US',
  siteName:'Digital Pathway',
  url:'/',
  title:defaultTitle,
  description:defaultDescription,
  images:[{url:'/opengraph-image',width:1200,height:630,alt:'Digital Pathway — real estate and home service marketing'}]
 },
 twitter:{
  card:'summary_large_image',
  title:defaultTitle,
  description:defaultDescription,
  images:['/opengraph-image']
 },
 robots:{index:true,follow:true}
};

export const viewport:Viewport={themeColor:'#050505'};

export default function Layout({children}:{children:React.ReactNode}){
 const organization={
  '@type':'Organization',
  '@id':siteUrl+'/#organization',
  name:'Digital Pathway',
  url:siteUrl,
  logo:{'@type':'ImageObject',url:siteUrl+'/icon.svg'},
  email:contactEmail,
  description:'Digital marketing agency focused on web design, SEO, Google Ads, and Meta Ads for real estate and home service businesses.',
  knowsAbout:[
   'Real estate marketing',
   'Home services marketing',
   'Web design',
   'Search engine optimization',
   'Answer engine optimization',
   'Google Ads',
   'Meta Ads',
   'Conversion optimization'
  ],
  makesOffer:[
   ['Web Design','/services/web-design'],
   ['SEO','/services/seo'],
   ['Google Ads','/services/google-ads'],
   ['Meta Ads','/services/meta-ads']
  ].map(([name,path])=>({
   '@type':'Offer',
   itemOffered:{'@type':'Service',name,url:siteUrl+path}
  }))
 };
 const website={
  '@type':'WebSite',
  '@id':siteUrl+'/#website',
  url:siteUrl,
  name:'Digital Pathway',
  description:defaultDescription,
  inLanguage:'en-US',
  publisher:{'@id':siteUrl+'/#organization'}
 };
 return <html lang="en"><body className={geist.variable}>
  <a href="#main" className="skip-link">Skip to content</a>
  <Navbar/>
  <main id="main" tabIndex={-1}>{children}</main>
  <Footer/>
  <Tracking/>
  <JsonLd data={{'@context':'https://schema.org','@graph':[organization,website]}}/>
 </body></html>;
}
