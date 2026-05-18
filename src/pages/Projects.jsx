import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / Projects</span>
        <h1>Selected work — <em>defended by numbers.</em></h1>
        <p>Representative engagements across the practice. Client identities are anonymised where commercial agreements require it; outcomes are measured and verified.</p>
      </div>
      <div className="mono">CASE INDEX</div>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">

    
    <div className="stats" style={{"border":"1px solid var(--rule)","padding":"2.5rem","marginBottom":"3rem","background":"var(--bg-elev)"}}>
      <div className="stats__grid">
        <div>
          <div className="stat__num">GHS 1.4M+</div>
          <div className="stat__label">Utility cost recovered</div>
        </div>
        <div>
          <div className="stat__num">61%</div>
          <div className="stat__label">Downtime reduction</div>
        </div>
        <div>
          <div className="stat__num">USD 6M+</div>
          <div className="stat__label">Project value delivered</div>
        </div>
        <div>
          <div className="stat__num">400:1</div>
          <div className="stat__label">Cost avoidance ratio</div>
        </div>
      </div>
    </div>

    <header className="sec-head">
      <div>
        <span className="eyebrow">Case studies</span>
        <h2>Engineering that <em>moved the operating ledger.</em></h2>
      </div>
      <p>A selection of representative engagements — the kind of work where the engineering brief was tied to measurable plant outcomes.</p>
    </header>

    <div className="projects-grid">

      <article className="project">
        <div className="project__meta"><span className="project__sector">Manufacturing · Energy</span><span className="project__year">2024</span></div>
        <h3>Utility surveillance &amp; cost recovery — industrial plant</h3>
        <p>Deployed a sub-metering and analytics layer across a mid-scale manufacturing facility. Production-energy correlation exposed unbilled utility allocations and out-of-spec demand charges.</p>
        <div className="project__outcome">Outcome / <em>GHS 1.4M+ recovered in the first year</em></div>
      </article>

      <article className="project">
        <div className="project__meta"><span className="project__sector">Agro-processing · Reliability</span><span className="project__year">2024</span></div>
        <h3>Downtime root-cause &amp; reliability programme</h3>
        <p>Instrumented a recurring process failure to its electrical signature. Implemented power quality remediation, harmonics correction, and a maintenance regime aligned to load profile.</p>
        <div className="project__outcome">Outcome / <em>61% reduction in unplanned downtime</em></div>
      </article>

      <article className="project">
        <div className="project__meta"><span className="project__sector">Public Sector · Solar EPC</span><span className="project__year">2023</span></div>
        <h3>507 kW institutional solar PV — government facility</h3>
        <p>Engineering, procurement and installation oversight of a grid-tied PV system at a public-sector institution. Design optimised for tropical irradiance, voltage variability and load profile.</p>
        <div className="project__outcome">Outcome / <em>Commissioned to specification, on schedule</em></div>
      </article>

      <article className="project">
        <div className="project__meta"><span className="project__sector">Telecom · Hybrid Power</span><span className="project__year">2023</span></div>
        <h3>Cell-site hybrid power optimisation</h3>
        <p>Reconfigured site power architecture across a portfolio of telecom sites — solar, battery, generator and grid — with remote monitoring and fuel control.</p>
        <div className="project__outcome">Outcome / <em>Material reduction in OpEx per site</em></div>
      </article>

      <article className="project">
        <div className="project__meta"><span className="project__sector">Commercial · MEP</span><span className="project__year">2024</span></div>
        <h3>MEP design — mixed-use commercial development</h3>
        <p>Full mechanical, electrical and plumbing design package: load calculations, single-line diagrams, HVAC, lighting, earthing and lightning protection, with documented specifications.</p>
        <div className="project__outcome">Outcome / <em>Bid-grade documentation, value-engineered BOQ</em></div>
      </article>

      <article className="project">
        <div className="project__meta"><span className="project__sector">Industrial · Power Quality</span><span className="project__year">2024</span></div>
        <h3>Capacitor bank &amp; power factor correction</h3>
        <p>Designed and supervised installation of a capacitor bank assembly to address persistent reactive power penalty and voltage instability across the plant's main switchboard.</p>
        <div className="project__outcome">Outcome / <em>Demand charge corrected, voltage stabilised</em></div>
      </article>

    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Want references for your <em>specific sector</em>?</h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>We share case detail under NDA where the engagement remains commercially sensitive. Reach out and tell us what your team is evaluating.</p>
        <a to="/contact" className="btn btn--primary">Request Case Detail <span className="btn__arrow">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
