import type { Metadata } from 'next';
import { ServiceRows, CTA } from '@/components/shared';
export const metadata:Metadata={title:'Marketing Services',description:'Web design, SEO, Meta Ads, and Google Ads for real estate and home service businesses.',alternates:{canonical:'/services'}};
export default function Services(){return <><section className="page-hero container"><p className="eyebrow">What we do</p><h1 className="display">Built to connect.<br />Built to convert.</h1><p>Four core services. One clear path from getting noticed to starting a conversation.</p></section><section className="container section"><ServiceRows/></section><CTA title="Find your starting point."/></>;}
