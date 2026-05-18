import { Link } from 'react-router-dom';

export default function HybridPowerTelecom() {
  return (
    <>
      <div className="page-head" style={{"paddingBottom":"0"}}>
  <div className="wrap">
    <div className="page-head__inner" style={{"gridTemplateColumns":"1fr"}}>
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/insights">Insights</a> / Power Systems</span>
      </div>
    </div>
  </div>
</div>

<header className="article-head">
  <div className="kicker">Power Systems</div>
  <h1 className="title">Hybrid power for telecom: where the <em>diesel still wins</em>.</h1>
  <p className="standfirst">Solar-diesel-battery economics are not always what the configurator says. Honest analysis of when the old architecture is still the right one.</p>
  <div className="byline">
    <span><strong>Ing. Papa Kusi Nimoh-Brema</strong>, SPE-GHIE · PMP</span>
    <span className="dot">·</span><span>28 February 2026</span>
    <span className="dot">·</span><span>10 min read</span>
  </div>
</header>
<article className="wrap"><div className="body">
<p className="lead">Solar-hybrid for off-grid telecom towers is a settled question across
most of West Africa. The configuration is well understood, and most operators quote
runtime fuel savings in the [RANGE] band with project economics defensible inside
three to five years.</p>

<p>But <em>usually</em> is not <em>always</em>. There is a class of sites — larger
than configurator software admits — where honest analysis still favours the older
diesel-dominant architecture, or a far smaller hybrid than the standard sizing rule
proposes. This piece describes that class clearly, because too many hybrid retrofits
look poor after [TIMEFRAME] and the operator does not understand why.</p>

<h2>Failure mode one — load profile versus the sizing rule</h2>
<p>Standard sizing assumes a roughly symmetric load: similar draw at 11&nbsp;a.m. and
11&nbsp;p.m. For a busy urban macro site that is fair. For a rural site whose traffic
is daytime-dominated and falls steeply at night, it is not.</p>
<p>A daytime-peaking site has its load conveniently aligned with generation; the
battery does little work and the economics are excellent. A flat or night-peaking
site — more common than assumed, since base load rarely falls much below [PERCENTAGE]
of the daytime average once cooling, lighting and microwave radios are counted — has
its load shifted away from generation. The battery does the work. The battery is the
most expensive and shortest-lived component in the architecture, and the promised
fuel savings quietly evaporate against accelerated replacement.</p>

<figure className="schematic">
<div className="frame">
<span className="corner tl"></span><span className="corner tr"></span>
<span className="corner bl"></span><span className="corner br"></span>
<svg viewBox="0 0 780 235" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="24" className="sk-t-ttl">WHERE THE BATTERY DOES THE WORK — AND WHERE IT DOESN'T</text>
<line x1="60" y1="170" x2="720" y2="170" className="sk-line"/>
<line x1="60" y1="60" x2="60" y2="170" className="sk-line"/>
<text x="30" y="66" className="sk-t-s">kW</text>
<text x="58" y="186" className="sk-t-s">00:00</text>
<text x="350" y="186" className="sk-t-s">12:00</text>
<text x="690" y="186" className="sk-t-s">24:00</text>

<polygon className="sk-rise" points="60,170 60,170.0 86,170.0 112,170.0 138,170.0 164,170.0 190,170.0 216,170.0 242,151.9 268,135.0 294,120.5 320,109.4 346,102.4 372,100.0 398,102.4 424,109.4 450,120.5 476,135.0 502,151.9 528,170.0 554,170.0 580,170.0 606,170.0 632,170.0 658,170.0 684,170.0 720,170" fill="#e9a766" opacity="0.12"/>
<polyline className="sk-accent" points="60,170.0 86,170.0 112,170.0 138,170.0 164,170.0 190,170.0 216,170.0 242,151.9 268,135.0 294,120.5 320,109.4 346,102.4 372,100.0 398,102.4 424,109.4 450,120.5 476,135.0 502,151.9 528,170.0 554,170.0 580,170.0 606,170.0 632,170.0 658,170.0 684,170.0"/>
<text x="330" y="84" className="sk-t-a sk-late l2">PV generation</text>

<polyline className="sk-good" points="60,152.0 86,152.0 112,152.0 138,152.0 164,152.0 190,152.0 216,152.0 242,137.8 268,124.5 294,113.1 320,104.4 346,98.9 372,97.0 398,98.9 424,104.4 450,113.1 476,124.5 502,137.8 528,152.0 554,152.0 580,152.0 606,152.0 632,152.0 658,152.0 684,152.0"/>
<polyline className="sk-bad" points="60,112.0 86,112.0 112,112.0 138,112.0 164,112.0 190,112.0 216,134.0 242,134.0 268,134.0 294,134.0 320,134.0 346,134.0 372,134.0 398,134.0 424,134.0 450,134.0 476,134.0 502,134.0 528,134.0 554,134.0 580,112.0 606,112.0 632,112.0 658,112.0 684,112.0"/>

<rect x="60" y="196" width="14" height="2" className="sk-good-f"/>
<text x="82" y="201" className="sk-t-s" fill="#5fae84">day-peaking site — load tracks PV, battery rests</text>
<rect x="430" y="196" width="14" height="2" className="sk-bad-f"/>
<text x="452" y="201" className="sk-t-s" fill="#d9694e">flat / night-peaking — load lives on the battery</text>

<text x="60" y="219" className="sk-t-s">The gap between load and the amber curve is what battery + diesel must cover — that gap sets the economics.</text>
</svg>
</div>
<figcaption><b>Fig. 1 — Load vs generation</b>Hybrid economics are set by the area between the load curve and the PV curve. A day-peaking site barely uses the battery; a flat site lives on it.</figcaption>
</figure>
<h2>Failure mode two — ambient temperature</h2>
<p>Lithium battery cycle life is published at 25&nbsp;°C. The mean diurnal
temperature inside a sealed shelter in [REGION] is closer to [TEMPERATURE], with
in-shelter peaks of [TEMPERATURE] for several hours daily in the hot season. Cycle
life at sustained 40&nbsp;°C is on the order of [PERCENTAGE] of nameplate. If the
financial model uses nameplate replacement intervals, the levelised cost is
understated by a non-trivial margin. We have seen retrofits with a respectable
modelled return that went underwater after the first unplanned battery
replacement.</p>
<p>The remedy is not necessarily abandoning the hybrid. It is funding proper shelter
ventilation, or an outdoor cabinet, or accepting real cycle life in the model and
sizing accordingly. None of these are free, and none appear in the default
configuration.</p>

<h2>Failure mode three — site access and maintenance</h2>
<p>A diesel generator at a remote site is a known quantity: fuel logistics solved,
fault modes familiar, most failures recoverable on a first visit with a basic
toolkit. A hybrid system at the same site has more components, more software, more
state to interrogate, and more failure modes that present identically — a battery
management fault, a string imbalance, a controller communication loss and a genuine
cell failure can all read as &ldquo;site down&rdquo; from the network operations
centre. Mean time to repair on a hybrid is typically [MULTIPLE] that of the
equivalent diesel-only site, before spares availability for the specific inverter or
firmware is considered. Where access is hours over poor road, this matters more than
the spreadsheet shows.</p>

<h2>Where the diesel still wins, plainly</h2>
<ul>
<li>Sites with strongly flat or night-peaking load profiles where the battery does
most of the work.</li>
<li>Sites where shelter temperature cannot be brought within battery specification
economically.</li>
<li>Sites with severe access constraints where repair time is a real cost driver.</li>
<li>Sites whose maintenance organisation cannot yet sustain the hybrid without
multi-year vendor dependence.</li>
<li>Sites whose remaining tower lease is shorter than the battery payback period.</li>
</ul>

<h2>What an honest pre-feasibility contains</h2>
<ul>
<li>A seven-day logged load profile at the actual site, not an assumed average.</li>
<li>A measured seven-day in-shelter temperature profile, not a regional climate
average.</li>
<li>Battery cycle life corrected to that temperature and depth of discharge.</li>
<li>A diesel runtime forecast using corrected autonomy, not nameplate.</li>
<li>An explicit line item for accelerated battery replacement.</li>
<li>A diesel price sensitivity across project life — in both directions.</li>
</ul>
<div className="callout"><p><strong>The principle.</strong> Hybrids work. The cases
where they do not are not random — they cluster and are identifiable in advance. The
cost of identifying them is a week of logging and a careful analyst. The cost of not
identifying them is a stranded asset.</p></div>
<div className="editor-note"><strong>A note on figures.</strong> Specific quantities in
square brackets are placeholders for values drawn from PKNB Consult engagement records.
They are completed against project documentation prior to client circulation; client
identities are withheld throughout as a matter of professional confidentiality.</div>
<div className="sign"><strong>Ing. Papa Kusi Nimoh-Brema</strong> · Principal Consultant,
PKNB Consult · Accra, Ghana</div>
</div></article>
    </>
  );
}
