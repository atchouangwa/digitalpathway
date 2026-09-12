'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, List, X, Moon, Sun, Copy, Check, EnvelopeSimple } from '@phosphor-icons/react';

export function Arrow({ size = 21 }: { size?: number }) { return <ArrowUpRight size={size} weight="regular" aria-hidden="true" />; }

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduce ? {} : { transform: ['translateY(18px)', 'translateY(0px)'] }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const path = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => { const stored = localStorage.getItem('dp-theme'); const next = stored ? stored === 'dark' : media.matches; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; };
    apply(); media.addEventListener('change', apply); return () => media.removeEventListener('change', apply);
  }, []);
  function theme() { const next = !dark; setDark(next); document.documentElement.dataset.theme = next ? 'dark' : 'light'; localStorage.setItem('dp-theme', next ? 'dark' : 'light'); }
  const links = [['Services', '/services'], ['Who we help', '/industries'], ['Our work', '/work'], ['Info products', '/info-products']];
  return <header className="site-header"><div className="nav-shell">
    <Link href="/" className="wordmark" aria-label="Digital Pathway home"><span className="brand-symbol" aria-hidden="true"><ArrowUpRight weight="bold" size={29} /></span><span>digital<br />pathway<span className="brand-period">.</span></span></Link>
    <nav aria-label="Main navigation" className="desktop-nav">{links.map(([label, href]) => <Link key={href} className={path.startsWith(href) ? 'active' : ''} href={href}>{label}</Link>)}</nav>
    <div className="nav-actions"><button type="button" className="icon-button theme-toggle" onClick={theme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={21} /> : <Moon size={21} />}</button><Link className="button button-small nav-cta" href="/contact">Start a project <Arrow size={18} /></Link><button ref={toggleRef} className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={26} /> : <List size={26} />}</button></div>
  </div><nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav" hidden={!open} onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); } }}>{links.map(([label, href]) => <Link key={href} href={href}>{label}<Arrow /></Link>)}<Link href="/contact">Start a project<Arrow /></Link></nav></header>;
}

export function Tracking() {
  useEffect(() => {
    function click(e: MouseEvent) { const el = (e.target as Element).closest('a,button'); if (!el) return; const href = el.getAttribute('href') || ''; let event = ''; if (href === '/contact') event = 'project_cta_click'; else if (href.startsWith('mailto:')) event = 'email_click'; else if (el.hasAttribute('data-project')) event = 'portfolio_click'; if (event) { const w = window as Window & { dataLayer?: unknown[] }; w.dataLayer = w.dataLayer || []; w.dataLayer.push({event, page_path: location.pathname, cta_label: el.textContent?.trim(), destination: href}); } }
    document.addEventListener('click', click); return () => document.removeEventListener('click', click);
  }, []); return null;
}

export function InquiryForm({ email }: { email: string }) {
  const [draft, setDraft] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const [subject, setSubject] = useState('Digital Pathway project inquiry');
  const resultRef = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);
  return <form className="inquiry-form" onSubmit={e => { e.preventDefault(); const data = new FormData(e.currentTarget); const selected = data.getAll('services').join(', ') || 'Help choosing the right starting point'; const title = `Project inquiry: ${String(data.get('business')).slice(0,120)}`; const body = `Hi Digital Pathway,\n\nI'd like to discuss a project.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nBusiness: ${data.get('business')}\nWebsite: ${data.get('website') || 'Not supplied'}\nIndustry: ${data.get('industry')}\nInterested in: ${selected}\n\nGoals:\n${data.get('goals')}\n`; setSubject(title); setDraft(body); requestAnimationFrame(() => resultRef.current?.focus()); const w=window as Window & {dataLayer?: unknown[]}; w.dataLayer=w.dataLayer||[]; w.dataLayer.push({event:'inquiry_draft_created', page_path:location.pathname}); }}>
    <div className="form-grid"><label>Your name<input name="name" autoComplete="name" required maxLength={100} placeholder="Full name" /></label><label>Email address<input name="email" type="email" autoComplete="email" required maxLength={180} placeholder="you@company.com" /></label><label>Business name<input name="business" autoComplete="organization" required maxLength={120} placeholder="Your business" /></label><label>Website <span>(optional)</span><input name="website" inputMode="url" maxLength={250} placeholder="yourwebsite.com" /></label></div>
    <label>Which best describes your business?<select name="industry" required defaultValue=""><option value="" disabled>Select an industry</option><option>Real estate</option><option>Home services</option><option>Info products / education</option><option>Other</option></select></label>
    <fieldset><legend>What can we help with?</legend><div className="service-choices">{['Web design','SEO','Meta Ads','Google Ads','Info product marketing'].map(name => <label key={name}><input type="checkbox" name="services" value={name} /><span>{name}</span></label>)}</div></fieldset>
    <label>What would you like to achieve?<textarea name="goals" required minLength={10} maxLength={3000} rows={4} placeholder="Tell us about your business, your goals, and what you want to improve." /></label>
    <p className="form-note">Your details stay in this browser until you send your inquiry from your email app.</p>
    <button className="button" type="submit">Prepare my inquiry<Arrow /></button>
    {draft && <div className="draft-result" tabIndex={-1} ref={resultRef} role="status"><h3>Your inquiry is ready.</h3><p>Open the draft in your email app, then send it to {email}. Nothing has been sent yet.</p><div className="draft-actions"><a className="button" href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}><EnvelopeSimple size={20} /> Open email draft</a><button className="button button-outline" type="button" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); setCopyError(''); copyTimer.current=setTimeout(()=>setCopied(false),3000); } catch {setCopyError('Copy was unavailable. You can select the text below.');} }}>{copied ? <Check size={20} /> : <Copy size={20} />}{copied ? 'Copied' : 'Copy inquiry'}</button></div>{copyError && <p>{copyError}</p>}<details><summary>View inquiry text</summary><pre>{draft}</pre></details></div>}
  </form>;
}
