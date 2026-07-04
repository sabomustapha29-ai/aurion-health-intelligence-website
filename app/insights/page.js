import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import { insights } from '@/data/site';

export default function Insights(){
  return <>
    <PageHero eyebrow="Insights" title="Thinking for smarter healthcare transformation." text="Aurion insights explore AI adoption, public health intelligence, analytics, dashboards, governance, and health-system innovation." img="/images/responsible-ai-governance.png"/>
    <section className="section"><div className="container"><SectionHeader center eyebrow="Perspective notes" title="Insight-led themes for healthcare leaders.">This section is structured like a consulting thought-leadership hub. Full articles can be added as Aurion develops its research and portfolio.</SectionHeader><div className="insight-grid">{insights.map(([title,cat,desc])=><div className="insight-card" key={title}><small>{cat}</small><h3>{title}</h3><p>{desc}</p><p><b>Coming soon:</b> practical article and perspective note.</p></div>)}</div></div></section>
    <section className="section alt"><div className="container split"><div className="image-panel"><img src="/images/futuristic-healthcare-data-interface-globe.png" alt="Research and health data intelligence"/></div><div><SectionHeader eyebrow="Editorial direction" title="Research themes that support trust and authority.">Aurion can use these themes to publish simple, practical articles that show expertise without claiming large-scale client results too early.</SectionHeader></div></div></section>
    <CTA/>
  </>
}
