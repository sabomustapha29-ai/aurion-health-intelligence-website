import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import { services, products, teamRoles, impactAreas, clientGroups, governancePrinciples, insights, exploreCards } from '@/data/site';

export default function Home(){
  return <>
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <div className="eyebrow">Healthcare intelligence for better outcomes</div>
          <h1>Better decisions. Stronger health systems. Healthier communities.</h1>
          <p>Aurion Health Intelligence Limited helps health institutions, public health teams, and partners transform fragmented health data into actionable insight using AI, analytics, dashboards, and responsible digital innovation.</p>
          <div className="hero-actions">
            <Link href="/solutions" className="btn">Explore Our Solutions</Link>
            <Link href="/health-command-centre" className="btn secondary">View Health Command Centre</Link>
          </div>
          <div className="hero-copy-lockup"><span>AI Strategy</span><span>Health Analytics</span><span>Public Health Intelligence</span><span>Responsible Innovation</span></div>
        </div>
        <div className="hero-video-wrap">
          <video autoPlay muted loop playsInline poster="/images/aurion-health-intelligence-hero-poster.png">
            <source src="/videos/aurion-health-intelligence-hero-video.webm" type="video/webm" />
            <source src="/videos/aurion-health-intelligence-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-glass"><div><strong>AI</strong><span>Responsible adoption</span></div><div><strong>BI</strong><span>Dashboards and analytics</span></div><div><strong>EOC</strong><span>Public health response</span></div></div>
        </div>
      </div>
    </section>

    <div className="container executive-strip">
      <div className="executive-tile primary"><span>Positioning</span><strong>Small, serious, pilot-ready</strong><p>African health intelligence consulting with a flagship public-health command prototype.</p></div>
      <div className="executive-tile"><span>Focus</span><strong>Data → action</strong></div>
      <div className="executive-tile"><span>Method</span><strong>Consult + build</strong></div>
      <div className="executive-tile"><span>Standard</span><strong>Responsible AI</strong></div>
    </div>

    <section className="section">
      <div className="container split">
        <div>
          <SectionHeader eyebrow="The problem" title="Healthcare teams do not need more disconnected reports. They need intelligence they can act on.">Many institutions still work with fragmented data, manual reporting, weak surveillance visibility, and limited AI capacity. Aurion exists to connect data, workflows, people, and decisions.</SectionHeader>
          <div className="grid-2">
            {['Fragmented health data', 'Delayed decision-making', 'Limited operational visibility', 'Weak analytics capacity'].map(v=><div className="card" key={v}><div className="icon">•</div><h3>{v}</h3><p>A core challenge Aurion helps health institutions simplify through analytics, dashboards, advisory, and training.</p></div>)}
          </div>
        </div>
        <div className="image-panel"><img src="/images/futuristic-healthcare-data-interface-globe.png" alt="Healthcare data intelligence interface" /></div>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <SectionHeader center eyebrow="Impact areas" title="What Aurion helps health organizations achieve.">AI, analytics, and dashboards are used as practical tools for faster decisions, stronger operations, and measurable health-system value.</SectionHeader>
        <div className="outcome-grid">
          {impactAreas.map(([title, text],i)=><div className="outcome-card" key={title}><div className="num">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeader center eyebrow="Services" title="Consulting services for smarter healthcare systems.">From AI strategy to dashboards, training, and public health intelligence, Aurion focuses on practical transformation that institutions can understand and use.</SectionHeader>
        <div className="grid-3">{services.map(([t,d],i)=><div className="card" key={t}><div className="icon">{i+1}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
      </div>
    </section>

    <section className="section deep-section">
      <div className="container split">
        <div>
          <div className="eyebrow">Flagship prototype</div>
          <h2>Aurion Health Command Centre</h2>
          <p>A visual intelligence platform concept for surveillance, hospital readiness, medicine stock, emergency response, communications, and situation reporting.</p>
          <div className="command-brief">
            <div className="brief-panel"><div className="brief-row"><span>Surveillance</span><b>Signals + hotspots</b></div><div className="brief-row"><span>Operations</span><b>Beds + stock + staff</b></div><div className="brief-row"><span>Response</span><b>EOC + actions</b></div></div>
            <div className="brief-panel"><div className="brief-row"><span>Reports</span><b>SITREP</b></div><div className="brief-row"><span>Comms</span><b>Email + WhatsApp/SMS</b></div><div className="brief-row"><span>Decision support</span><b>Human reviewed</b></div></div>
          </div>
          <Link className="btn" href="/health-command-centre" style={{marginTop:28}}>Explore the Platform</Link>
        </div>
        <div className="visual-card"><img src="/images/futuristic-control-center-analytics.png" alt="Aurion command dashboard analytics visual"/></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Product suite" title="Products with one mission: health intelligence that supports action.">Aurion’s solution concepts are presented as a clear product family, supported by the flagship command-centre prototype.</SectionHeader>
        <div className="product-grid-v4">{products.map(([n,s,d])=><div className="product-card-v4" key={n}><div className="top"><h3>{n}</h3><p>{s}</p></div><div className="body">{d}</div></div>)}</div>
        <img src="/images/aurion-product-suite.png" alt="Aurion product suite" style={{borderRadius:34,marginTop:36,boxShadow:'var(--shadow)'}}/>
      </div>
    </section>

    <section className="section alt">
      <div className="container governance-card">
        <div className="copy">
          <SectionHeader eyebrow="Responsible AI & data governance" title="Built for sensitive health environments.">Because healthcare data is sensitive, Aurion’s approach emphasizes privacy, human oversight, transparent decision support, security, and auditability.</SectionHeader>
          <div className="governance-list">{governancePrinciples.map(v=><span key={v}>✓ {v}</span>)}</div>
        </div>
        <div className="visual"><img src="/images/responsible-ai-governance.png" alt="Responsible AI governance" /></div>
      </div>
    </section>

    <section className="section">
      <div className="container split">
        <div>
          <SectionHeader eyebrow="Who we serve" title="Built for public health, healthcare delivery, research, and innovation partners.">Aurion supports institutions and partners that need clearer data, better visibility, practical AI adoption, and stronger health-system decision support.</SectionHeader>
          <div className="client-grid">{clientGroups.map(group=><div className="client-pill" key={group}>{group}</div>)}</div>
        </div>
        <div className="image-panel"><img src="/images/africa-health-intelligence-map.png" alt="Africa health intelligence map" /></div>
      </div>
    </section>

    <section className="section alt">
      <div className="container">
        <SectionHeader center eyebrow="Visual intelligence" title="Professional health-tech visuals across the website.">Aurion uses data interfaces, team collaboration visuals, command-centre analytics, and digital health imagery to communicate intelligence clearly.</SectionHeader>
        <div className="homepage-gallery">
          <img src="/images/futuristic-healthcare-data-interface-globe.png" alt="Healthcare data interface globe" />
          <div className="gallery-stack"><img src="/images/futuristic-healthcare-team-collaboration.png" alt="Healthcare team collaboration"/><img src="/images/futuristic-healthcare-digital-ward.png" alt="Digital ward health technology"/></div>
        </div>
      </div>
    </section>

    <section className="section brand-showcase">
      <div className="container split">
        <div>
          <SectionHeader eyebrow="Team & collaboration model" title="A multidisciplinary structure for building credible health intelligence solutions.">Aurion is being shaped around leadership, product, AI, healthcare, partnerships, research, and training. Open roles can be filled gradually as the portfolio grows.</SectionHeader>
          <div className="brand-pills"><span>Strategy</span><span>Product</span><span>AI/Data</span><span>Health Innovation</span><span>Partnerships</span></div>
        </div>
        <div className="image-panel"><img src="/images/futuristic-healthcare-team-collaboration.png" alt="Aurion team collaboration" /></div>
      </div>
      <div className="container team-mini">
        {teamRoles.slice(0,3).map(([name,role,bio,status])=><div className="team-mini-card" key={role}><div className="team-card-top"><div className="avatar">{status === 'Open role' ? 'OR' : name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><span className={status === 'Open role' ? 'role-badge open' : 'role-badge'}>{status}</span></div><h3>{name}</h3><p><b>{role}</b></p><p>{bio}</p></div>)}
      </div>
      <div style={{textAlign:'center',marginTop:30}}><Link className="btn" href="/team">View Full Team Model</Link></div>
    </section>

    <section className="section alt">
      <div className="container">
        <div className="video-showcase">
          <video autoPlay muted loop playsInline poster="/images/aurion-health-intelligence-hero-poster.png">
            <source src="/videos/aurion-health-intelligence-hero-video.webm" type="video/webm" />
            <source src="/videos/aurion-health-intelligence-hero-video.mp4" type="video/mp4" />
          </video>
          <div className="overlay"><div><h2>From healthcare data to decision-ready intelligence.</h2><p>A visual story of how health data, people, systems, and responsible technology can work together for better decisions.</p></div></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeader center eyebrow="Insights" title="Thought leadership themes that make Aurion look credible.">The Insights section shows where Aurion can publish future notes, explainers, research, and portfolio articles.</SectionHeader>
        <div className="insight-grid">{insights.slice(0,3).map(([title,cat,desc])=><div className="insight-card" key={title}><small>{cat}</small><h3>{title}</h3><p>{desc}</p></div>)}</div>
        <div style={{textAlign:'center',marginTop:30}}><Link className="btn secondary" href="/insights">View Insight Themes</Link></div>
      </div>
    </section>

    <section className="section">
      <div className="container pilot-panel">
        <div><div className="eyebrow">Pilot opportunities</div><h2>Early-stage, honest, and ready for portfolio-building pilots.</h2><p>Aurion is positioned as a small but serious health intelligence company with prototype-ready concepts for demonstrations, collaborations, research, and sponsor conversations.</p></div>
        <div className="pilot-steps"><div>1. Define the health-system problem</div><div>2. Design the workflow and data model</div><div>3. Build a dashboard/prototype</div><div>4. Test, document, and improve</div></div>
      </div>
    </section>

    <section className="section alt explore-section">
      <div className="container">
        <SectionHeader center eyebrow="Explore Aurion" title="Choose the next step that matches your interest.">Move quickly to the area that matters most: solutions, the command-centre prototype, open collaboration roles, or partnership conversations.</SectionHeader>
        <div className="explore-grid">
          {exploreCards.map(([title,text,href,cta])=><Link className="explore-card" href={href} key={title}><span>{cta}</span><h3>{title}</h3><p>{text}</p><b>Continue →</b></Link>)}
        </div>
      </div>
    </section>

    <CTA />
  </>
}
