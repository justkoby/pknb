import { Link } from 'react-router-dom';

export default function SubMeteringRoi() {
  return (
    <>
      <div className="page-head" style={{"paddingBottom":"0"}}>
  <div className="wrap">
    <div className="page-head__inner" style={{"gridTemplateColumns":"1fr"}}>
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/insights">Insights</a> / Energy Accountability</span>
      </div>
    </div>
  </div>
</div>

<header className="article-head">
  <div className="kicker">Energy Accountability</div>
  <h1 className="title">Sub-metering ROI: the <em>three rules</em> that make it actually pay back.</h1>
  <p className="standfirst">Most metering deployments underperform because the engineering brief was wrong. Three principles that change the maths.</p>
  <div className="byline">
    <span><strong>Ing. Papa Kusi Nimoh-Brema</strong>, SPE-GHIE · PMP</span>
    <span className="dot">·</span><span>15 March 2026</span>
    <span className="dot">·</span><span>8 min read</span>
  </div>
</header>
<article className="wrap"><div className="body">
<p className="lead">Industrial energy sub-metering has become an easy sell. The hardware
is inexpensive, the dashboards are attractive, and the pitch is reliable: you cannot
manage what you do not measure. So plants buy meters, fit them to every panel with
room for a current transformer, and eighteen months later the dashboard still shows
data nobody acts on while the energy spend sits where it began.</p>

<p>The problem is not the meters. The problem is that most sub-metering projects are
specified as a metering exercise when they should be specified as an accountability
exercise. That distinction determines whether the project pays back in twelve months
or never.</p>

<h2>Rule 1 — Meter the cost centre, not the panel.</h2>
<p>A panel already exists, the current transformers already fit, the cabling is
short. So that is what gets metered. The plant ends up with thirty meters reporting
against thirty switchboards and not a single number that maps to a person's
performance.</p>
<p>The useful approach starts from the organisation chart, not the single-line
diagram. Who carries cost accountability — the production manager for Line&nbsp;2,
the utilities engineer for the boiler house, the warehouse manager for the cold
rooms? Each needs exactly one number from the metering system that ties to their
review. If the architecture cannot deliver that one number, the architecture is
wrong, however many meters are installed.</p>
<p>At a personal-care products manufacturer in [LOCATION], a reviewed deployment had
[NUMBER] meters across the low-voltage system, none mapping cleanly to a production
line because the electrical zoning had been designed for short cable runs, not line
accountability. The remedy was not more meters — it was a virtual metering layer that
re-aggregated existing data against production lines. Cost: roughly [AMOUNT] of
engineering time. Result: a production manager who could, for the first time, be
asked why one line consumed [PERCENTAGE] more energy per tonne than another making
the same product.</p>

<figure className="schematic">
<div className="frame">
<span className="corner tl"></span><span className="corner tr"></span>
<span className="corner bl"></span><span className="corner br"></span>
<svg viewBox="0 0 780 250" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="26" className="sk-t-ttl">WHY THIRTY METERS CAN STILL ANSWER NOTHING</text>

<text x="40" y="58" className="sk-t-a">WIRED TO THE PANEL  ✕</text>
<rect x="40" y="70" width="90" height="40" rx="3" className="sk-fill"/><text x="58" y="94" className="sk-t-s">Incomer</text>
<rect x="40" y="140" width="52" height="34" rx="3" className="sk-fill-2"/><rect x="110" y="140" width="52" height="34" rx="3" className="sk-fill-2"/><rect x="180" y="140" width="52" height="34" rx="3" className="sk-fill-2"/><rect x="250" y="140" width="52" height="34" rx="3" className="sk-fill-2"/>
<circle cx="66" cy="128" r="9" className="sk-bad"/><line x1="66" y1="119" x2="66" y2="125" className="sk-bad"/><line x1="70" y1="129" x2="66" y2="128" className="sk-bad"/><circle cx="136" cy="128" r="9" className="sk-bad"/><line x1="136" y1="119" x2="136" y2="125" className="sk-bad"/><line x1="140" y1="129" x2="136" y2="128" className="sk-bad"/><circle cx="206" cy="128" r="9" className="sk-bad"/><line x1="206" y1="119" x2="206" y2="125" className="sk-bad"/><line x1="210" y1="129" x2="206" y2="128" className="sk-bad"/><circle cx="276" cy="128" r="9" className="sk-bad"/><line x1="276" y1="119" x2="276" y2="125" className="sk-bad"/><line x1="280" y1="129" x2="276" y2="128" className="sk-bad"/>
<line x1="85" y1="110" x2="85" y2="128" className="sk-line"/>
<line x1="66" y1="138" x2="66" y2="138" className="sk-line"/><line x1="66" y1="138" x2="136" y2="138" className="sk-line"/><line x1="66" y1="138" x2="206" y2="138" className="sk-line"/><line x1="66" y1="138" x2="276" y2="138" className="sk-line"/>
<text x="48" y="161" className="sk-t-s">MCC 1</text><text x="118" y="161" className="sk-t-s">MCC 2</text><text x="188" y="161" className="sk-t-s">MCC 3</text><text x="258" y="161" className="sk-t-s">MCC 4</text>
<text x="40" y="200" className="sk-t-s">Meters map to switchboards.</text>
<text x="40" y="217" className="sk-t-s">No number maps to a person.</text>

<line x1="370" y1="50" x2="370" y2="225" className="sk-dash"/>

<text x="410" y="58" className="sk-t-a">WIRED TO THE COST CENTRE  ✓</text>
<rect x="410" y="70" width="90" height="40" rx="3" className="sk-fill"/><text x="428" y="94" className="sk-t-s">Incomer</text>
<rect x="410" y="140" width="150" height="34" rx="3" className="sk-fill-2"/>
<rect x="580" y="140" width="150" height="34" rx="3" className="sk-fill-2"/>
<circle cx="430" cy="128" r="9" className="sk-good"/><line x1="430" y1="119" x2="430" y2="125" className="sk-good"/><line x1="434" y1="129" x2="430" y2="128" className="sk-good"/><circle cx="600" cy="128" r="9" className="sk-good"/><line x1="600" y1="119" x2="600" y2="125" className="sk-good"/><line x1="604" y1="129" x2="600" y2="128" className="sk-good"/>
<line x1="455" y1="110" x2="455" y2="128" className="sk-line-2"/>
<line x1="430" y1="138" x2="600" y2="138" className="sk-line-2"/>
<text x="420" y="161" className="sk-t">LINE 2 · kWh / case</text>
<text x="590" y="161" className="sk-t">COLD STORE · kWh / m³</text>
<text x="410" y="200" className="sk-t-s">One number per accountable manager,</text>
<text x="410" y="217" className="sk-t-s">expressed per unit of output.</text>
</svg>
</div>
<figcaption><b>Fig. 1 — Metering architecture</b>The same meter count, two architectures. The left answers no operational question; the right ties one number to one accountable manager.</figcaption>
</figure>
<h2>Rule 2 — kWh per unit of output, or it does not count.</h2>
<p>A meter reporting kilowatt-hours reports consumption. A meter reporting kWh per
case, per tonne, per litre, per pallet picked reports performance. Only the second
changes behaviour.</p>
<p>This requires the metering system to be joined, at the data layer, to production
data — the manufacturing execution system, the supervisory control data, the shift
log, even a manually entered case count. Without that link, the dashboard says
Tuesday was a high-consumption day. With it, the dashboard says Tuesday was high
because a particular line ran a particular product whose energy-per-case was
[VALUE] above standard, with three candidate causes.</p>
<p>Plants that establish this link within the first six months consistently see
[RANGE] reductions in specific energy consumption inside a year, with no capital
beyond the metering itself. Plants that never join the two data streams see no
measurable improvement at all. This is the single largest determinant of metering
return on investment we encounter in the field.</p>

<h2>Rule 3 — One person owns the number. Every week. Indefinitely.</h2>
<p>This rule has nothing to do with engineering and everything to do with payback.
The deployment dies the day nobody is required to explain last week's numbers in a
meeting — not the consultant, not the vendor's dashboard, but a named individual
inside the plant, every week, in front of their peers.</p>
<p>Where this is institutionalised — usually as a fifteen-minute item in an existing
operations review — the metering returns its capital in [RANGE] months and continues
compounding. Where the conversation does not happen, the dashboard becomes a
screensaver in the engineering office and the capital is dead money. We have seen it
work on a printed sheet at a 7&nbsp;a.m. stand-up and fail on a costly cloud platform
with mobile alerts. The institutional ritual is the active ingredient.</p>

<h2>The honest pre-mortem</h2>
<p>Before authorising a metering project:</p>
<ul>
<li>Which named individual is accountable for which metered number?</li>
<li>In which existing weekly meeting is the data reviewed, by whom, against what
target?</li>
<li>Which production data stream is joined to the energy data so kWh-per-unit can be
computed, and who owns that integration?</li>
<li>What is the action protocol when a metered indicator drifts out of tolerance —
who decides, who funds, who closes the loop?</li>
</ul>
<p>If three of those four lack clean answers before the purchase order issues, the
project will not pay back.</p>
<div className="callout"><p><strong>What good looks like.</strong> The best deployment we
have seen in a Ghanaian plant had [NUMBER] meters, not [NUMBER]. Each served one cost
centre. Each cost centre had one accountable manager. Each manager defended their
energy-per-unit number weekly. Total capital was under [AMOUNT]; documented year-one
savings were roughly [MULTIPLE] that figure. Fewer meters, sharper accountability,
real payback.</p></div>
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
