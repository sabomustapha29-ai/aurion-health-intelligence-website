import PageHero from '@/components/PageHero';
import { contactFocusAreas, inquiryChecklist } from '@/data/site';

export default function Contact(){
  return <>
    <PageHero eyebrow="Contact Aurion" title="Start a focused conversation." text="Share a partnership idea, dashboard need, training request, pilot opportunity, or open collaboration interest." img="/images/futuristic-healthcare-data-interface-globe.png"/>

    <section className="section contact-polish-section">
      <div className="container contact-layout">
        <div className="contact-left">
          <div className="contact-intro card">
            <div className="eyebrow">Contact details</div>
            <h3>Aurion Health Intelligence Limited</h3>
            <p className="lead">Healthcare AI, data analytics, public health intelligence, dashboards, training, and partnership conversations.</p>
            <div className="contact-detail-grid">
              <div><span>Email</span><b>contact@aurionhealthintelligence.com</b></div>
              <div><span>Focus location</span><b>Nigeria · Africa-focused</b></div>
              <div><span>Phone</span><b>Available on request</b></div>
              <div><span>Response areas</span><b>Consulting · Pilots · Open roles</b></div>
            </div>
            <div className="contact-actions">
              <a className="btn" href="mailto:contact@aurionhealthintelligence.com?subject=Aurion%20Health%20Intelligence%20Inquiry">Email Aurion</a>
              <a className="btn secondary" href="/team">View Open Roles</a>
            </div>
          </div>

          <div className="image-panel contact-image-panel"><img src="/images/futuristic-healthcare-digital-ward.png" alt="Aurion health technology contact visual" /></div>
        </div>

        <div className="contact-right">
          <div className="card contact-focus-card">
            <div className="eyebrow">What to contact us about</div>
            <div className="contact-focus-grid">
              {contactFocusAreas.map(([title,text])=><div className="contact-focus-item" key={title}><h4>{title}</h4><p>{text}</p></div>)}
            </div>
          </div>

          <form className="card contact-form polished-form" action="mailto:contact@aurionhealthintelligence.com" method="post" encType="text/plain">
            <div>
              <div className="eyebrow">Inquiry form</div>
              <h3>Prepare a clear message</h3>
              <p>Use this form to organize your inquiry. It will open your email app with the message details.</p>
            </div>
            <div className="form-row"><input name="Full name" className="input" placeholder="Full name"/><input name="Organization" className="input" placeholder="Organization"/></div>
            <input name="Email" className="input" placeholder="Email address"/>
            <select name="Inquiry type" className="input" defaultValue="">
              <option value="" disabled>What are you interested in?</option>
              <option>Consulting or AI strategy</option>
              <option>Dashboard or analytics project</option>
              <option>Public health intelligence</option>
              <option>Training or capacity building</option>
              <option>Partnership or pilot opportunity</option>
              <option>Open collaboration role</option>
            </select>
            <textarea name="Message" className="textarea" placeholder="Tell us what you want to build, explore, improve, or discuss."/>
            <button type="submit" className="btn">Send Inquiry by Email</button>
          </form>
        </div>
      </div>
    </section>

    <section className="section alt">
      <div className="container contact-checklist-panel">
        <div>
          <div className="eyebrow">Before you write</div>
          <h2>A strong inquiry helps Aurion respond faster.</h2>
          <p>A clear inquiry helps us understand the problem, the data or workflow involved, and the most useful next step for collaboration.</p>
        </div>
        <div className="checklist-grid">
          {inquiryChecklist.map((item,index)=><div key={item} className="checklist-item"><span>0{index+1}</span>{item}</div>)}
        </div>
      </div>
    </section>
  </>
}
