import type { Metadata } from 'next';
import { InquiryForm, Arrow } from '@/components/interactive';
import { contactEmail } from '@/lib/site';
export const metadata:Metadata={title:'Start a Project',description:'Tell Digital Pathway about your business and your marketing goals.',alternates:{canonical:'/contact'}};
export default function Contact(){return <section className="contact-page container"><div className="contact-intro"><p className="eyebrow">Start a project</p><h1 className="display">What’s<br />your next<br /><span className="highlight">move?</span></h1><p>A better website. More relevant inquiries. A new offer. Tell us what you have in mind.</p><a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}<Arrow/></a><div className="contact-expect"><h2>Let’s start with the essentials.</h2><p>Your business, your goals, and where things stand today. We’ll use that context to start a useful conversation.</p></div></div><InquiryForm email={contactEmail}/></section>;}
