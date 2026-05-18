import { Link } from 'react-router-dom';

export default function EnergyAccountability() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/services">Services</a> / Energy Accountability & Management</span>
        <h1>Energy <em>Accountability</em> &amp; Management</h1>
        <p>Audits, sub-metering, AMR deployment and load analysis that make every kilowatt-hour traceable — and every cost line defensible.</p>
      </div>
      <div className="mono">PRACTICE / 02</div>
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
        <p style={{"marginBottom":"1.2rem"}}>Energy spend is the second- or third-largest operating cost in most industrial businesses — and the line most opaque to its own management. Energy accountability is the practice of making that spend visible, attributable and managed.</p>
        <p>We deploy metering infrastructure, conduct audits and tariff reviews, and engineer the technical and procedural controls that turn an energy bill from a fixed cost into a managed one.</p>
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
          <li>Energy audits (ISO-aligned)</li>
          <li>Utility accountability systems</li>
          <li>Energy metering infrastructure</li>
          <li>AMR / smart metering deployment</li>
          <li>Load analysis & profiling</li>
          <li>Power quality analysis</li>
          <li>Power factor correction</li>
          <li>Demand optimisation</li>
          <li>Tariff analysis & billing verification</li>
          <li>Solar integration studies</li>
          <li>Energy performance benchmarking</li>
        </ul>

        <div className="benefits">
          <h4>Outcomes</h4>
          <ul>
            <li>Reduced energy waste, quantified</li>
            <li>Accurate utility allocation across cost centres</li>
            <li>Improved energy visibility for management</li>
            <li>Lower operating costs with defensible savings</li>
            <li>Sustainability and reporting compliance</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Ready to scope a <em>Energy Accountability & Management engagement</em>?</h2>
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
