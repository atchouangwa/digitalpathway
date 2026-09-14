import {test,expect} from '@playwright/test';
async function fill(page:import('@playwright/test').Page){
 await page.goto('http://127.0.0.1:3001/contact?service=info-products');
 await page.getByLabel('Your name').fill('QA Example');await page.getByLabel('Email address').fill('qa@example.com');await page.getByLabel('Company',{exact:true}).fill('QA Company');
 await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.getByLabel('Info Product',{exact:true})).toBeChecked();await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.getByLabel('Info Product Marketing',{exact:true})).toBeChecked();await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('What are you trying to achieve?').fill('Improve the education offer acquisition path.');await page.getByLabel('Digital Pathway may use').check();
}
test('submission success requires an accepted API response',async({page})=>{
 let calls=0;await page.route('**/api/inquiries',async route=>{calls++;expect(route.request().postDataJSON()).toMatchObject({businessType:'Info Product',services:['Info Product Marketing']});await route.fulfill({status:200,contentType:'application/json',body:'{"ok":true,"requestId":"test"}'});});
 await fill(page);await page.getByRole('button',{name:'Send Project Details'}).click();await expect(page.getByRole('heading',{name:/WE HAVE YOUR/})).toBeVisible();expect(calls).toBe(1);
 const events=await page.evaluate(()=>(window as Window&{dataLayer?:{event:string}[]}).dataLayer||[]);expect(events.filter(e=>e.event==='form_submit')).toHaveLength(1);
 expect(JSON.stringify(events)).not.toContain('qa@example.com');
});
test('rejected submission preserves data and allows retry without false analytics',async({page})=>{
 await page.route('**/api/inquiries',r=>r.fulfill({status:502,contentType:'application/json',body:'{"error":"We could not confirm receipt. Please try again."}'}));
 await fill(page);await page.getByRole('button',{name:'Send Project Details'}).click();await expect(page.locator('.form-error[role="alert"]')).toContainText('could not confirm');await expect(page.getByLabel('What are you trying to achieve?')).toHaveValue('Improve the education offer acquisition path.');await expect(page.getByRole('heading',{name:/WE HAVE YOUR/})).toHaveCount(0);await expect(page.getByRole('button',{name:'Send Project Details'})).toBeEnabled();
 const events=await page.evaluate(()=>(window as Window&{dataLayer?:{event:string}[]}).dataLayer||[]);expect(events.filter(e=>e.event==='form_submit')).toHaveLength(0);
});
