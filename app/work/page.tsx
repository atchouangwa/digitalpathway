import {PageHero,PrimaryButton,WorkGrid,CTA} from '@/components/shared';
import {pageMetadata} from '@/lib/site';
export const metadata=pageMetadata('Our Work','Explore Digital Pathway website projects for Dana Williams, Henry Clay Co., and Onu Ventures.','/work');
export default function Work(){return <><PageHero label="Selected work" title={'THE FIRST IMPRESSION.\nMADE TO COUNT.'} text="A closer look at the websites we have helped bring to life. Real businesses. Actual work." breadcrumb={[{name:'Our Work',href:'/work'}]}><PrimaryButton href="#projects" secondary>Explore the projects</PrimaryButton></PageHero><section id="projects" className="section container portfolio-section"><WorkGrid full/></section><CTA title={'YOUR BUSINESS.\nOUR NEXT CONVERSATION.'}/></>;}
