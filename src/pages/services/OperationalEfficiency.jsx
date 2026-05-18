import { Link } from 'react-router-dom';

export default function OperationalEfficiency() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/services">Services</a> / Operational Efficiency Optimisation</span>
        <h1>Operational <em>Efficiency</em></h1>
        <p>Engineering-driven operational improvement strategies designed to maximise productivity, minimise losses and improve plant reliability.</p>
      </div>
      <div className="mono">PRACTICE / 03</div>
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
        <p style={{"marginBottom":"1.2rem"}}>Most plants run within a band of performance dictated by habit rather than design. Operational efficiency work is the systematic effort to shift that band — through process tuning, utility optimisation, asset reliability and the operational disciplines that hold the gains.</p>
        <p>We approach efficiency as an engineering discipline first and a management discipline second. We measure, we diagnose, we engineer the change, and we instrument the result so it can be verified.</p>
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
          <li>Process optimisation</li>
          <li>Utility optimisation</li>
          <li>Compressed air system analysis</li>
          <li>HVAC optimisation</li>
          <li>Plant reliability assessment</li>
          <li>Downtime analysis & root cause</li>
          <li>Asset performance optimisation</li>
          <li>Maintenance planning support</li>
          <li>Infrastructure efficiency audits</li>
        </ul>

        <div className="benefits">
          <h4>Outcomes</h4>
          <ul>
            <li>Reduced unplanned downtime</li>
            <li>Improved overall productivity</li>
            <li>Lower operational losses</li>
            <li>Increased equipment lifespan</li>
            <li>Improved process stability</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Ready to scope a <em>Operational Efficiency Optimisation engagement</em>?</h2>
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
