import { Link } from 'react-router-dom';

export default function EpcSolutions() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/services">Services</a> / EPC Solutions</span>
        <h1>EPC <em>Solutions</em></h1>
        <p>Engineering, procurement and construction support for industrial, utility and energy projects — from design through commissioning.</p>
      </div>
      <div className="mono">PRACTICE / 05</div>
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
        <p style={{"marginBottom":"1.2rem"}}>EPC is where engineering meets the construction site. Where vendor schedules, equipment specifications, installation realities and commissioning standards all have to converge — on time, on budget, to specification.</p>
        <p>We provide EPC support across the project lifecycle: engineering design, procurement specification, supervision of installation, testing, commissioning and handover. Independent practice means we represent the client's interest at every interface.</p>
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
          <li>Project engineering</li>
          <li>Equipment procurement support</li>
          <li>Installation supervision</li>
          <li>Testing and commissioning</li>
          <li>Project management</li>
          <li>Generator synchronisation projects</li>
          <li>Solar EPC support</li>
          <li>Transformer installation &amp; commissioning</li>
          <li>Relay installation &amp; testing</li>
          <li>Industrial electrical infrastructure deployment</li>
        </ul>

        <div className="benefits">
          <h4>Outcomes</h4>
          <ul>
            <li>Engineering integrity at every project stage</li>
            <li>Procurement that serves the client, not the supplier</li>
            <li>Installation supervised to specification</li>
            <li>Commissioning documented for handover</li>
            <li>Project delivered on schedule and budget</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Ready to scope a <em>EPC Solutions engagement</em>?</h2>
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
