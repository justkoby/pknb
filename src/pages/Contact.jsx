import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / Contact</span>
        <h1>Start an <em>engineering conversation.</em></h1>
        <p>Tell us about the plant, the facility or the project. We'll respond with a scoped technical conversation — not a sales pitch.</p>
      </div>
      <div className="mono">ACCRA · GHANA</div>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div className="contact-grid">

      
      <aside className="contact-block">
        <div className="contact-item">
          <span className="label">Office</span>
          <span className="value">Accra, Greater Accra</span>
          <span className="mono" style={{"fontSize":"0.78rem","letterSpacing":"0.08em","textTransform":"none","color":"var(--ink-dim)"}}>Ghana — by appointment</span>
        </div>
        <div className="contact-item">
          <span className="label">Email</span>
          <a className="value" href="mailto:hello@pknbconsult.com">hello@pknbconsult.com</a>
        </div>
        <div className="contact-item">
          <span className="label">Telephone</span>
          <a className="value" href="tel:+233241307209">+233 24 130 7209</a>
        </div>
        <div className="contact-item">
          <span className="label">WhatsApp</span>
          <a className="value" href="https://wa.me/233241307209" target="_blank">Chat with us</a>
        </div>
        <div className="contact-item">
          <span className="label">LinkedIn</span>
          <a className="value" href="#">linkedin.com/company/pknb-consult</a>
        </div>
        <div className="contact-item">
          <span className="label">Response time</span>
          <span className="value">Within <em className="serif-italic">one business day</em></span>
        </div>
      </aside>

      
      <form style={{"border":"1px solid var(--rule)","padding":"clamp(1.8rem,3vw,2.5rem)","background":"var(--bg-elev)"}} onsubmit="event.preventDefault(); alert('Thank you — your enquiry has been received. We will respond within one business day.');">
        <span className="eyebrow">Enquiry form</span>
        <h3 style={{"margin":"1rem 0 1.8rem","fontSize":"1.6rem"}}>Tell us about the <em className="serif-italic">opportunity.</em></h3>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input id="name" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="company">Company / Organisation</label>
            <input id="company" type="text" required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="sector">Sector</label>
            <select id="sector">
              <option>Manufacturing</option>
              <option>Agro-processing</option>
              <option>Commercial / Real Estate</option>
              <option>Energy &amp; Utilities</option>
              <option>Healthcare</option>
              <option>Hospitality</option>
              <option>Telecommunications</option>
              <option>Government / Public Sector</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="service">Service of interest</label>
            <select id="service">
              <option>Energy assessment / audit</option>
              <option>Industrial intelligence / metering</option>
              <option>Operational efficiency review</option>
              <option>MEP design</option>
              <option>EPC / project execution</option>
              <option>Power quality / capacitor banks</option>
              <option>Solar / renewable integration</option>
              <option>Workforce training</option>
              <option>Other — describe below</option>
            </select>
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="message">Describe the opportunity</label>
          <textarea id="message" placeholder="What is happening on the floor? What outcome would make this engagement a success?" required></textarea>
        </div>

        <button type="submit" className="btn btn--primary" style={{"width":"100%","justifyContent":"center"}}>Send Enquiry <span className="btn__arrow">→</span></button>
        <p className="mono" style={{"marginTop":"1rem","fontSize":"0.68rem","color":"var(--ink-mute)"}}>We treat enquiries as confidential. No mailing list, no follow-up unsolicited.</p>
      </form>

    </div>
  </div>
</section>


<section className="section section--tight">
  <div className="wrap">
    <div className="services-grid" style={{"gridTemplateColumns":"repeat(3,1fr)"}}>
      <div className="svc-card">
        <span className="svc-card__num">/ A</span>
        <h3>Book an Energy <em>Assessment</em></h3>
        <p>A scoped on-site review of your facility's energy and utility performance, with a written summary of findings.</p>
        <a className="svc-card__link" href="#" onclick="event.preventDefault(); document.getElementById('service').value='Energy assessment / audit'; document.getElementById('name').focus();">Start the request <span>→</span></a>
      </div>
      <div className="svc-card">
        <span className="svc-card__num">/ B</span>
        <h3>Request a Technical <em>Consultation</em></h3>
        <p>A focused engineering conversation to scope a problem, opportunity or project — no obligation, no resale agenda.</p>
        <a className="svc-card__link" href="#" onclick="event.preventDefault(); document.getElementById('name').focus();">Start the request <span>→</span></a>
      </div>
      <div className="svc-card">
        <span className="svc-card__num">/ C</span>
        <h3>Schedule a Plant <em>Performance Review</em></h3>
        <p>A multi-day instrumented review of operations, utilities and reliability. Recommended where existing data is thin.</p>
        <a className="svc-card__link" href="#" onclick="event.preventDefault(); document.getElementById('service').value='Operational efficiency review'; document.getElementById('name').focus();">Start the request <span>→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
