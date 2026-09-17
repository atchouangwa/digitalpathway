import {test,expect} from '@playwright/test';
const routes=['/','/services','/services/web-design','/services/seo','/services/google-ads','/services/meta-ads','/industries','/industries/real-estate','/industries/home-services','/info-products','/answers','/work','/work/dana-williams','/work/henry-clay-co','/work/onu-ventures','/about','/contact'];
for(const width of [1440,1024,768,390,375]){
 test('every route at '+width+'px',async({page},testInfo)=>{
 test.setTimeout(240000);await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const route of routes){
  const response=await page.goto(route);expect(response?.status(),route).toBe(200);await page.evaluate(()=>document.fonts.ready);
  await expect(page.locator('h1'),route).toHaveCount(1);
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href','https://digitalpathway.vercel.app'+(route==='/'?'':route));
  await expect(page.locator('meta[name=description]')).toHaveAttribute('content',/.{30,}/);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+' overflow').toBe(true);
  for(const img of await page.locator('main img').all()){await img.scrollIntoViewIfNeeded();await expect(img).toHaveJSProperty('complete',true);expect(await img.evaluate((el:HTMLImageElement)=>el.naturalWidth),route+' image').toBeGreaterThan(0);}
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:testInfo.outputPath((route.replaceAll('/','-')||'home')+'-'+width+'.jpg'),fullPage:true,type:'jpeg',quality:65,animations:'disabled'});
  if(route==='/'&&(width===1440||width===390)){const shot=await page.screenshot({type:'jpeg',quality:35,animations:'disabled'});console.log('VISUAL_'+width+':'+shot.toString('base64')+':END_VISUAL');}
 }
 expect(errors).toEqual([]);
 });
}
test('all internal navigation destinations resolve',async({page,request})=>{
 test.setTimeout(120000);const urls=new Set<string>();
 for(const route of routes){await page.goto(route);for(const href of await page.locator('a[href^="/"]').evaluateAll(els=>els.map(el=>el.getAttribute('href')!)))urls.add(href);}
 for(const url of urls){const r=await request.get(url);expect(r.status(),url).toBe(200);}
 const sitemap=await request.get('/sitemap.xml');expect(sitemap.status()).toBe(200);expect(await sitemap.text()).toContain('/answers');
 const robots=await request.get('/robots.txt');expect(robots.status()).toBe(200);const robotsText=await robots.text();expect(robotsText).toContain('OAI-SearchBot');expect(robotsText).toContain('/sitemap.xml');
 const llms=await request.get('/llms.txt');expect(llms.status()).toBe(200);expect(await llms.text()).toContain('## Core services');
 expect((await request.get('/not-a-real-page')).status()).toBe(404);
});
test('mobile menu traps focus and closes on escape and navigation',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 const toggle=page.getByRole('button',{name:'Menu',exact:true});await toggle.click();
 const dialog=page.getByRole('dialog');await expect(dialog).toBeVisible();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible();
 for(let i=0;i<20;i++){await page.keyboard.press('Tab');expect(await page.evaluate(()=>Boolean(document.activeElement?.closest('dialog')))).toBe(true);}
 await page.keyboard.press('Escape');await expect(dialog).not.toBeVisible();await expect(toggle).toBeFocused();
 await toggle.click();await dialog.getByRole('link',{name:'SEO',exact:true}).click();await expect(page).toHaveURL(/\/services\/seo$/);await expect(dialog).not.toBeVisible();
});
test('desktop menus, journey tabs, and FAQ work with a keyboard',async({page})=>{
 await page.setViewportSize({width:1440,height:900});await page.goto('/');
 const menu=page.locator('.desktop-nav summary').first();await menu.focus();await page.keyboard.press('Enter');await expect(page.locator('.mega-menu').first()).toBeVisible();await page.keyboard.press('Escape');await expect(page.locator('.mega-menu').first()).not.toBeVisible();
 const tab=page.getByRole('tab',{name:/01.*Discover/});await tab.focus();await page.keyboard.press('ArrowRight');await expect(page.getByRole('tab',{name:/02.*Evaluate/})).toHaveAttribute('aria-selected','true');
 const summary=page.locator('.faq summary').first();await summary.focus();await page.keyboard.press('Enter');await expect(page.locator('.faq').first()).toHaveAttribute('open','');
});
test('form validates and preserves previous steps',async({page})=>{
 await page.goto('/contact');await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.locator('#name')).toHaveAttribute('aria-invalid','true');
 await page.getByLabel('Your name').fill('QA Example');await page.getByLabel('Email address').fill('qa@example.com');await page.getByLabel('Company',{exact:true}).fill('QA Company');
 await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Home Services',{exact:true}).check();await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Web Design',{exact:true}).check();await page.getByRole('button',{name:'Back',exact:false}).click();await expect(page.getByLabel('Home Services',{exact:true})).toBeChecked();await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.getByLabel('Web Design',{exact:true})).toBeChecked();await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('What are you trying to achieve?').fill('Improve the website inquiry experience.');await page.getByLabel('Digital Pathway may use').check();
 await expect(page.getByRole('button',{name:'Send Project Details'})).toBeDisabled();await expect(page.getByRole('heading',{name:/WE HAVE YOUR/})).toHaveCount(0);
});
test('API enforces origin, validation, and missing delivery configuration',async({request})=>{
 const payload={name:'QA',email:'qa@example.com',company:'QA',website:'example.com',businessType:'Home Services',services:['Web Design'],goal:'Improve our website and inquiry path.',timeline:'',consent:true};
 const headers={origin:'http://127.0.0.1:3000'};
 expect((await request.post('/api/inquiries',{data:payload,headers:{origin:'https://wrong.example'}})).status()).toBe(403);
 expect((await request.post('/api/inquiries',{data:{...payload,email:'invalid'},headers})).status()).toBe(400);
 expect((await request.post('/api/inquiries',{data:payload,headers})).status()).toBe(503);
 expect((await request.post('/api/inquiries',{data:{...payload,website_confirm:'bot'},headers})).status()).toBe(400);
});
test('reduced motion retains visible content',async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');await expect(page.locator('h1')).toBeVisible();expect(await page.locator('h1>span').first().evaluate(el=>getComputedStyle(el).animationName)).toBe('none');});
