import type {Metadata} from 'next';
import {Geist} from 'next/font/google';
import {Navbar,Tracking} from '@/components/interactive';
import {Footer,JsonLd} from '@/components/shared';
import {siteUrl,contactEmail,brandName,defaultDescription,absoluteUrl} from '@/lib/site';
import './globals.css';
import './enhancements.css';

const geist=Geist({subsets:['latin'],variable:'--font-geist',display:'swap'});

export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 applicationName:brandName,
 icons:{icon:'/icon.svg'},
 title:{default:'Digital Pathway | Real Estate & Home Service Marketing Agency',template:'%s | Digital Pathway'},
 description:defaultDescription,
 alternates:{canonical:'/'},
 openGraph:{type:'website',siteName:brandName,title:'Digital Pathway | Real Estate & Home Service Marketing Agency',description:defaultDescription,url:siteUrl,images:[{url:'/opengraph-image',width:1200,height:630,alt:'Digital Pathway — real estate and home service marketing'}]},
 twitter:{card:'summary_large_image',title:'Digital Pathway | Real Estate & Home Service Marketing Agency',description:defaultDescription,images:['/opengraph-image']},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
 creator:brandName,
 publisher:brandName,
 category:'marketing'
};

const entityGraph={
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Organization','@id':siteUrl+'/#organization',name:brandName,url:siteUrl,logo:absoluteUrl('/icon.svg'),email:contactEmail,description:defaultDescription,knowsAbout:['Web design','Search engine optimization','Answer engine optimization','Local SEO','Google Ads','Meta Ads','Conversion optimization','Real estate marketing','Home service marketing'],contactPoint:{'@type':'ContactPoint',email:contactEmail,contactType:'sales'}},
  {'@type':'WebSite','@id':siteUrl+'/#website',url:siteUrl,name:brandName,description:defaultDescription,publisher:{'@id':siteUrl+'/#organization'},inLanguage:'en-US'}
 ]
};

export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={geist.variable}><a href="#main" className="skip-link">Skip to content</a><Navbar/><main id="main" tabIndex={-1}>{children}</main><Footer/><Tracking/><JsonLd data={entityGraph}/></body></html>;}
