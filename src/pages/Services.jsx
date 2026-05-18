import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / Services</span>
        <h1>Six practices that <em>plug into</em> one operating thesis.</h1>
        <p>Each service is independently deliverable — and stronger when combined. The thread running through all of them: instrument first, then engineer the improvement.</p>
      </div>
      <div className="mono">SERVICE INDEX · 06</div>
    </div>
  </div>
</header>

<section className="section section--tight">
  <div className="wrap">
    <div className="services-grid">
      <article className="svc-card">
        <span className="svc-card__num">/ 01</span>
        <h3>Industrial Systems <em>Intelligence</em></h3>
        <p>Real-time visibility into utilities, equipment behaviour and production-energy correlation. Smart monitoring, AI-enabled analytics, performance dashboards.</p>
        <a className="svc-card__link" href="services/industrial-intelligence.html">Read more <span>→</span></a>
      </article>
      <article className="svc-card">
        <span className="svc-card__num">/ 02</span>
        <h3>Energy <em>Accountability</em></h3>
        <p>Audits, sub-metering, AMR deployment, load and tariff analysis, power factor and demand optimisation. Every kilowatt-hour traceable.</p>
        <a className="svc-card__link" href="services/energy-accountability.html">Read more <span>→</span></a>
      </article>
      <article className="svc-card">
        <span className="svc-card__num">/ 03</span>
        <h3>Operational <em>Efficiency</em></h3>
        <p>Process optimisation, compressed air, HVAC, plant reliability, downtime root-cause analysis and maintenance planning support.</p>
        <a className="svc-card__link" href="services/operational-efficiency.html">Read more <span>→</span></a>
      </article>
      <article className="svc-card">
        <span className="svc-card__num">/ 04</span>
        <h3>MEP Design &amp; <em>Engineering</em></h3>
        <p>Mechanical, electrical and plumbing design — load calculations, single-line diagrams, HVAC, earthing, lighting and technical documentation.</p>
        <a className="svc-card__link" href="services/mep-engineering.html">Read more <span>→</span></a>
      </article>
      <article className="svc-card">
        <span className="svc-card__num">/ 05</span>
        <h3>EPC <em>Solutions</em></h3>
        <p>Project engineering, procurement support, installation supervision, testing and commissioning. Generator sync, solar EPC, transformers and relays.</p>
        <a className="svc-card__link" href="services/epc-solutions.html">Read more <span>→</span></a>
      </article>
      <article className="svc-card">
        <span className="svc-card__num">/ 06</span>
        <h3>Workforce <em>Development</em></h3>
        <p>Technical training for industrial personnel — energy management, safety, utility accountability and maintenance competency programmes.</p>
        <a className="svc-card__link" href="services/workforce-development.html">Read more <span>→</span></a>
      </article>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Specialised capabilities</span>
        <h2>Where the engineering gets <em>specific.</em></h2>
      </div>
      <p>Within the six practices, we maintain deep technical capability in the disciplines that most directly affect industrial reliability and cost.</p>
    </header>

    <div className="split">
      <div>
        <h4 style={{"fontFamily":"var(--font-display)","fontSize":"1.4rem","marginBottom":"1rem"}}>Power Systems</h4>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr 1fr"}}>
          <li>Power quality &amp; harmonic analysis</li>
          <li>Power factor correction</li>
          <li>Transformer testing</li>
          <li>Relay testing &amp; coordination</li>
          <li>Circuit breaker testing</li>
          <li>Generator synchronisation</li>
          <li>Electrical troubleshooting</li>
          <li>Earthing &amp; lightning protection</li>
        </ul>

        <h4 style={{"fontFamily":"var(--font-display)","fontSize":"1.4rem","margin":"2.5rem 0 1rem"}}>Utility Intelligence</h4>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr 1fr"}}>
          <li>Smart metering</li>
          <li>Utility analytics</li>
          <li>Billing verification</li>
          <li>Loss identification</li>
          <li>Performance dashboards</li>
          <li>Production-energy correlation</li>
        </ul>
      </div>

      <div>
        <h4 style={{"fontFamily":"var(--font-display)","fontSize":"1.4rem","marginBottom":"1rem"}}>Renewable Energy</h4>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr 1fr"}}>
          <li>Solar feasibility studies</li>
          <li>Solar PV design &amp; installation</li>
          <li>Hybrid power systems</li>
          <li>Energy storage solutions</li>
          <li>Solar monitoring systems</li>
          <li>O&amp;M frameworks</li>
        </ul>

        <h4 style={{"fontFamily":"var(--font-display)","fontSize":"1.4rem","margin":"2.5rem 0 1rem"}}>HVAC &amp; Cooling</h4>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr 1fr"}}>
          <li>HVAC installation</li>
          <li>HVAC servicing &amp; O&amp;M</li>
          <li>Ventilation optimisation</li>
          <li>Cooling load analysis</li>
          <li>Refrigeration energy audits</li>
          <li>Indoor air quality</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Not sure which practice fits your <em>problem</em>?</h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>Describe what's happening on your floor. We'll tell you whether it's a measurement problem, an engineering problem, or a capability problem — and what to do about it.</p>
        <a to="/contact" className="btn btn--primary">Request a Technical Consultation <span className="btn__arrow">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
