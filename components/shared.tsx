import Link from 'next/link';
import Image from 'next/image';
import { Arrow, Reveal } from './interactive';
import { services, projects } from '@/lib/content';
import { contactEmail } from '@/lib/site';

export function CTA({ title = 'Your next chapter starts here.', text = 'Tell us where you want to go. We’ll help you find the right starting point.' }: {title?:string;text?:string}) { return <section className="cta-section container"><Reveal><h2>{title}</h2><p>{text}</p><Link href="/contact" className="button">Start a project<Arrow /></Link></Reveal><span className="cta-symbol" aria-hidden="true"><Arrow size={150} /></span></section>; }

export function ServiceRows() { return <div className="service-rows">{services.map((s,i) => <Link className="service-row" key={s.slug} href={`/services/${s.slug}`}><span className="service-index">0{i+1}</span><h3>{s.short || s.name}</h3><p>{s.description}</p><span className="round-arrow"><Arrow /></span></Link>)}</div>; }

export function WorkGrid({ full = false }: {full?:boolean}) { return <div className={`work-grid ${full ? 'work-full' : ''}`}>{projects.map((p,i)=><Reveal key={p.name} className="project-card" delay={i*0.05}><a href={p.url} target="_blank" rel="noopener noreferrer" data-project={p.name} aria-label={`Visit ${p.name} website (opens in a new tab)`}><div className={`project-image project-${i}`}><Image src={p.image} alt={p.alt} width={1350} height={920} sizes="(max-width: 767px) 92vw, (max-width: 1100px) 48vw, 42vw" /><span className="project-open"><Arrow size={25}/></span></div><div className="project-info"><div><span>{p.category}</span><h3>{p.name}</h3></div><Arrow /></div></a>{full&&<p>{p.description}</p>}</Reveal>)}</div>; }

export function Footer(){ return <footer className="footer container"><div className="footer-top"><div><Link href="/" className="footer-brand">digital pathway.</Link><p>Real ambition.<br />A clear path forward.</p><a className="email-link" href={`mailto:${contactEmail}`}>{contactEmail}<Arrow size={16}/></a></div><div><h3>Explore</h3><Link href="/industries/real-estate">Real estate</Link><Link href="/industries/home-services">Home services</Link><Link href="/info-products">Info products</Link><Link href="/work">Our work</Link><Link href="/about">About us</Link></div><div><h3>What we do</h3>{services.map(s=><Link key={s.slug} href={`/services/${s.slug}`}>{s.short||s.name}</Link>)}<Link href="/contact">Start a project</Link></div></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Digital Pathway</p><span>Built for what’s next.</span></div></footer>; }
