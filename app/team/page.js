import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import { teamRoles } from '@/data/site';

export default function Team(){
  const openRoles = teamRoles.filter((role) => role[3] === 'Open role');

  return <>
    <PageHero
      eyebrow="Team"
      title="A founder-led team model with open collaboration roles."
      text="Aurion is being built through a flexible multidisciplinary collaboration model across strategy, product, AI, public health, design, partnerships, and training."
      img="/images/futuristic-healthcare-team-collaboration.png"
    />

    <section className="section">
      <div className="container">
        <SectionHeader
          center
          eyebrow="Team structure"
          title="Open roles for people who want to build real health intelligence work."
        >
          The current team model is honest and early-stage: founder-led, portfolio-focused, and open to collaborators who can contribute gradually to prototypes, research, product design, dashboards, training, and partnership readiness.
        </SectionHeader>

        <div className="team-open-banner">
          <div>
            <div className="eyebrow">Collaboration model</div>
            <h3>Flexible, output-driven, and portfolio-building.</h3>
            <p>Open roles are not presented as full-time staff positions. They are collaboration opportunities for contributors who want to gain experience, build credible portfolio work, and help shape Aurion’s early health-intelligence products.</p>
          </div>
          <div className="open-count"><strong>{openRoles.length}</strong><span>open collaboration roles</span></div>
        </div>

        <div className="grid-3 team-role-grid">
          {teamRoles.map(([name,role,bio,status]) =>
            <div className="card team-card" key={role}>
              <div className="team-card-top">
                <div className="avatar">{status === 'Open role' ? 'OR' : name.split(' ').map(x=>x[0]).slice(0,2).join('')}</div>
                <span className={status === 'Open role' ? 'role-badge open' : 'role-badge'}>{status}</span>
              </div>
              <h3>{name}</h3>
              <p><b>{role}</b></p>
              <p>{bio}</p>
            </div>
          )}
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container split">
        <div className="image-panel"><img src="/images/futuristic-healthcare-team-collaboration.png" alt="Team collaboration" /></div>
        <div>
          <SectionHeader eyebrow="How we collaborate" title="A serious early-stage structure without pretending to be bigger than we are.">
            Aurion can invite collaborators into clear workstreams while staying transparent about its stage: practical building, skills development, international collaboration, prototype improvement, and future pilot readiness.
          </SectionHeader>
          <div className="brand-pills"><span>Flexible</span><span>Output-driven</span><span>Portfolio-focused</span><span>Remote-friendly</span><span>Future opportunity-ready</span></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container pilot-panel">
        <div>
          <div className="eyebrow">For collaborators</div>
          <h2>Open roles are designed around contribution areas, not pressure.</h2>
          <p>Each role can start small: review one page, improve a dashboard idea, write one insight note, test a prototype, prepare one partnership message, or support one visual asset.</p>
        </div>
        <div className="pilot-steps">
          <div>1. Choose a role area</div>
          <div>2. Agree a small practical task</div>
          <div>3. Build portfolio-quality output</div>
          <div>4. Review, improve, and document progress</div>
        </div>
      </div>
    </section>

    <CTA/>
  </>
}
