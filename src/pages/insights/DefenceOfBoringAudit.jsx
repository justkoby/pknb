import { Link } from 'react-router-dom';

export default function DefenceOfBoringAudit() {
  return (
    <>
      <div className="page-head" style={{"paddingBottom":"0"}}>
  <div className="wrap">
    <div className="page-head__inner" style={{"gridTemplateColumns":"1fr"}}>
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/insights">Insights</a> / Method</span>
      </div>
    </div>
  </div>
</div>

<header className="article-head">
  <div className="kicker">Method</div>
  <h1 className="title">A short defence of the <em>boring audit</em>.</h1>
  <p className="standfirst">The unglamorous walk-through, meter by meter, that consistently outperforms the AI-powered platform in our project records.</p>
  <div className="byline">
    <span><strong>Ing. Papa Kusi Nimoh-Brema</strong>, SPE-GHIE · PMP</span>
    <span className="dot">·</span><span>9 December 2025</span>
    <span className="dot">·</span><span>5 min read</span>
  </div>
</header>
<article className="wrap"><div className="body">
<p className="lead">It is harder than it should be to recommend a one-week walk-through
with a clipboard and a serviceable power quality logger to a client who has just sat
through three pitches for cloud-based, machine-learning-augmented, real-time energy
intelligence platforms. The audit is the older, slower, less visually compelling
option. It is also, on our project records, the one that consistently delivers more
recovered cost per cedi of consultant spend than any alternative.</p>

<p>Three reasons — none of them a criticism of the platforms, which are genuinely
useful applied to plants that have already had the boring audit done.</p>

<h2>One — the platform does not know what is broken.</h2>
<p>A real-time platform monitors what its sensors are wired to. It does not know
about the condensate drain stuck open, because there is no sensor on the drain. It
does not know the boiler air-fuel ratio has drifted, because that data lives on the
boiler controller and was never federated. It does not know the chilled-water bypass
has been wired open by an operator tired of resetting it, because there is no sensor
within ten metres of the valve. An engineer walking the plant finds all three in an
afternoon. A platform makes a well-instrumented plant smarter; it does not, by itself,
make an uninspected plant inspected.</p>

<figure className="schematic">
<div className="frame">
<span className="corner tl"></span><span className="corner tr"></span>
<span className="corner bl"></span><span className="corner br"></span>
<svg viewBox="0 0 780 250" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="26" className="sk-t-ttl">TWO INSTRUMENTS, ONE PLANT — WHAT EACH CAN SEE</text>

<rect x="30" y="50" width="330" height="180" rx="4" className="sk-fill-2"/>
<text x="48" y="74" className="sk-t-a">REAL-TIME PLATFORM</text>
<text x="48" y="92" className="sk-t-s">sees only what sensors are wired to</text>
<circle cx="70" cy="120" r="13" className="sk-good" fill="#16273d"/><path d="M66,120 l4,4 l7,-9" className="sk-good"/><text x="92" y="124" className="sk-t">Main incomer kWh</text>
<circle cx="70" cy="158" r="13" className="sk-good" fill="#16273d"/><path d="M66,158 l4,4 l7,-9" className="sk-good"/><text x="92" y="162" className="sk-t">Metered feeders</text>
<circle cx="70" cy="196" r="13" className="sk-bad" fill="#16273d"/><path d="M66,192 l8,8 M74,192 l-8,8" className="sk-bad"/><text x="92" y="200" className="sk-t">Stuck condensate drain</text>

<line x1="390" y1="50" x2="390" y2="230" className="sk-dash"/>

<rect x="420" y="50" width="330" height="180" rx="4" className="sk-fill-2"/>
<text x="438" y="74" className="sk-t-a">THE WALK-THROUGH</text>
<text x="438" y="92" className="sk-t-s">finds the physical, situational, unsensored</text>
<circle cx="460" cy="120" r="13" className="sk-good" fill="#16273d"/><path d="M456,120 l4,4 l7,-9" className="sk-good"/><text x="482" y="124" className="sk-t">Steam trap failed open</text>
<circle cx="460" cy="158" r="13" className="sk-good" fill="#16273d"/><path d="M456,158 l4,4 l7,-9" className="sk-good"/><text x="482" y="162" className="sk-t">Bypass valve wired open</text>
<circle cx="460" cy="196" r="13" className="sk-good" fill="#16273d"/><path d="M456,196 l4,4 l7,-9" className="sk-good"/><text x="482" y="200" className="sk-t">8.2 bar for a 5.5 bar need</text>

<text x="30" y="248" className="sk-t-s">The platform makes an inspected plant smarter. It cannot make an uninspected plant inspected.</text>
</svg>
</div>
<figcaption><b>Fig. 1 — Coverage comparison</b>Both instruments are valuable. Only one of them finds the failed trap, the wired-open bypass, and the over-pressured network.</figcaption>
</figure>
<h2>Two — the highest-yield findings are nearly always physical.</h2>
<p>On the audits we have closed, recovered cost is dominated, year after year, by
findings of roughly this kind:</p>
<ul>
<li>A steam trap failed open, venting [PERCENTAGE] of boiler output to atmosphere.</li>
<li>A cold-room evaporator carrying [MM] of frost because the defrost cycle was never
recalibrated.</li>
<li>A compressor at 8.2&nbsp;bar serving a network whose worst case needs
5.5&nbsp;bar.</li>
<li>An exhaust fan running continuously because its production interlock was lost in
a control upgrade.</li>
<li>A transformer at [PERCENTAGE] load with no consolidation plan, paying full
no-load losses every hour.</li>
</ul>
<p>None require artificial intelligence. They require somebody to look. Cumulative
recovery from a serious walk-through on a mid-sized facility is, in our experience, in
the [PERCENTAGE] band of annual energy spend, payback inside [TIMEFRAME] on the fixes
and roughly [MULTIPLE] return on the audit fee — a one-off recovery, after which the
platform (or disciplined sub-metering) earns its place keeping the gains.</p>

<h2>Three — the audit teaches the plant something the platform does not.</h2>
<p>The most underrated output is not the report. It is the two days the auditor
spends walking with the plant's own engineers, asking why the bypass is open, what
the receiver pressure has been, when the boiler was last combustion-tested. They know
most answers, or can find them by lunchtime. What they have rarely been asked is to
think about their plant as an energy system rather than a sequence of fires. The
boring audit transfers a way of looking; the plant keeps it after the consultant
leaves. The platform transfers a dashboard.</p>

<h2>So when is the platform the right answer?</h2>
<p>After the boring audit, not instead of it:</p>
<ul>
<li><strong>Year 1</strong> — walk-through, closure of physical findings,
cost-centre sub-metering.</li>
<li><strong>Year 2</strong> — weekly accountability against the energy-per-unit
numbers.</li>
<li><strong>Year 3 onward</strong> — analytics layered on top, for the specific
cases it is genuinely good at: anomaly detection, demand prediction, predictive
maintenance.</li>
</ul>
<div className="callout"><p><strong>The principle.</strong> In that sequence every layer
earns its capital, and the order of the layers is everything. The boring audit is not
an outdated method. It is a foundational one. Skip it, and the more impressive
engineering above it has nothing to stand on.</p></div>
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
