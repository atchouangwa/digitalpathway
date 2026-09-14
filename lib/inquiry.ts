export const businessTypes=['Real Estate','Home Services','Info Product','Other'] as const;
export const serviceChoices=['Web Design','SEO','Google Ads','Meta Ads','Info Product Marketing','Multiple Services'] as const;
export type Inquiry={name:string;email:string;company:string;website:string;businessType:string;services:string[];goal:string;timeline:string;consent:boolean;website_confirm?:string};
export type Validation={ok:true;data:Inquiry}|{ok:false;errors:Record<string,string>};
export function validateInquiry(input:unknown):Validation{
 if(!input||typeof input!=='object'||Array.isArray(input))return {ok:false,errors:{form:'Please enter your project details.'}};
 const raw=input as Record<string,unknown>;const errors:Record<string,string>={};
 const read=(key:string,max:number,required=false)=>{const v=typeof raw[key]==='string'?(raw[key] as string).trim():'';if((required&&!v)||v.length>max)errors[key]='Please enter '+key+' (maximum '+max+' characters).';return v;};
 const name=read('name',100,true),email=read('email',180,true),company=read('company',120,true),businessType=read('businessType',40,true),goal=read('goal',3000,true),timeline=read('timeline',120),website_confirm=read('website_confirm',300);
 let website=read('website',250);
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||/[\r\n]/.test(email))errors.email='Please enter a valid email address.';
 if(!businessTypes.includes(businessType as typeof businessTypes[number]))errors.businessType='Choose a business type.';
 const selections=Array.isArray(raw.services)?raw.services.filter((s):s is string=>typeof s==='string'):[];
 if(!selections.length||selections.length>6||selections.some(s=>!serviceChoices.includes(s as typeof serviceChoices[number])))errors.services='Choose at least one service.';
 if(goal.length<10)errors.goal='Tell us a little more about your goal (at least 10 characters).';
 if(website){try{const url=new URL(website.includes('://')?website:'https://'+website);if(!['https:','http:'].includes(url.protocol)||!url.hostname.includes('.'))throw Error();website=url.href;}catch{errors.website='Please enter a valid website address.';}}
 if(raw.consent!==true)errors.consent='Please confirm that we may use these details to respond.';
 if(website_confirm)errors.form='Unable to submit this request.';
 return Object.keys(errors).length?{ok:false,errors}:{ok:true,data:{name,email,company,website,businessType,services:[...new Set(selections)],goal,timeline,consent:true}};
}
export function inquiryText(d:Inquiry){return ['New Digital Pathway project inquiry','','Name: '+d.name,'Email: '+d.email,'Company: '+d.company,'Website: '+(d.website||'Not supplied'),'Business type: '+d.businessType,'Services: '+d.services.join(', '),'Timeline: '+(d.timeline||'Not supplied'),'','Primary goal:',d.goal,'','Consent to respond: confirmed'].join('\n');}
