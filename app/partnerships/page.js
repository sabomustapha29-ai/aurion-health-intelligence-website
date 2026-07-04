import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import { clientGroups } from '@/data/site';

export default function Partnerships(){return <>
<PageHero eyebrow="Partnerships" title="Building health intelligence through collaboration." text="Aurion welcomes collaboration with institutions and partners interested in AI, digital health, public health intelligence, research, pilots, and capacity building." img="/images/africa-health-intelligence-map.png"/>
<section className="section"><div className="container"><SectionHeader center eyebrow="Who we work with" title="Potential clients and partners.">The website now clearly shows who Aurion supports, which is important for a consulting firm.</SectionHeader><div className="client-grid">{clientGroups.map(p=><div className="client-pill" key={p}>{p}</div>)}</div></div></section>
<section className="section alt"><div className="container pilot-panel"><div><div className="eyebrow">Pilot collaboration</div><h2>Start with a focused proof of concept.</h2><p>Aurion can collaborate around dashboards, training, research, prototypes, public health intelligence, and portfolio-building innovation projects.</p></div><div className="pilot-steps"><div>Problem discovery</div><div>Dashboard/prototype design</div><div>Testing and documentation</div><div>Scale-up or sponsor conversation</div></div></div></section>
<CTA/>
</>}
