import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { industries } from '@/lib/content';
import { Arrow } from '@/components/interactive';
import { CTA } from '@/components/shared';
export const metadata:Metadata={title:'Who We Help',description:'Focused marketing for real estate professionals, contractors, and home service businesses.',alternates:{canonical:'/industries'}};
export default function Industries(){return <><section className="page-hero container"><p className="eyebrow">Who we help</p><h1 className="display">Your business.<br />Understood.</h1><p>Marketing starts with the customer you need to reach and the decision they need to make.</p></section><section className="industry-grid container section">{industries.map(i=><Link className="industry-card" href={`/industries/${i.slug}`} key={i.slug}><div className="industry-photo"><Image src={i.image} alt={i.alt} width={1536} height={1024} sizes="(max-width:767px) 90vw, 50vw"/></div><div className="industry-content"><h2>{i.name}</h2><Arrow size={30}/></div><p>{i.description}</p></Link>)}</section><CTA/></>;}
