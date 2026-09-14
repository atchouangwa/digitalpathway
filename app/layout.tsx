import type {Metadata} from 'next';
import {Geist} from 'next/font/google';
import {Navbar,Tracking} from '@/components/interactive';
import {Footer,JsonLd} from '@/components/shared';
import {siteUrl,contactEmail} from '@/lib/site';
import './globals.css';
const geist=Geist({subsets:['latin'],variable:'--font-geist',display:'swap'});
export const metadata:Metadata={metadataBase:new URL(siteUrl),icons:{icon:'/icon.svg'},title:{default:'Digital Pathway | Real Estate & Home Service Marketing',template:'%s | Digital Pathway'},description:'Digital Pathway helps real estate and home service businesses grow through conversion-focused websites, SEO, Google Ads, and Meta Ads.',openGraph:{type:'website',siteName:'Digital Pathway',images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image'},robots:{index:true,follow:true}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={geist.variable}><a href="#main" className="skip-link">Skip to content</a><Navbar/><main id="main" tabIndex={-1}>{children}</main><Footer/><Tracking/><JsonLd data={{'@context':'https://schema.org','@type':'Organization','@id':siteUrl+'/#organization',name:'Digital Pathway',url:siteUrl,email:contactEmail,description:'Web design, SEO, Google Ads, and Meta Ads for real estate and home service businesses.'}}/></body></html>;}
