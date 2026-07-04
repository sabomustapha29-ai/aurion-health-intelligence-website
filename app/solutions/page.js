import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import { products } from '@/data/site';

export default function Solutions(){
  return <>
    <PageHero eyebrow="Solutions" title="Our products. One mission. Intelligence for better health." text="Aurion’s product concepts cover dashboards, surveillance, prediction, digital care, and command-centre coordination across the healthcare ecosystem." img="/images/aurion-product-suite.png"/>
    <section className="section"><div className="container"><SectionHeader center eyebrow="Product suite" title="A connected health intelligence ecosystem.">The product suite separates consulting services from future product concepts, making Aurion look more structured and scalable.</SectionHeader><div className="product-grid-v4">{products.map(([n,s,d])=><div className="product-card-v4" key={n}><div className="top"><h3>{n}</h3><p>{s}</p></div><div className="body">{d}</div></div>)}</div></div></section>
    <section className="section alt"><div className="container media-strip"><div className="media-feature"><img src="/images/futuristic-control-center-analytics.png" alt="Product intelligence command centre"/><div className="media-caption"><h3>Product concepts that move from insight to action.</h3><p>Aurion Insight, Predict, Sentinel, Care, and Command Centre share the same visual intelligence foundation.</p></div></div><div className="media-grid"><div className="media-card"><img src="/images/futuristic-healthcare-data-interface-globe.png" alt="Global health intelligence"/><h3>Africa-centered intelligence</h3></div><div className="media-card"><img src="/images/futuristic-healthcare-digital-ward.png" alt="Digital health care"/><h3>Digital care support</h3></div></div></div></section>
    <CTA/>
  </>
}
