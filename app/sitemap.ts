import type {MetadataRoute} from 'next';
import {services,industries,projects} from '@/lib/content';
import {insights} from '@/lib/insights';
import {siteUrl} from '@/lib/site';

type Entry={path:string;priority:number;changeFrequency:MetadataRoute.Sitemap[number]['changeFrequency']};

export default function sitemap():MetadataRoute.Sitemap{
 const entries:Entry[]=[
  {path:'',priority:1,changeFrequency:'weekly'},
  {path:'/services',priority:.9,changeFrequency:'monthly'},
  {path:'/industries',priority:.9,changeFrequency:'monthly'},
  {path:'/insights',priority:.85,changeFrequency:'weekly'},
  {path:'/work',priority:.8,changeFrequency:'monthly'},
  {path:'/info-products',priority:.75,changeFrequency:'monthly'},
  {path:'/about',priority:.65,changeFrequency:'monthly'},
  {path:'/contact',priority:.7,changeFrequency:'monthly'},
  ...services.map(s=>({path:'/services/'+s.slug,priority:.85,changeFrequency:'monthly' as const})),
  ...industries.map(i=>({path:'/industries/'+i.slug,priority:.85,changeFrequency:'monthly' as const})),
  ...insights.map(i=>({path:'/insights/'+i.slug,priority:.8,changeFrequency:'monthly' as const})),
  ...projects.map(p=>({path:'/work/'+p.slug,priority:.7,changeFrequency:'monthly' as const}))
 ];
 return entries.map(entry=>({url:siteUrl+entry.path,changeFrequency:entry.changeFrequency,priority:entry.priority}));
}
