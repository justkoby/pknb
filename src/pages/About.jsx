import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / About</span>
        <h1>An engineering practice — built for <em>industrial reality.</em></h1>
        <p>PKNB Consult is an independent consultancy specialising in industrial intelligence, energy accountability, infrastructure reliability and sustainable engineering across African industry.</p>
      </div>
      <div className="mono">EST. ACCRA · GHANA</div>
    </div>
  </div>
</header>


<section className="section">
  <div className="wrap">
    <div className="split">
      <div>
        <span className="eyebrow">Our story</span>
        <h2 style={{"marginTop":"1rem"}}>Engineering, made <em>accountable.</em></h2>
      </div>
      <div>
        <p style={{"marginBottom":"1.2rem"}}>
          PKNB Consult was founded on a conviction that most industrial inefficiency is not a
          technology problem — it is a <span className="serif-italic">visibility</span> problem.
          Plants are designed without instrumentation, operated without data, and audited only
          after the cost has already been absorbed.
        </p>
        <p style={{"marginBottom":"1.2rem"}}>
          We exist to invert that order. We instrument first. We let the data tell us where
          the loss is. Then we engineer — designs, retrofits, controls, capability — that
          turn measured inefficiency into measured improvement.
        </p>
        <p>
          Our work spans manufacturing plants, agro-processing factories, commercial
          facilities, utilities and infrastructure projects. The mandate is consistent:
          deliver engineering that defends itself in the operating ledger.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <div className="split">
      <div style={{"border":"1px solid var(--rule)","padding":"2.5rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Vision</span>
        <h3 style={{"marginTop":"1rem","fontSize":"1.8rem","lineHeight":"1.2"}}>
          To become Africa's leading industrial <em className="serif-italic">intelligence</em> and sustainable engineering company.
        </h3>
      </div>
      <div style={{"border":"1px solid var(--rule)","padding":"2.5rem","background":"var(--bg-elev)"}}>
        <span className="eyebrow">Mission</span>
        <h3 style={{"marginTop":"1rem","fontSize":"1.8rem","lineHeight":"1.2"}}>
          To help industries optimise operations, account for energy, and achieve <em className="serif-italic">sustainable</em> growth through data-driven engineering.
        </h3>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Core values</span>
        <h2>The principles that <em>govern the practice.</em></h2>
      </div>
      <p>These aren't statements on a wall. They are the test we apply to every engagement, every recommendation, every deliverable.</p>
    </header>

    <div className="values-grid">
      <div className="value"><h5>Innovation</h5><p>We deploy what works — including the new tools, when they earn their place.</p></div>
      <div className="value"><h5>Accountability</h5><p>If we measure it, we own it. Outcomes are defensible or they aren't outcomes.</p></div>
      <div className="value"><h5>Sustainability</h5><p>Every recommendation is tested against energy, cost, and lifecycle reality.</p></div>
      <div className="value"><h5>Reliability</h5><p>Plants run on uptime. Our work makes that uptime more predictable, not less.</p></div>
      <div className="value"><h5>Operational Excellence</h5><p>We engineer for the floor — not for the slide deck.</p></div>
      <div className="value"><h5>Technical Integrity</h5><p>Independent practice. No equipment kickbacks. The recommendation serves the plant.</p></div>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Leadership</span>
        <h2>Practice led by a <em>chartered engineer</em> and PMP.</h2>
      </div>
      <p>PKNB Consult is led by a chartered engineering professional with over two decades of practice across power generation, industrial systems, telecommunications and renewable energy.</p>
    </header>

    <div className="lead-card">
      <div className="lead-card__avatar">PA</div>
      <div>
        <h3>Principal Advisor</h3>
        <span className="role">Ing. Papa Kusi Nimoh-Brema, SPE-GHIE, PMP</span>
        <p>
          A professional engineer with over twenty years of expertise spanning power generation, industrial energy systems, telecommunications, renewable energy, utility optimisation and engineering management. Certified Project Management Professional (PMP) and chartered member of SPE-GHIE, with an MSc in Energy and Sustainable Management.
        </p>
        <p>
          The Principal Advisor leads engagements personally, drawing on a strategic engineering partnership with deep roots in Ghana's industrial sector to deliver project capability that matches the scale of client mandates.
        </p>
        <h4 className="mono" style={{"marginTop":"1.5rem","color":"var(--gold)","letterSpacing":"0.14em"}}>Areas of expertise</h4>
        <ul>
          <li>Industrial utility intelligence</li>
          <li>Energy accountability systems</li>
          <li>Power systems engineering</li>
          <li>Sustainable energy solutions</li>
          <li>EPC project management</li>
          <li>Operational optimisation</li>
          <li>Infrastructure reliability</li>
          <li>Renewable integration</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Credentials</span>
        <h2>Chartered. Certified. <em>Accountable.</em></h2>
      </div>
      <p>Our work is conducted to professional engineering standards and project management discipline.</p>
    </header>
    <div className="industries-grid">
      <div className="industry"><span className="industry__name">PMP</span><span className="industry__note">Project Management Institute</span></div>
      <div className="industry"><span className="industry__name">SPE-GHIE</span><span className="industry__note">Society of Petroleum Engineers · Ghana Institution of Engineers</span></div>
      <div className="industry"><span className="industry__name">MSc</span><span className="industry__note">Energy &amp; Sustainable Mgmt — KNUST</span></div>
    </div>
  </div>
</section>


<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Bring us a hard <em>operational problem.</em></h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>We respond best where the gap between what a plant is supposed to do and what it actually does is the widest.</p>
        <a to="/contact" className="btn btn--primary">Talk to an Engineer <span className="btn__arrow">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
