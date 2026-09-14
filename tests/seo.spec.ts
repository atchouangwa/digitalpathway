import {test,expect} from '@playwright/test';

test('indexable pages have unique search metadata and valid structured data', async({page,request})=>{
  test.setTimeout(120000);
  const xml=await (await request.get('/sitemap.xml')).text();
  const urls=[...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
  expect(urls).toHaveLength(16);
  expect(new Set(urls).size).toBe(urls.length);
  const titles=new Set<string>();
  const descriptions=new Set<string>();
  for(const url of urls){
    const path=new URL(url).pathname;
    const response=await page.goto(path);
    expect(response?.status(),path).toBe(200);
    const title=await page.title();
    const description=await page.locator('meta[name="description"]').getAttribute('content');
    expect(titles.has(title),path+' duplicate title').toBe(false);
    expect(descriptions.has(description!),path+' duplicate description').toBe(false);
    titles.add(title);descriptions.add(description!);
    expect(title).toContain('Digital Pathway');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',url);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content',description!);
    await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute('content',description!);
    expect(await page.locator('meta[name="robots"]').getAttribute('content')).not.toContain('noindex');
    await expect(page.locator('main h1')).toHaveCount(1);
    const schemas=await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed=schemas.map(s=>JSON.parse(s));
    expect(parsed.some(s=>s['@type']==='Organization'),path).toBe(true);
    if(path!=='/')expect(parsed.some(s=>s['@type']==='BreadcrumbList'),path).toBe(true);
    if(path.startsWith('/services/'))expect(parsed.some(s=>s['@type']==='Service'&&s.url===url),path).toBe(true);
    // The visible page remains useful without expanding an accordion.
    await expect(page.locator('main h2').first()).toBeVisible();
  }
});
