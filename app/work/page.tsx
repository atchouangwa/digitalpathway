import type { Metadata } from 'next';
import { WorkGrid, CTA } from '@/components/shared';
export const metadata:Metadata={title:'Our Work',description:'Explore website projects for Dana Williams, Henry Clay Co., and Onu Ventures.',alternates:{canonical:'/work'}};
export default function Work(){return <><section className="page-hero container"><p className="eyebrow">Our work</p><h1 className="display">A better presence.<br />A stronger impression.</h1><p>Explore a selection of websites we’ve built for businesses in property and the spaces around it.</p></section><section className="container work-page"><WorkGrid full/></section><CTA title="Let’s build what’s next."/></>;}
