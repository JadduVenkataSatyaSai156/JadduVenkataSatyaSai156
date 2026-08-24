import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Search, ShieldCheck, Clock3, FileCheck2, HelpCircle, Building2, ChevronRight, AlertTriangle, Languages, Smartphone, Eye, CheckCircle2 } from 'lucide-react';
import './styles.css';

const painPoints = [
  ['Deadline panic', 'Slowdowns, timeouts and scheduled outages near annual filing peaks make compliance feel risky.'],
  ['Confusing identity', 'Registered User vs Business User, DSC association, PAN/email migration and OTP failures create repeated login loops.'],
  ['Form uncertainty', 'Prefill data can appear blank or incorrect, uploads fail, PDFs do not generate, and users cannot tell what went wrong.'],
  ['Support opacity', 'Tickets feel disconnected from the exact filing step; users lack live status, escalation and plain-language recovery paths.'],
  ['Trust & privacy', 'Sensitive director/KYC information and payment records need visible consent, masking, audit trails and breach-safe defaults.'],
  ['Too expert-first', 'Founders and investors often need public company information or incorporation help without knowing legal form names.']
];

const journeys = [
  {title:'Start a company', steps:['Answer plain-language prompts','Reserve name with conflict preview','Upload once, reuse everywhere','Track approvals on a timeline']},
  {title:'File compliance', steps:['Deadline dashboard by company','Guided form checklist','Autosave + validation before pay','SRN, payment and DSC status in one place']},
  {title:'Verify a company', steps:['Search by name/CIN/director','See risk signals and filings','Download public docs','Save watchlist alerts']},
  {title:'Resolve an issue', steps:['Describe problem in your words','Attach current screen context','Get fix steps or ticket ETA','Escalate before due-date penalty']}
];

function App(){
 const [tab,setTab]=useState('founder');
 return <main>
  <section className="hero">
    <nav><div className="brand"><Building2/> MCA Setu</div><div className="navlinks"><a href="#research">Research</a><a href="#prototype">Prototype</a><a href="#flow">Flow</a></div></nav>
    <div className="heroGrid">
      <div><p className="eyebrow">Hackathon concept • consumer-side redesign</p><h1>Make corporate compliance feel like a guided service, not a portal maze.</h1><p className="lede">MCA Setu reimagines the Ministry of Corporate Affairs experience around user intent: start, file, verify, resolve. It keeps legal rigor, but adds plain-language journeys, live system confidence, smart forms and transparent support.</p><div className="actions"><a className="primary" href="#prototype">Explore prototype <ChevronRight size={18}/></a><a className="secondary" href="#research">See problem map</a></div></div>
      <div className="statusCard"><div className="live"><span></span> System confidence: Normal</div><h2>Your Companies</h2><div className="company"><b>Acme Foods Pvt Ltd</b><small>2 filings due in 18 days</small><progress value="62" max="100"/></div><div className="company"><b>Nava LLP</b><small>All clear until Oct 30</small><progress value="100" max="100"/></div><button>Continue Form AOC-4</button></div>
    </div>
  </section>

  <section id="research" className="section"><p className="eyebrow">What users struggle with</p><h2>Problem map from stakeholder reports, practitioner posts and common helpdesk patterns</h2><div className="cards">{painPoints.map(([t,d])=><article className="card" key={t}><AlertTriangle/><h3>{t}</h3><p>{d}</p></article>)}</div></section>

  <section id="prototype" className="section prototype"><div><p className="eyebrow">Design principle</p><h2>One search bar. Four clear jobs.</h2><p>Instead of making users understand MCA service taxonomy first, the home screen asks what they want to do and translates that intent into the correct forms, rules, fees and deadlines.</p><div className="search"><Search/><span>“I need to add a director before annual filing”</span></div></div><div className="jobs"><button onClick={()=>setTab('founder')} className={tab==='founder'?'active':''}>Founder</button><button onClick={()=>setTab('professional')} className={tab==='professional'?'active':''}>CA/CS</button><button onClick={()=>setTab('investor')} className={tab==='investor'?'active':''}>Investor</button><button onClick={()=>setTab('director')} className={tab==='director'?'active':''}>Director</button><Persona tab={tab}/></div></section>

  <section id="flow" className="section"><p className="eyebrow">Suggested IA & flow</p><h2>Consumer-side journeys</h2><div className="journeys">{journeys.map(j=><article className="journey" key={j.title}><h3>{j.title}</h3>{j.steps.map((s,i)=><p key={s}><b>{i+1}</b>{s}</p>)}</article>)}</div></section>

  <section className="section fixes"><h2>Experience upgrades that elevate existing pain points</h2><ul><li><Clock3/> Autosave, queue-aware submissions and deadline-safe retry windows.</li><li><FileCheck2/> Inline validation, human-readable errors and “what changed since last draft”.</li><li><ShieldCheck/> Consent-based document access, masked PII and user-visible audit logs.</li><li><HelpCircle/> Contextual support tickets tied to SRN, browser, payment and form step.</li><li><Languages/> Hindi + regional language explainers without changing legal form language.</li><li><Smartphone/> Mobile-first status tracking and OTP/DSC readiness checks.</li><li><Eye/> Public company profiles with filings, charges and director changes summarized.</li></ul></section>
 </main>
}
function Persona({tab}){const data={founder:['Company setup wizard','Name availability preview','Incorporation timeline'],professional:['Bulk client dashboard','DSC health check','Deadline risk queue'],investor:['Company trust snapshot','Filing history','Watchlist alerts'],director:['DIN/KYC center','Role mapping','Consent & audit log']}[tab];return <div className="persona">{data.map(x=><p key={x}><CheckCircle2/> {x}</p>)}</div>}
createRoot(document.getElementById('root')).render(<App/>);
