import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function Industries() {
  useSEO({
    title: 'Industries We Serve',
    description: 'PKNB Consult serves industries that require reliable operations and cost control: manufacturing, agro-processing, commercial facilities, hospitals, hotels, telecom, and public sectors.',
    keywords: 'manufacturing energy audit, agro-processing steam optimization, commercial building sub-metering, telecom hybrid power, hospital critical backup'
  });

  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / Industries</span>
        <h1>Where we work — and <em>why we're there.</em></h1>
        <p>The common thread across every sector we serve: high energy intensity, high reliability stakes, and tight operating margins. That is where engineering rigour pays back.</p>
      </div>
      <div className="mono">9 VERTICALS</div>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"1rem"}} className="industries-detail-grid">

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 01</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Manufacturing</h3>
        <p style={{"marginBottom":"1rem"}}>Production floors where every minute of downtime and every kilowatt-hour of waste compounds. We instrument utility flows, correlate them to output, and engineer the recovery.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>Production-energy correlation</li>
          <li>Compressed air system audits</li>
          <li>Reliability assessments</li>
          <li>Sub-metering deployment</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 02</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Agro-processing</h3>
        <p style={{"marginBottom":"1rem"}}>Steam, drying, refrigeration and packaging — energy-dense processes operated under volatile fuel and grid conditions. We engineer for both energy cost and process stability.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>Steam &amp; thermal energy audits</li>
          <li>Refrigeration efficiency</li>
          <li>Hybrid power configuration</li>
          <li>Process utility optimisation</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 03</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Commercial Facilities</h3>
        <p style={{"marginBottom":"1rem"}}>Offices, retail and mixed-use buildings where HVAC, lighting and tenant metering dominate operating cost. We make consumption traceable and recoverable.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>HVAC optimisation</li>
          <li>Tenant sub-metering &amp; AMR</li>
          <li>Lighting retrofit</li>
          <li>Building energy audits</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 04</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Energy &amp; Utilities</h3>
        <p style={{"marginBottom":"1rem"}}>Generation, distribution and renewable assets — where measurement integrity, power quality and loss identification are the practice itself.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>Power quality &amp; harmonics</li>
          <li>Loss reduction studies</li>
          <li>Solar EPC &amp; integration</li>
          <li>Smart metering deployment</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 05</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Hospitals &amp; Healthcare</h3>
        <p style={{"marginBottom":"1rem"}}>Where critical-load reliability and redundancy are non-negotiable. We engineer power infrastructure that holds under fault — and document it for audit.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>Critical power systems</li>
          <li>Generator sync &amp; redundancy</li>
          <li>UPS &amp; backup architecture</li>
          <li>Earthing &amp; surge protection</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 06</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Hotels &amp; Hospitality</h3>
        <p style={{"marginBottom":"1rem"}}>HVAC, hot water and lighting drive the bulk of property energy spend. We engineer the savings that protect margin without compromising guest experience.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>HVAC retrofits</li>
          <li>Hot water system audits</li>
          <li>Solar &amp; hybrid integration</li>
          <li>Energy performance benchmarks</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 07</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Telecommunications</h3>
        <p style={{"marginBottom":"1rem"}}>Cell sites and data infrastructure where hybrid power, fuel cost and uptime drive operating economics. We design and supervise the energy backbone.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>Site power systems</li>
          <li>Hybrid &amp; solar configuration</li>
          <li>Fuel monitoring</li>
          <li>Remote monitoring architecture</li>
        </ul>
      </article>

      <article style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Sector / 08</span>
        <h3 style={{"margin":"1rem 0 0.8rem"}}>Government &amp; Public Sector</h3>
        <p style={{"marginBottom":"1rem"}}>Public infrastructure projects where engineering integrity and procurement discipline must withstand scrutiny. We provide the technical backbone.</p>
        <ul className="svc-detail__list" style={{"gridTemplateColumns":"1fr"}}>
          <li>Public facility energy audits</li>
          <li>Solar PV for institutional use</li>
          <li>Infrastructure design</li>
          <li>Project management support</li>
        </ul>
      </article>

    </div>
  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Your sector isn't listed? <em>That's fine.</em></h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>The underlying engineering — power, energy, utility, reliability — applies across most industrial and commercial environments. Talk to us about your operation.</p>
        <a to="/contact" className="btn btn--primary">Talk to a Specialist <span className="btn__arrow">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
