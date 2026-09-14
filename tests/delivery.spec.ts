import {test,expect} from '@playwright/test';
import {deliverInquiry} from '../lib/delivery';
import {validateInquiry,type Inquiry} from '../lib/inquiry';
const data:Inquiry={name:'QA Example',email:'qa@example.com',company:'QA Company',website:'https://example.com',businessType:'Home Services',services:['Web Design'],goal:'Improve the website inquiry experience.',timeline:'',consent:true};
test('webhook receives validated data, authorization and idempotency key',async()=>{
 let called=false;
 const mock:typeof fetch=async(input,init)=>{called=true;expect(String(input)).toBe('https://example.invalid/intake');expect(init?.redirect).toBe('error');expect(init?.headers).toMatchObject({Authorization:'Bearer test-only','Idempotency-Key':'test-id'});expect(JSON.parse(String(init?.body))).toMatchObject({...data,event:'project_inquiry',requestId:'test-id'});return new Response('{}',{status:200});};
 await deliverInquiry(data,'test-id',{webhook:'https://example.invalid/intake',webhookToken:'test-only',to:'qa@example.com'},mock);expect(called).toBe(true);
});
test('Resend gets reply-to and plain text, success requires a provider id',async()=>{
 const config={resendKey:'test-only',from:'Website <qa@example.com>',to:'qa@example.com'};
 const mock:typeof fetch=async(input,init)=>{expect(String(input)).toBe('https://api.resend.com/emails');const body=JSON.parse(String(init?.body));expect(body.reply_to).toBe(data.email);expect(body.text).toContain(data.goal);expect(body.to).toEqual(['qa@example.com']);return new Response('{"id":"test-provider-id"}',{status:200});};
 await deliverInquiry(data,'test-id',config,mock);
 await expect(deliverInquiry(data,'test-id',config,async()=>new Response('{}',{status:200}))).rejects.toThrow('Missing provider acknowledgment');
 await expect(deliverInquiry(data,'test-id',config,async()=>new Response('{}',{status:429}))).rejects.toThrow('Delivery provider rejected');
});
test('invalid configuration and rejected promises do not report success',async()=>{
 await expect(deliverInquiry(data,'test-id',{to:'qa@example.com'},async()=>{throw Error('must not call');})).rejects.toThrow('No delivery adapter');
 await expect(deliverInquiry(data,'test-id',{webhook:'http://example.invalid',to:'qa@example.com'})).rejects.toThrow('HTTPS');
 await expect(deliverInquiry(data,'test-id',{webhook:'https://example.invalid',to:'qa@example.com'},async()=>{throw Error('network failed');})).rejects.toThrow('network failed');
});
test('validation rejects unsafe or malformed inputs and normalizes a website',()=>{
 expect(validateInquiry({...data,website:'example.com'})).toMatchObject({ok:true,data:{website:'https://example.com/'}});
 for(const input of [{...data,email:'bad'},{...data,website:'javascript:alert(1)'},{...data,consent:false},{...data,services:['Unknown']},{...data,goal:'short'},null])expect(validateInquiry(input).ok).toBe(false);
});
