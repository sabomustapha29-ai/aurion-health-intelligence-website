import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import { services, impactAreas } from '@/data/site';

export default function Services(){
  return <>
    <PageHero eyebrow="Services" title="AI and data consulting services for healthcare transformation." text="Aurion supports health organizations through strategy, analytics, public health intelligence, operations optimization, training, and innovation support." img="/images/futuristic-healthcare-digital-ward.png"/>
    <section className="section"><div className="container"><SectionHeader center eyebrow="Service architecture" title="Six service pillars for practical transformation.">Services are written as consulting capabilities, while the Solutions page presents product concepts and prototypes.</SectionHeader><div className="grid-3">{services.map(([t,d],i)=><div className="card" key={t}><div className="icon">{i+1}</div><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <section className="section alt"><div className="container"><SectionHeader center eyebrow="Outcomes" title="Service delivery should create visible institutional value.">Aurion’s services focus on practical outputs that can be reviewed, demonstrated, and improved.</SectionHeader><div className="outcome-grid">{impactAreas.map(([title,text],i)=><div className="outcome-card" key={title}><div className="num">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="section"><div className="container split"><div className="image-panel"><img src="/images/futuristic-healthcare-team-collaboration.png" alt="Service delivery collaboration" /></div><div><SectionHeader eyebrow="Delivery style" title="Simple, professional, and measurable.">We design services around clear outcomes: understand the problem, design a practical workflow, build a prototype, train users, and improve based on feedback.</SectionHeader></div></div></section>
    <CTA/>
  </>
}
