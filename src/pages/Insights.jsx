import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

export default function Insights() {
  useSEO({
    title: 'Journal & Industrial Insights',
    description: 'Read the latest technical insights and operational engineering analyses from PKNB Consult on power factor penalty correction, sub-metering ROI, and hybrid cell-site power.',
    keywords: 'power factor analysis, sub-metering ROI, telecom hybrid energy, compressed air energy leak, voltage instability GH'
  });

  return (
    <>
      <header className="page-head">
  <div className="wrap">
    <div className="page-head__inner">
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / Insights</span>
        <h1>Notes from the <em>plant floor.</em></h1>
        <p>Industry analysis on industrial efficiency, energy accountability, power quality, smart factories and the engineering decisions that compound across operating periods.</p>
      </div>
      <div className="mono">JOURNAL</div>
    </div>
  </div>
</header>

<section className="section">
  <div className="wrap">

    
    <article style={{"border":"1px solid var(--rule)","padding":"clamp(2rem,4vw,3rem)","background":"var(--bg-elev)","marginBottom":"3rem","display":"grid","gridTemplateColumns":"1fr 1.5fr","gap":"3rem","alignItems":"center"}} className="featured-insight">
      <div>
        <span className="eyebrow">Featured analysis</span>
        <h2 style={{"margin":"1rem 0 1rem","fontSize":"clamp(1.6rem, 3vw, 2.4rem)"}}>The hidden cost of <em>opaque utility</em> in African manufacturing.</h2>
        <p style={{"marginBottom":"1.5rem"}}>Most plants are leaking 8–20% of energy spend through allocations, billing irregularities and unmonitored idle loads. A primer on what sub-metering actually buys you.</p>
        <a href="#" className="btn btn--ghost">Read analysis <span className="btn__arrow">→</span></a>
      </div>
      <div>
        <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style={{"width":"100%","height":"auto"}}>
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#c9a35a" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="#c9a35a" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <g stroke="#2a2c28" strokeWidth="0.5">
            <line x1="40" y1="40" x2="380" y2="40"/>
            <line x1="40" y1="100" x2="380" y2="100"/>
            <line x1="40" y1="160" x2="380" y2="160"/>
            <line x1="40" y1="220" x2="380" y2="220"/>
          </g>
          <path d="M40,210 L80,180 L120,190 L160,140 L200,150 L240,100 L280,120 L320,70 L360,90" fill="none" stroke="#c9a35a" strokeWidth="1.5"/>
          <path d="M40,210 L80,180 L120,190 L160,140 L200,150 L240,100 L280,120 L320,70 L360,90 L360,220 L40,220 Z" fill="url(#g1)"/>
          <g fill="#c9a35a">
            <circle cx="80" cy="180" r="3"/>
            <circle cx="160" cy="140" r="3"/>
            <circle cx="240" cy="100" r="3"/>
            <circle cx="320" cy="70" r="3"/>
          </g>
          <g fill="#9a9387" font-family="JetBrains Mono" font-size="8" letter-spacing="1">
            <text x="40" y="245">Q1</text>
            <text x="120" y="245">Q2</text>
            <text x="200" y="245">Q3</text>
            <text x="280" y="245">Q4</text>
          </g>
          <text x="365" y="68" fill="#c9a35a" font-family="Fraunces" font-style={{}} font-size="11" text-anchor="end">recovered</text>
        </svg>
      </div>
    </article>

    <header className="sec-head" style={{"marginBottom":"2rem"}}>
      <div>
        <span className="eyebrow">Recent</span>
        <h2>From the <em>journal.</em></h2>
      </div>
      <p>Practical engineering writing for plant operators, facility leaders and energy managers.</p>
    </header>

    <div className="insights-grid">

      <article className="insight">
        <span className="insight__date">2026 · 04 · 22</span>
        <h3>Why your power factor penalty isn't really about <em className="serif-italic">power factor.</em></h3>
        <p>The most common misdiagnosis we see — and what the demand-charge data actually tells you about plant behaviour.</p>
        <a href="insights/why-power-factor-penalty.html" className="insight__read">Read · 6 min →</a>
      </article>

      <article className="insight">
        <span className="insight__date">2026 · 03 · 15</span>
        <h3>Sub-metering ROI: the <em className="serif-italic">three rules</em> that make it actually pay back.</h3>
        <p>Most metering deployments underperform because the engineering brief was wrong. Three principles that change the maths.</p>
        <a href="insights/sub-metering-roi.html" className="insight__read">Read · 8 min →</a>
      </article>

      <article className="insight">
        <span className="insight__date">2026 · 02 · 28</span>
        <h3>Hybrid power for telecom: where the <em className="serif-italic">diesel still wins.</em></h3>
        <p>Solar-diesel-battery economics are not always what the configurator says. Honest analysis of when the old architecture is still the right one.</p>
        <a href="insights/hybrid-power-telecom.html" className="insight__read">Read · 10 min →</a>
      </article>

      <article className="insight">
        <span className="insight__date">2026 · 02 · 04</span>
        <h3>Compressed air: the <em className="serif-italic">most expensive utility</em> nobody measures.</h3>
        <p>Why compressed air systems leak 20–30% by default — and what a one-day audit can recover in operating cost.</p>
        <a href="insights/compressed-air-expensive-utility.html" className="insight__read">Read · 7 min →</a>
      </article>

      <article className="insight">
        <span className="insight__date">2026 · 01 · 18</span>
        <h3>Voltage instability and the <em className="serif-italic">engineering</em> we owe our motors.</h3>
        <p>How the African grid actually behaves — and the design factors that prevent the slow, expensive equipment failures it causes.</p>
        <a href="insights/voltage-instability-motors.html" className="insight__read">Read · 9 min →</a>
      </article>

      <article className="insight">
        <span className="insight__date">2025 · 12 · 09</span>
        <h3>A short defence of the boring audit.</h3>
        <p>The unglamorous walk-through, meter-by-meter, that consistently outperforms the AI-powered platform in our project records.</p>
        <a href="insights/defence-of-boring-audit.html" className="insight__read">Read · 5 min →</a>
      </article>

    </div>

  </div>
</section>

<section className="cta-strip">
  <div className="wrap">
    <div className="cta-strip__inner">
      <h2>Want our analysis on a <em>specific problem</em>?</h2>
      <div>
        <p style={{"marginBottom":"1.5rem"}}>Subscribe for new analysis, or send us the question your operations team is wrestling with. We'll write the answer publicly when it's useful to others.</p>
        <a to="/contact" className="btn btn--primary">Get in Touch <span className="btn__arrow">→</span></a>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
