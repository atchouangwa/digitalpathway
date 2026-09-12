import type {MetadataRoute} from 'next';
import {services,industries} from '@/lib/content';
import {siteUrl} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return ['', '/services','/industries','/work','/info-products','/about','/contact',...services.map(s=>`/services/${s.slug}`),...industries.map(i=>`/industries/${i.slug}`)].map(path=>({url:`${siteUrl}${path}`,changeFrequency:'monthly' as const,priority:path===''?1:0.7}));}
