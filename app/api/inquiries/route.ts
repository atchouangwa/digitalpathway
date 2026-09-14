import {NextResponse} from 'next/server';
import {createHash,randomUUID} from 'node:crypto';
import {validateInquiry} from '@/lib/inquiry';
import {deliverInquiry} from '@/lib/delivery';
import {contactEmail} from '@/lib/site';
export const runtime='nodejs';
export const maxDuration=30;
const limits=new Map<string,{count:number;until:number}>();
const reply=(body:unknown,status:number)=>NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function POST(request:Request){
 const origin=request.headers.get('origin');
 if(!origin||origin!==new URL(request.url).origin)return reply({error:'This request could not be verified. Refresh the page and try again.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return reply({error:'Please submit the project form.'},415);
 const now=Date.now();const ip=request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';
 const key=createHash('sha256').update(ip).digest('hex');const prior=limits.get(key);
 if(prior&&prior.until>now&&prior.count>=6)return reply({error:'Please wait a minute before trying again.'},429);
 for(const [k,v] of limits)if(v.until<=now)limits.delete(k);
 if(limits.size>2000)limits.delete(limits.keys().next().value!);
 limits.set(key,{count:prior&&prior.until>now?prior.count+1:1,until:prior&&prior.until>now?prior.until:now+60000});
 let input:unknown;
 try{
  const reader=request.body?.getReader();if(!reader)return reply({error:'The form was empty.'},400);
  let length=0;const chunks:Uint8Array[]=[];
  while(true){const {value,done}=await reader.read();if(done)break;length+=value.byteLength;if(length>16000){await reader.cancel();return reply({error:'Your submission is too long.'},413);}chunks.push(value);}
  input=JSON.parse(Buffer.concat(chunks).toString('utf8'));
 }catch{return reply({error:'We could not read the form. Please try again.'},400);}
 const result=validateInquiry(input);
 if(!result.ok)return reply({error:'Please check the highlighted fields.',errors:result.errors},400);
 const webhook=process.env.PROJECT_WEBHOOK_URL;const resendKey=process.env.RESEND_API_KEY;const from=process.env.INQUIRY_FROM_EMAIL;
 if(!webhook&&!(resendKey&&from))return reply({error:'Online inquiries are temporarily unavailable. Please email '+contactEmail+'. Your details have not been sent.'},503);
 const supplied=request.headers.get('x-idempotency-key');const requestId=supplied&&/^[a-f0-9-]{36}$/i.test(supplied)?supplied:randomUUID();
 try{
  await deliverInquiry(result.data,requestId,{webhook,webhookToken:process.env.PROJECT_WEBHOOK_TOKEN,resendKey,from,to:process.env.INQUIRY_TO_EMAIL||contactEmail});
  return reply({ok:true,requestId},200);
 }catch{
  // Do not log payloads, provider URLs, API credentials, or personal information.
  console.error('inquiry_delivery_failed',{requestId});
  return reply({error:'We could not confirm receipt. Please try again, or email '+contactEmail+'.'},502);
 }
}
