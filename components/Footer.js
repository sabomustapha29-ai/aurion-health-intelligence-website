import Link from 'next/link';
import { navItems } from '@/data/site';

export default function Footer(){
  const exploreItems = navItems.filter(item => item.href !== '/');
  return <footer className="footer footer-polished"><div className="container">
    <div className="footer-grid footer-grid-polished">
      <div className="footer-brand-block"><img className="footer-logo" src="/brand/aurion-logo-header.png" alt="Aurion"/><p>Aurion Health Intelligence Limited helps health institutions turn data into intelligent insights that support better decisions, optimized outcomes, and healthier communities.</p><div className="footer-pills"><span>AI Strategy</span><span>Health Analytics</span><span>Responsible Innovation</span></div></div>
      <div className="footer-explore-block"><h3>Explore Aurion</h3><div className="footer-link-grid">{exploreItems.map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}</div></div>
      <div className="footer-contact-block"><h3>Contact</h3><span>Nigeria · Africa-focused</span><a href="mailto:contact@aurionhealthintelligence.com">contact@aurionhealthintelligence.com</a><span>Phone available on request</span><Link className="footer-mini-cta" href="/contact">Start a conversation →</Link></div>
    </div>
    <p className="footer-bottom">© {new Date().getFullYear()} Aurion Health Intelligence Limited. Intelligence. Driving Health. Impacting Lives.</p>
  </div></footer>
}
