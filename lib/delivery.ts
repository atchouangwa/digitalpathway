import {inquiryText,type Inquiry} from './inquiry';
export type DeliveryConfig={webhook?:string;webhookToken?:string;resendKey?:string;from?:string;to:string};
export async function deliverInquiry(data:Inquiry,requestId:string,config:DeliveryConfig,fetcher:typeof fetch=fetch){
 let response:Response;
 if(config.webhook){
  const url=new URL(config.webhook);if(url.protocol!=='https:')throw new Error('Webhook must use HTTPS');
  response=await fetcher(url,{method:'POST',redirect:'error',headers:{'Content-Type':'application/json','Idempotency-Key':requestId,...(config.webhookToken?{Authorization:'Bearer '+config.webhookToken}:{})},body:JSON.stringify({event:'project_inquiry',requestId,submittedAt:new Date().toISOString(),source:'digitalpathway',...data}),signal:AbortSignal.timeout(12000)});
 }else{
  if(!config.resendKey||!config.from)throw new Error('No delivery adapter configured');
  response=await fetcher('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+config.resendKey,'Content-Type':'application/json','Idempotency-Key':requestId},body:JSON.stringify({from:config.from,to:[config.to],reply_to:data.email,subject:'Project inquiry: '+data.company.replace(/[\r\n]/g,' '),text:inquiryText(data)}),signal:AbortSignal.timeout(12000)});
 }
 if(!response.ok)throw new Error('Delivery provider rejected request');
 if(!config.webhook){const body=await response.json();if(typeof body.id!=='string')throw new Error('Missing provider acknowledgment');}
}
