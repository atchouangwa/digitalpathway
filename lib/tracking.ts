export type EventName='start_project_click'|'service_click'|'portfolio_click'|'form_start'|'form_step_complete'|'form_submit'|'email_click'|'phone_click'|'case_study_view';
export function track(event:EventName,details:Record<string,string|number>={}) {
 if(typeof window==='undefined')return;
 const w=window as Window & {dataLayer?:Record<string,unknown>[]};
 w.dataLayer=w.dataLayer||[];
 w.dataLayer.push({event,page_path:window.location.pathname,...details});
}
// Never include personal form values in analytics. Load approved vendor tags via
// the agency's consent manager/GTM configuration; no IDs or pixels are fabricated.
