import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { industries } from '@/lib/content';
import { CTA, ServiceRows } from '@/components/shared';
import { Arrow } from '@/components/interactive';
export function generateStaticParams(){return industries.map(i=>({slug:i.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const i=industries.find(i=>i.slug===slug);return {title:`${i?.name} Marketing`,description:i?.description,alternates:{canonical:`/industries/${slug}`}};}
export default async function Industry({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const i=industries.find(i=>i.slug===slug);if(!i)notFound();return <><section className="page-hero container"><p className="eyebrow">{i.name} marketing</p><h1 className="display detail-display">{i.title}</h1><p>{i.description}</p><Link href="/contact" className="button">Start a project<Arrow/></Link></section><div className="wide-image container"><Image src={i.image} alt={i.alt} width={1536} height={1024} sizes="95vw" priority/></div><section className="detail-section container"><div><h2>Make the connection.</h2><p>{i.body}</p></div><div className="deliverables"><h3>Who we work with</h3>{i.audience.map(a=><p key={a}><Arrow size={20}/>{a}</p>)}</div></section><section className="container section"><h2 className="spaced-title">A stronger presence.<br />At every touchpoint.</h2><ServiceRows/></section><CTA/></>;}
