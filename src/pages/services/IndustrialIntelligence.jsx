import { Link } from 'react-router-dom';

export default function IndustrialIntelligence() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/services">Services</a> / Industrial Systems Intelligence</span>
        <h1>Industrial Systems <em>Intelligence</em></h1>
        <p>Real-time visibility into utilities, equipment behaviour and process inefficiencies — the layer that turns operational guesswork into engineered decisions.</p>
      </div>
      <div className="mono">PRACTICE / 01</div>
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
        <p style={{"marginBottom":"1.2rem"}}>Industrial intelligence is the instrumentation, analytics and visualisation layer that gives industrial leaders defensible answers to operational questions. Without it, decisions are made on intuition, vendor narratives, or post-hoc audits. With it, the plant tells you what is actually happening — kilowatt by kilowatt, hour by hour, machine by machine.</p>
        <p>We design, deploy and operate these systems so that engineering decisions — capacity, retrofit, maintenance, capital — rest on instrumented evidence rather than assumption.</p>
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
          <li>Industrial utility surveillance systems</li>
          <li>Smart monitoring systems</li>
          <li>AI-enabled utility analytics</li>
          <li>Industrial data visualisation</li>
          <li>Production-energy correlation analysis</li>
          <li>Performance dashboards</li>
          <li>Real-time operational monitoring</li>
          <li>Predictive maintenance insights</li>
        </ul>

        <div className="benefits">
          <h4>Outcomes</h4>
          <ul>
            <li>Smarter operational decisions, traceable to data</li>
            <li>Early fault detection and predictive intervention</li>
            <li>Waste reduction across utilities and process</li>
            <li>Production optimisation against measured energy use</li>
            <li>Data-driven accountability across teams</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Ready to scope a <em>Industrial Systems Intelligence engagement</em>?</h2>
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
