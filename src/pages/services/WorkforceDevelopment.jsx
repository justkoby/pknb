import { Link } from 'react-router-dom';

export default function WorkforceDevelopment() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/services">Services</a> / Workforce Capability Development</span>
        <h1>Workforce <em>Development</em></h1>
        <p>Technical training and capability programmes for industrial personnel — energy management, safety, utility accountability and maintenance competency.</p>
      </div>
      <div className="mono">PRACTICE / 06</div>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div className="svc-detail">
      <aside>
        <span className="eyebrow">Overview</span>
        <h2 style={{"marginTop":"1rem","fontSize":"clamp(1.6rem, 2.4vw, 2rem)"}}>What this practice <em className="serif-italic">actually does.</em></h2>
      </aside>
      <div>
        <p style={{"marginBottom":"1.2rem"}}>The most expensive engineering investment in the world fails if the team operating it lacks the capability to run it well. Workforce development closes that gap — building the technical understanding, operational discipline and safety culture that make engineering investments pay back.</p>
        <p>Our programmes are designed for industrial reality: practical, hands-on, anchored in the equipment and processes the team actually operates. Delivered on-site, in cohorts, with assessment.</p>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="svc-detail">
      <aside>
        <span className="eyebrow">Services</span>
        <h2 style={{"marginTop":"1rem","fontSize":"clamp(1.6rem, 2.4vw, 2rem)"}}>What we <em className="serif-italic">deliver.</em></h2>
      </aside>
      <div>
        <ul className="svc-detail__list">
          <li>Technical training programmes</li>
          <li>Energy management training</li>
          <li>Safety and operational awareness</li>
          <li>Utility accountability training</li>
          <li>Engineering workshops</li>
          <li>Industrial systems training</li>
          <li>Maintenance competency development</li>
          <li>Sustainability awareness programmes</li>
        </ul>

        <div className="benefits">
          <h4>Outcomes</h4>
          <ul>
            <li>Improved workforce performance, measured</li>
            <li>Better operational culture across shifts</li>
            <li>Stronger in-house technical capability</li>
            <li>Reduced operational errors and incidents</li>
            <li>Engineering investments protected by capability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Ready to scope a <em>Workforce Capability Development engagement</em>?</h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>Tell us what's happening on the floor or in the spec. We'll respond with a scoped technical conversation — and a proposed path forward.</p>
        <a to="/contact" className="btn btn--primary">Request a Consultation <span className="btn__arrow">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
