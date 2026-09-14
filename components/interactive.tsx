'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {track, type EventName} from '@/lib/tracking';

const serviceLinks=[['Web Design','/services/web-design'],['SEO','/services/seo'],['Google Ads','/services/google-ads'],['Meta Ads','/services/meta-ads']];
const marketLinks=[['Real Estate','/industries/real-estate'],['Home Services','/industries/home-services']];
export function Arrow({size=22}:{size?:number}){return <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>;}

export function MobileMenu({dialogRef,onClose}:{dialogRef:React.RefObject<HTMLDialogElement|null>;onClose:()=>void}){
 return <dialog ref={dialogRef} className="mobile-menu" onClose={onClose} onKeyDown={e=>{if(e.key!=='Tab')return;const nodes=Array.from(e.currentTarget.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex="0"]'));const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}} aria-label="Main navigation">
 <div className="mobile-menu-head"><Link href="/" className="wordmark" onClick={()=>dialogRef.current?.close()}>digital pathway<span aria-hidden="true">↗</span></Link><button className="menu-button" onClick={()=>dialogRef.current?.close()} aria-label="Close navigation">Close <span aria-hidden="true">×</span></button></div>
 <nav aria-label="Mobile navigation" onClick={e=>{if((e.target as Element).closest('a'))dialogRef.current?.close();}}>
 <div className="mobile-group"><Link href="/services">Services <Arrow/></Link><div>{serviceLinks.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</div></div>
 <div className="mobile-group"><Link href="/industries">Who We Help <Arrow/></Link><div>{marketLinks.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</div></div>
 {[['Our Work','/work'],['Info Products','/info-products'],['About','/about']].map(([n,h])=><Link className="mobile-main-link" key={h} href={h}>{n}<Arrow/></Link>)}
 <Link className="button" href="/contact">Start a Project<Arrow/></Link>
 </nav><p className="eyebrow mobile-menu-foot">Real estate + home service marketing</p></dialog>;
}
export function Navbar(){
 const path=usePathname();const header=useRef<HTMLElement>(null);const dialog=useRef<HTMLDialogElement>(null);const toggle=useRef<HTMLButtonElement>(null);const [open,setOpen]=useState(false);
 useEffect(()=>{dialog.current?.close();header.current?.querySelectorAll('details').forEach(d=>d.open=false);},[path]);
 useEffect(()=>{
 const update=()=>header.current?.classList.toggle('is-scrolled',window.scrollY>24);
 update();window.addEventListener('scroll',update,{passive:true});
 const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')header.current?.querySelectorAll('details').forEach(d=>d.open=false);};
 const outside=(e:MouseEvent)=>{if(!header.current?.contains(e.target as Node))header.current?.querySelectorAll('details').forEach(d=>d.open=false);};
 document.addEventListener('keydown',esc);document.addEventListener('click',outside);
 return()=>{window.removeEventListener('scroll',update);document.removeEventListener('keydown',esc);document.removeEventListener('click',outside);};
 },[]);
 useEffect(()=>{if(!open)return;const prior=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=prior;};},[open]);
 return <header ref={header} className="site-header dark"><div className="nav-shell">
 <Link href="/" className="wordmark" aria-label="Digital Pathway home">digital pathway<span aria-hidden="true">↗</span></Link>
 <nav className="desktop-nav" aria-label="Main navigation">
 {[{name:'Services',href:'/services',links:serviceLinks},{name:'Who We Help',href:'/industries',links:marketLinks}].map(g=><details key={g.href} className="nav-disclosure" name="desktop-menu"><summary aria-current={path.startsWith(g.href)?'true':undefined}>{g.name}<span aria-hidden="true">+</span></summary><div className="mega-menu"><Link className="mega-overview" href={g.href}>Explore {g.name}<Arrow/></Link>{g.links.map(([n,h])=><Link key={h} href={h} aria-current={path===h?'page':undefined}>{n}<Arrow size={18}/></Link>)}</div></details>)}
 {[['Our Work','/work'],['Info Products','/info-products'],['About','/about']].map(([n,h])=><Link key={h} href={h} aria-current={path===h?'page':undefined}>{n}</Link>)}
 </nav><Link className="button button-small nav-cta" href="/contact">Start a Project<Arrow size={18}/></Link>
 <button ref={toggle} className="menu-button mobile-toggle" aria-haspopup="dialog" aria-expanded={open} onClick={()=>{dialog.current?.showModal();setOpen(true);}}>Menu <span aria-hidden="true">☰</span></button>
 </div><MobileMenu dialogRef={dialog} onClose={()=>{setOpen(false);toggle.current?.focus();}}/></header>;
}
export const Navigation=Navbar;
export function Tracking(){
 const path=usePathname();
 useEffect(()=>{
 const click=(e:MouseEvent)=>{const el=(e.target as Element).closest('a');if(!el)return;const href=el.getAttribute('href')||'';let event:EventName|undefined;
 if(href.startsWith('/contact'))event='start_project_click';
 else if(href.startsWith('/services/'))event='service_click';
 else if(el.hasAttribute('data-project'))event='portfolio_click';
 else if(href.startsWith('mailto:'))event='email_click';
 else if(href.startsWith('tel:'))event='phone_click';
 if(event)track(event,{destination:href,cta_label:el.textContent?.trim().slice(0,120)||''});
 };
 document.addEventListener('click',click);return()=>document.removeEventListener('click',click);
 },[]);
 useEffect(()=>{if(path.startsWith('/work/'))track('case_study_view',{project:path.split('/').pop()||''});},[path]);
 return null;
}
const journey=[
 {label:'Discover',channel:'Search / Ads',title:'Be there when the interest starts.',copy:'Relevant searches and thoughtful advertising introduce your business to people with a reason to pay attention.',href:'/services/seo',link:'Build your visibility'},
 {label:'Evaluate',channel:'Website / Positioning',title:'Make the value easy to understand.',copy:'A clear message and a focused website help visitors understand what you do, who it is for, and why it matters.',href:'/services/web-design',link:'Strengthen your website'},
 {label:'Trust',channel:'Proof / Content',title:'Give the decision something to stand on.',copy:'Actual work and useful content help prospects evaluate the quality behind your business before the first conversation.',href:'/work',link:'See the work'},
 {label:'Act',channel:'Call / Form / Booking',title:'Make the next step feel obvious.',copy:'Connect the page, the offer, and the inquiry path. Measure the actions that bring your business closer to the right customers.',href:'/contact',link:'Find your starting point'}
];
export function CustomerJourney(){
 const [active,setActive]=useState(0);const tabs=useRef<(HTMLButtonElement|null)[]>([]);
 return <div className="journey"><div className="journey-tabs" role="tablist" aria-label="Customer decision stages">{journey.map((s,i)=><button key={s.label} ref={el=>{tabs.current[i]=el;}} id={'journey-tab-'+i} role="tab" aria-selected={active===i} aria-controls={'journey-panel-'+i} tabIndex={active===i?0:-1} onClick={()=>setActive(i)} onKeyDown={e=>{let n=active;if(e.key==='ArrowRight')n=(active+1)%4;else if(e.key==='ArrowLeft')n=(active+3)%4;else if(e.key==='Home')n=0;else if(e.key==='End')n=3;else return;e.preventDefault();setActive(n);tabs.current[n]?.focus();}}><span className="eyebrow">0{i+1}</span><strong>{s.label}</strong><span>{s.channel}</span></button>)}</div>
 {journey.map((s,i)=><div key={s.label} id={'journey-panel-'+i} role="tabpanel" aria-labelledby={'journey-tab-'+i} tabIndex={0} hidden={active!==i} className="journey-panel"><span className="journey-number" aria-hidden="true">0{i+1}</span><div><h3>{s.title}</h3><p>{s.copy}</p><Link className="text-link" href={s.href}>{s.link}<Arrow/></Link></div></div>)}</div>;
}
