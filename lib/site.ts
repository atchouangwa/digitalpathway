import type {Metadata} from 'next';

export const brandName='Digital Pathway';
export const contactEmail=process.env.NEXT_PUBLIC_CONTACT_EMAIL||'francis@digitalpathway.io';
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||'https://digitalpathway.vercel.app').replace(/\/$/,'');
export const defaultDescription='Digital Pathway helps real estate and home service businesses grow through conversion-focused websites, SEO and AI search visibility, Google Ads, and Meta Ads.';

export function absoluteUrl(path:string){return path.startsWith('http')?path:siteUrl+(path.startsWith('/')?path:'/'+path);}

export function pageMetadata(title:string,description:string,path:string):Metadata{
 const canonical=absoluteUrl(path);
 return {
  title,
  description,
  alternates:{canonical},
  openGraph:{title:title+' | '+brandName,description,url:canonical,type:'website',siteName:brandName,images:[{url:absoluteUrl('/opengraph-image'),width:1200,height:630,alt:brandName+' — real estate and home service marketing'}]},
  twitter:{card:'summary_large_image',title:title+' | '+brandName,description,images:[absoluteUrl('/opengraph-image')]},
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
  category:'marketing'
 };
}
