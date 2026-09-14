import type {Metadata} from 'next';
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'francis@digitalpathway.io';
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalpathway.vercel.app').replace(/\/$/,'');
export function pageMetadata(title:string,description:string,path:string):Metadata {
 return {title,description,alternates:{canonical:path},openGraph:{title:title+' | Digital Pathway',description,url:path,type:'website',siteName:'Digital Pathway',images:[{url:'/opengraph-image',width:1200,height:630}]},twitter:{card:'summary_large_image',title:title+' | Digital Pathway',description,images:['/opengraph-image']}};
}
