import type {MetadataRoute} from 'next';
import {services,industries,projects} from '@/lib/content';
import {siteUrl} from '@/lib/site';

export default function sitemap():MetadataRoute.Sitemap{
 const paths=[
  '',
  '/services',
  '/industries',
  '/answers',
  '/work',
  '/info-products',
  '/about',
  '/contact',
  ...services.map(s=>'/services/'+s.slug),
  ...industries.map(i=>'/industries/'+i.slug),
  ...projects.map(p=>'/work/'+p.slug)
 ];
 return paths.map((path):MetadataRoute.Sitemap[number]=>({
  url:siteUrl+path,
  changeFrequency:path===''||path==='/answers'?'weekly':'monthly',
  priority:path===''?1:path==='/services'||path==='/industries'?0.9:path==='/answers'?0.8:0.7
 }));
}
