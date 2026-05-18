import { Link } from 'react-router-dom';

export default function MepEngineering() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/services">Services</a> / MEP Design & Engineering</span>
        <h1>MEP Design &amp; <em>Engineering</em></h1>
        <p>Professional mechanical, electrical and plumbing engineering for industrial and commercial infrastructure — drawings, calculations, BOQs and specifications.</p>
      </div>
      <div className="mono">PRACTICE / 04</div>
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
        <p style={{"marginBottom":"1.2rem"}}>MEP engineering is the structural skeleton of any modern building or industrial facility — the systems that determine how power flows, how air moves, how water is delivered, and how everything is safe under fault. We design that skeleton.</p>
        <p>Our MEP work is conducted to professional engineering standards, with documented calculations, single-line diagrams and specifications that survive scrutiny from authorities, contractors and operating teams.</p>
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
          <li>Electrical system design</li>
          <li>Mechanical system design</li>
          <li>Plumbing system design</li>
          <li>Load calculations</li>
          <li>Single-line diagrams</li>
          <li>HVAC design</li>
          <li>Earthing system design</li>
          <li>Lighting design</li>
          <li>Industrial electrical layouts</li>
          <li>Technical drawings &amp; documentation</li>
        </ul>

        <div className="benefits">
          <h4>Outcomes</h4>
          <ul>
            <li>CAD drawings to engineering standard</li>
            <li>Engineering reports & calculation packs</li>
            <li>Technical specifications</li>
            <li>Value-engineered BOQs</li>
            <li>Design calculations defensible at audit</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Ready to scope a <em>MEP Design & Engineering engagement</em>?</h2>
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
