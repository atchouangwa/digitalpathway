import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navigation, Tracking } from '@/components/interactive';
import { Footer } from '@/components/shared';
import { siteUrl } from '@/lib/site';
import './globals.css';

const manrope = localFont({ src: '../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', variable: '--font-body', display: 'swap' });
const barlow = localFont({ src: '../node_modules/@fontsource/barlow-condensed/files/barlow-condensed-latin-700-normal.woff2', variable: '--font-display', display: 'swap' });
export const metadata: Metadata = { metadataBase: new URL(siteUrl), icons:{icon:'/icon.svg'}, title: { default: 'Digital Pathway | Real Estate & Home Service Marketing', template: '%s | Digital Pathway' }, description: 'Web design, SEO, Meta Ads, and Google Ads for real estate and home service businesses. A clear path from getting seen to getting chosen.', openGraph: {type:'website',siteName:'Digital Pathway', title:'Digital Pathway | Get seen. Get chosen.', description:'Web design, search, and paid media for real estate and home service businesses.'}, twitter:{card:'summary'}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="en" suppressHydrationWarning><body className={`${manrope.variable} ${barlow.variable}`}><a href="#main" className="skip-link">Skip to content</a><Navigation /><main id="main">{children}</main><Footer /><Tracking /></body></html>; }
