import { Link } from 'react-router-dom';

export default function WhyPowerFactorPenalty() {
  return (
    <>
      <div className="page-head" style={{"paddingBottom":"0"}}>
  <div className="wrap">
    <div className="page-head__inner" style={{"gridTemplateColumns":"1fr"}}>
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/insights">Insights</a> / Power Quality</span>
      </div>
    </div>
  </div>
</div>

<header className="article-head">
  <div className="kicker">Power Quality</div>
  <h1 className="title">Why your power factor penalty isn&rsquo;t really about <em>power factor</em>.</h1>
  <p className="standfirst">The most common misdiagnosis we see — and what the demand-charge data actually tells you about plant behaviour.</p>
  <div className="byline">
    <span><strong>Ing. Papa Kusi Nimoh-Brema</strong>, SPE-GHIE · PMP</span>
    <span className="dot">·</span><span>22 April 2026</span>
    <span className="dot">·</span><span>6 min read</span>
  </div>
</header>
<article className="wrap"><div className="body">
<p className="lead">The first thing a plant manager does when an ECG bill shows a reactive
energy penalty is call the electrical contractor and ask for more capacitors. The
second thing — six months later — is call the same contractor back, because the
penalty has not moved. Sometimes it has become worse.</p>

<p>This is the most common misdiagnosis in industrial electrical billing in Ghana,
and it costs plants a real amount of money every month while they wait for someone
to look at the problem properly.</p>

<h2>What the bill is actually saying</h2>
<p>A reactive energy penalty on an industrial tariff is not, strictly, a charge for
low power factor. It is a charge for the reactive energy drawn from the network in a
billing period over and above the allowance the tariff grants as a fraction of active
energy consumed. The two quantities are related, but they are not the same number,
and the difference is where the misdiagnosis lives.</p>
<p>Three distinct conditions all produce a reactive penalty on the bill, and each
requires a different response:</p>
<ul>
<li><strong>Steady-state low power factor.</strong> Many large induction motors at
partial load, or lightly loaded older transformers. Average power factor sits around
0.78–0.85 and barely moves through the day. This is the textbook case; capacitor
banks address it.</li>
<li><strong>Intermittent reactive demand.</strong> Power factor is generally healthy
— 0.92 or better for most of the day — but specific events drive it into the floor:
compressor start cycles, a CIP pump staging on, a chiller bank sequencing badly. The
average looks acceptable; the reactive energy accumulates regardless.</li>
<li><strong>Harmonic-driven displacement.</strong> Variable-frequency drives,
rectifiers, switched-mode loads. Fundamental power factor is excellent; displacement
power factor at the meter is not. Adding plain capacitance here is actively dangerous
— it can create resonance conditions that destroy the capacitors themselves.</li>
</ul>

<figure className="schematic">
<div className="frame">
<span className="corner tl"></span><span className="corner tr"></span>
<span className="corner bl"></span><span className="corner br"></span>
<svg viewBox="0 0 780 210" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="28" className="sk-t-ttl">THREE BILL-EQUIVALENT SIGNATURES — SAME PENALTY, DIFFERENT CAUSE</text>
<line x1="20" y1="40" x2="760" y2="40" className="sk-dash"/>

<text x="40" y="58" className="sk-t-a">A · STEADY-STATE LOW PF</text>
<line x1="40" y1="150" x2="240" y2="150" className="sk-line"/><line x1="40" y1="60" x2="40" y2="150" className="sk-line"/>
<line x1="40" y1="95" x2="240" y2="95" className="sk-dash"/>
<text x="246" y="99" className="sk-t-s">target</text>
<polyline className="sk-bad sk-draw" points="40,117 48,119 56,117 64,119 72,117 80,119 88,117 96,119 104,117 112,119 120,117 128,119 136,117 144,119 152,117 160,119 168,117 176,119 184,117 192,119 200,117 208,119 216,117 224,119 232,117"/>
<text x="40" y="170" className="sk-t-s">PF flat ≈ 0.80 all day → capacitor banks</text>

<text x="300" y="58" className="sk-t-a">B · INTERMITTENT</text>
<line x1="300" y1="150" x2="500" y2="150" className="sk-line"/><line x1="300" y1="60" x2="300" y2="150" className="sk-line"/>
<line x1="300" y1="95" x2="500" y2="95" className="sk-dash"/>
<polyline className="sk-bad sk-draw d2" points="300,72 308,72 316,72 324,72 332,72 340,72 348,138 356,138 364,72 372,72 380,72 388,72 396,72 404,72 412,138 420,138 428,72 436,72 444,72 452,72 460,72 468,138 476,72 484,72 492,72"/>
<text x="300" y="170" className="sk-t-s">PF ≈ 0.94, collapses on CIP / compressor starts</text>

<text x="560" y="58" className="sk-t-a">C · HARMONIC</text>
<line x1="560" y1="150" x2="760" y2="150" className="sk-line"/><line x1="560" y1="60" x2="560" y2="150" className="sk-line"/>
<line x1="560" y1="95" x2="760" y2="95" className="sk-dash"/>
<polyline className="sk-bad sk-draw d3" points="560,78.0 564,82.1 568,76.0 572,73.0 576,81.6 580,84.5 584,73.8 588,69.9 592,81.9 596,87.3 600,75.2 604,68.4 608,79.5 612,87.0 616,77.5 620,70.5 624,78.2 628,83.6 632,77.2 636,74.1 640,80.3 644,80.8 648,73.7 652,75.4 656,84.3 660,81.4 664,70.4 668,73.3 672,86.0 676,84.0 680,70.5 684,71.1 688,84.3 692,85.0 696,73.2 700,71.9 704,81.7 708,82.3 712,74.7 716,75.7 720,81.8 724,78.4 728,72.8 732,78.8 736,85.0 740,77.0 744,69.3 748,78.4 752,87.7 756,78.8"/>
<text x="560" y="170" className="sk-t-s">fundamental fine; displacement at meter is not</text>

<text x="20" y="200" className="sk-t-s">Vertical: power factor (low = bad)   ·   Horizontal: 24-hour billing window</text>
</svg>
</div>
<figcaption><b>Fig. 1 — Load signatures</b>The monthly bill collapses all three of these into one number. Only an interval survey separates them — and each demands a different remedy.</figcaption>
</figure>
<h2>How to tell which one you have</h2>
<p>It cannot be told from a monthly bill. The monthly bill is one number. It requires
either a maximum-demand meter readout with a reactive-energy interval log, or — more
usefully — a one-week power quality survey at the incomer.</p>
<p>At a juice and fruit processing operation in Nsawam, the monthly bill suggested a
chronic power factor problem. The power quality logger told a different story: power
factor averaged 0.94 across the week. The penalty was being generated by roughly
[DURATION] per day of CIP and compressor start sequences during which power factor
collapsed to 0.62. The plant had already installed [SIZE] of fixed capacitance the
previous year, which did nothing for the penalty because the penalty was not
steady-state. The remedy was a smaller, fast-switching automatic bank sized to the
transient, plus a sequencing change on the CIP start that the operations team
implemented in an afternoon.</p>
<p>The capital cost of the second remedy was roughly [PERCENTAGE] of the capital cost
of the first. The penalty disappeared the month after commissioning.</p>

<h2>The harmonic case is the dangerous one</h2>
<p>Where plants get hurt is the third condition. A facility with significant
drive-based load installs traditional capacitor banks on the recommendation of a
supplier whose only diagnostic is the monthly bill. Within [TIMEFRAME] the capacitors
are bulging, fuses are clearing on warm afternoons, and a contactor has welded shut.
Capital has been spent twice and the penalty remains.</p>
<p>The honest answer in the harmonic case is detuned capacitor banks at minimum, and
active harmonic filtering where total harmonic distortion demands it. The honest
answer also requires somebody to measure the distortion before specifying anything —
which is precisely the step the cheap version omits.</p>

<h2>What to ask before purchasing anything</h2>
<blockquote>Show me a one-week interval log of power factor and reactive demand at
the incomer, not a monthly average. Show me the harmonic distortion at the same point,
voltage and current. Tell me which loads produce the reactive draw, and at what times
of day. Then tell me what to buy.</blockquote>
<p>Any supplier who can answer the first three questions before quoting is worth
working with. Any supplier who skips them is selling capacitors, not solving a
problem.</p>
<div className="callout"><p><strong>The principle.</strong> The penalty on the bill is
real. The correct remedy is almost never the one the previous quotation assumed,
because the previous quotation almost never measured first.</p></div>
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
