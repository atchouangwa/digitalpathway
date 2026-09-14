import {ImageResponse} from 'next/og';
export const runtime='nodejs';
export const alt='Digital Pathway. Get found. Get trusted. Get chosen.';
export const size={width:1200,height:630};
export const contentType='image/png';
export default function Image(){return new ImageResponse(<div style={{background:'#050505',color:'#ffffff',width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'56px 64px',fontFamily:'sans-serif'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:20}}><span>digital pathway ↗</span><span style={{fontSize:14,color:'#a8a8a8'}}>REAL ESTATE + HOME SERVICE MARKETING</span></div><div style={{display:'flex',flexDirection:'column',fontSize:88,lineHeight:1,letterSpacing:-5}}><span>GET FOUND.</span><span style={{color:'#a8a8a8'}}>GET TRUSTED.</span><span>GET CHOSEN.</span></div><div style={{display:'flex',borderTop:'1px solid #303030',paddingTop:24,fontSize:16,color:'#a8a8a8'}}>Web Design / SEO / Google Ads / Meta Ads</div></div>,size);}
