import { Link } from 'react-router-dom';
import Counter from '../components/Counter';
import useSEO from '../hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Industrial Intelligence & Sustainable Performance',
    description: 'PKNB Consult is a premium engineering and energy consultancy based in Accra, Ghana. We specialize in off-grid solar packages, energy accountability audits, operational efficiency, and MEP engineering across Africa.',
    keywords: 'engineering consultancy, energy consultancy, energy audits, off-grid solar, industrial backup, solar calculator, MEP engineering, Accra, Ghana, Africa, PKNB Consult'
  });

  return (
    <>
      <header className="hero">
  
  <video className="hero__video" autoPlay muted loop playsInline>
    <source src="https://res.cloudinary.com/justkoby/video/upload/v1778940380/Minimal_black_and_white_archit_fqfzcl.mp4" type="video/mp4" />
  </video>

  <div className="wrap">


    <div className="hero__grid">
      <div>
        <span className="eyebrow reveal reveal--1">Engineering Consultancy · Accra, Ghana</span>
        <h1 className="hero__title reveal reveal--2">
          Industrial<br />intelligence.<br /><em>Sustainable performance.</em>
        </h1>
        <p className="hero__lead reveal reveal--3">
          We help industries see what their plants are actually doing — then engineer the
          operational, energy, and infrastructure improvements that lower cost, reduce
          downtime, and unlock sustainable growth.
        </p>
        <div className="hero__cta-row reveal reveal--4">
          <Link to="/contact" className="btn btn--primary">Book an Energy Assessment <span className="btn__arrow">→</span></Link>
          <Link to="/services" className="btn btn--ghost">Explore Services</Link>
        </div>
      </div>


    </div>
  </div>
</header>


<section className="stats">
  <div className="wrap">
    <div className="stats__grid">
      <div>
        <Counter target="20" suffix="+" />
        <div className="stat__label">Years of practice</div>
      </div>
      <div>
        <Counter target="9" />
        <div className="stat__label">Industry verticals served</div>
      </div>
      <div>
        <Counter target="61" suffix="%" />
        <div className="stat__label">Downtime reduction (case)</div>
      </div>
      <div>
        <Counter target="400" suffix=":1" />
        <div className="stat__label">Cost avoidance ratio</div>
      </div>
    </div>
  </div>
</section>



<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Capabilities</span>
        <h2>Six practices. <em>One operating thesis.</em></h2>
      </div>
      <p>
        We pair deep engineering with industrial data to turn opaque operations
        into instrumented, accountable, optimised systems. Each practice plugs
        into a larger picture of plant performance.
      </p>
    </header>

    <div className="services-grid">
      <article className="svc-card">
        <span className="svc-card__num">/ 01</span>
        <h3>Industrial Systems <em>Intelligence</em></h3>
        <p>Monitoring, analytics and AI-enabled visibility into utilities, equipment behaviour and process inefficiencies.</p>
        <Link className="svc-card__link" to="/services/industrial-intelligence">Read more <span>→</span></Link>
      </article>

      <article className="svc-card">
        <span className="svc-card__num">/ 02</span>
        <h3>Energy <em>Accountability</em></h3>
        <p>Audits, sub-metering, AMR deployment and load analysis to make every kilowatt-hour traceable and defensible.</p>
        <Link className="svc-card__link" to="/services/energy-accountability">Read more <span>→</span></Link>
      </article>

      <article className="svc-card">
        <span className="svc-card__num">/ 03</span>
        <h3>Operational <em>Efficiency</em></h3>
        <p>Process, utility and reliability optimisation that reduces downtime, losses and avoidable maintenance.</p>
        <Link className="svc-card__link" to="/services/operational-efficiency">Read more <span>→</span></Link>
      </article>

      <article className="svc-card">
        <span className="svc-card__num">/ 04</span>
        <h3>MEP Design &amp; <em>Engineering</em></h3>
        <p>Mechanical, electrical and plumbing design for industrial and commercial infrastructure — drawings, BOQs and specifications.</p>
        <Link className="svc-card__link" to="/services/mep-engineering">Read more <span>→</span></Link>
      </article>

      <article className="svc-card">
        <span className="svc-card__num">/ 05</span>
        <h3>EPC <em>Solutions</em></h3>
        <p>Engineering, procurement and construction support — generator synchronisation, solar EPC, transformer and relay works.</p>
        <Link className="svc-card__link" to="/services/epc-solutions">Read more <span>→</span></Link>
      </article>

      <article className="svc-card">
        <span className="svc-card__num">/ 06</span>
        <h3>Workforce <em>Development</em></h3>
        <p>Technical training for industrial personnel — energy management, safety, utility accountability and maintenance competency.</p>
        <Link className="svc-card__link" to="/services/workforce-development">Read more <span>→</span></Link>
      </article>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Why PKNB</span>
        <h2>Engineering with an <em>operational mandate.</em></h2>
      </div>
      <p>
        We don't deliver reports that sit on shelves. Every engagement is engineered
        around measurable outcomes — kWh saved, hours of uptime restored, faults
        averted, capital protected.
      </p>
    </header>

    <div className="split">
      <div className="pillars">
        <div className="pillar">
          <span className="pillar__num">01</span>
          <div>
            <h4>Instrumented before opinionated</h4>
            <p>We measure first. Decisions follow from data — not assumptions, not vendor preferences.</p>
          </div>
        </div>
        <div className="pillar">
          <span className="pillar__num">02</span>
          <div>
            <h4>Built for African industrial reality</h4>
            <p>Voltage instability, tropical duty cycles, fuel volatility and grid constraints are baked into how we design.</p>
          </div>
        </div>
        <div className="pillar">
          <span className="pillar__num">03</span>
          <div>
            <h4>Engineering integrity, no resale conflicts</h4>
            <p>Independent practice means our recommendations serve plant performance — not equipment margins.</p>
          </div>
        </div>
        <div className="pillar">
          <span className="pillar__num">04</span>
          <div>
            <h4>Outcomes that defend themselves</h4>
            <p>Verified impact: utility cost recovered, downtime reduced, capital projects delivered, plant capability retained.</p>
          </div>
        </div>
      </div>

      
      <div style={{"border":"1px solid var(--rule)","padding":"2rem","background":"var(--bg-elev)","minHeight":"420px","position":"relative","overflow":"hidden"}}>
        <span className="eyebrow">Live framework</span>
        <h3 style={{"margin":"1rem 0 1.5rem","fontSize":"1.5rem"}}>The PKNB <em className="serif-italic">Performance Loop</em></h3>

        <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{"width":"100%","height":"auto"}}>
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#c9a35a" />
            </marker>
          </defs>
          <g fill="none" stroke="#c9a35a" strokeWidth="1">
            <rect x="20" y="20" width="120" height="50" />
            <rect x="260" y="20" width="120" height="50" />
            <rect x="260" y="210" width="120" height="50" />
            <rect x="20" y="210" width="120" height="50" />
          </g>

          <g fill="#ebe6d8" fontFamily="Inter Tight, sans-serif" fontSize="11" textAnchor="middle">
            <text x="80" y="50">Measure</text>
            <text x="320" y="50">Diagnose</text>
            <text x="320" y="240">Optimise</text>
            <text x="80" y="240">Verify</text>
          </g>
          <g fill="#9a9387" fontFamily="JetBrains Mono, monospace" fontSize="8" textAnchor="middle" letterSpacing="1">
            <text x="80" y="63">01</text>
            <text x="320" y="63">02</text>
            <text x="320" y="253">03</text>
            <text x="80" y="253">04</text>
          </g>

          <g stroke="#c9a35a" strokeWidth="1" fill="none" markerEnd="url(#arr)">
            <line x1="140" y1="45" x2="255" y2="45" />
            <line x1="320" y1="70" x2="320" y2="205" />
            <line x1="260" y1="235" x2="145" y2="235" />
            <line x1="80" y1="210" x2="80" y2="75" />
          </g>

          <circle cx="200" cy="140" r="36" fill="none" stroke="#c9a35a" strokeDasharray="2 4" />
          <text x="200" y="138" fill="#c9a35a" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="13" textAnchor="middle">data</text>
          <text x="200" y="153" fill="#c9a35a" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="13" textAnchor="middle">first</text>
        </svg>

        <p className="mono" style={{"marginTop":"1.5rem","fontSize":"0.7rem"}}>Continuous improvement, by design.</p>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <header className="sec-head">
      <div>
        <span className="eyebrow">Industries</span>
        <h2>Built for plants that <em>can't afford guesswork.</em></h2>
      </div>
      <p>
        From food processing lines and agro-processing factories to commercial buildings and
        utility infrastructure — we work where reliability and energy cost actually move the
        P&amp;L.
      </p>
    </header>

    <div className="industries-grid">
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="13" width="6" height="14"/><rect x="13" y="7" width="6" height="20"/><rect x="23" y="17" width="6" height="10"/></svg>
        <span className="industry__name">Manufacturing</span>
        <span className="industry__note">Process · Utility · Reliability</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 27 V12 L16 5 L27 12 V27 Z"/><path d="M11 27 V18 H21 V27"/></svg>
        <span className="industry__name">Agro-processing</span>
        <span className="industry__note">Steam · Refrigeration · Drying</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="4" y="6" width="24" height="22"/><line x1="4" y1="13" x2="28" y2="13"/><line x1="4" y1="20" x2="28" y2="20"/><line x1="11" y1="6" x2="11" y2="28"/><line x1="21" y1="6" x2="21" y2="28"/></svg>
        <span className="industry__name">Commercial</span>
        <span className="industry__note">HVAC · Lighting · Metering</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M16 4 L4 18 H13 L11 28 L28 13 H19 L21 4 Z"/></svg>
        <span className="industry__name">Energy &amp; Utilities</span>
        <span className="industry__note">Grid · Solar · Power Quality</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 27 V14 L16 6 L26 14 V27"/><rect x="13" y="18" width="6" height="9"/><circle cx="16" cy="12" r="1.2" fill="currentColor"/></svg>
        <span className="industry__name">Hospitals</span>
        <span className="industry__note">Critical Power · Redundancy</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="5" y="9" width="22" height="18"/><line x1="5" y1="15" x2="27" y2="15"/><line x1="10" y1="9" x2="10" y2="5"/><line x1="22" y1="9" x2="22" y2="5"/></svg>
        <span className="industry__name">Hotels</span>
        <span className="industry__note">HVAC · Hot Water · Lighting</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M16 4 L16 28 M8 28 L24 28 M11 12 L21 12 M9 18 L23 18"/></svg>
        <span className="industry__name">Telecom</span>
        <span className="industry__note">Site Power · Hybrid Systems</span>
      </div>
      <div className="industry">
        <svg className="industry__icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="4" y="6" width="24" height="20"/><circle cx="16" cy="16" r="6"/><line x1="10" y1="6" x2="10" y2="2"/><line x1="22" y1="6" x2="22" y2="2"/></svg>
        <span className="industry__name">Government</span>
        <span className="industry__note">Public Infrastructure · Audits</span>
      </div>
    </div>
  </div>
</section>


<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Let's find what your plant is <em>actually costing you.</em></h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>Most facilities are leaking 8–20% of energy spend through invisible inefficiencies. A focused assessment is the cheapest insurance you can buy.</p>
        <Link to="/contact" className="btn btn--primary">Schedule a Plant Review <span className="btn__arrow">→</span></Link>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
