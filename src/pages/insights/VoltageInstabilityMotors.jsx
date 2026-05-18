import { Link } from 'react-router-dom';

export default function VoltageInstabilityMotors() {
  return (
    <>
      <div className="page-head" style={{"paddingBottom":"0"}}>
  <div className="wrap">
    <div className="page-head__inner" style={{"gridTemplateColumns":"1fr"}}>
      <div>
        <span className="breadcrumb"><a to="/">Home</a> / <a to="/insights">Insights</a> / Reliability Engineering</span>
      </div>
    </div>
  </div>
</div>

<header className="article-head">
  <div className="kicker">Reliability Engineering</div>
  <h1 className="title">Voltage instability and the <em>engineering</em> we owe our motors.</h1>
  <p className="standfirst">How the African grid actually behaves — and the design factors that prevent the slow, expensive equipment failures it causes.</p>
  <div className="byline">
    <span><strong>Ing. Papa Kusi Nimoh-Brema</strong>, SPE-GHIE · PMP</span>
    <span className="dot">·</span><span>18 January 2026</span>
    <span className="dot">·</span><span>9 min read</span>
  </div>
</header>
<article className="wrap"><div className="body">
<p className="lead">Every plant electrical specification we have seen states a nominal
supply of 400&nbsp;V three-phase at &plusmn;[PERCENTAGE] tolerance. Every one of them
is also wrong about its own supply, because that tolerance is a regulatory aspiration,
not a measured property of the network.</p>

<p>A one-week voltage recording at the low-voltage busbar of a typical industrial
site in [LOCATION] will show:</p>
<ul>
<li>Sustained excursions to roughly [VOLTAGE] on one or more phases during evening
peak, lasting [DURATION].</li>
<li>Brief excursions to [VOLTAGE] in the early morning as industrial load drops
faster than network regulation responds.</li>
<li>Phase voltage unbalance routinely between [RANGE], against an equipment-terminal
limit of 2%.</li>
<li>Short sags to [VOLTAGE] or below on one phase several times daily during faults
elsewhere on the network.</li>
</ul>
<p>None of this is unusual. All of it is brutal to induction motors and to the
availability of any plant whose process depends on them.</p>

<figure className="schematic">
<div className="frame">
<span className="corner tl"></span><span className="corner tr"></span>
<span className="corner bl"></span><span className="corner br"></span>
<svg viewBox="0 0 780 235" xmlns="http://www.w3.org/2000/svg">
<text x="20" y="24" className="sk-t-ttl">SEVEN DAYS AT THE LV BUSBAR vs THE MOTOR-SAFE BAND</text>
<line x1="60" y1="190" x2="730" y2="190" className="sk-line"/>
<line x1="60" y1="40" x2="60" y2="190" className="sk-line"/>
<text x="24" y="46" className="sk-t-s">V</text>

<rect x="60" y="84.3" width="670" height="31.4"
 fill="#5fae84" opacity="0.12"/>
<line x1="60" y1="84.3" x2="730" y2="84.3" className="sk-good"/>
<line x1="60" y1="115.7" x2="730" y2="115.7" className="sk-good"/>
<text x="610" y="78.3" className="sk-t-s" fill="#5fae84">motor-safe envelope</text>

<polyline className="sk-bad sk-draw" points="60.0,91.7 65.6,95.6 71.2,98.1 76.8,111.2 82.4,113.6 88.0,118.4 93.6,121.7 99.2,117.0 104.8,116.4 110.4,107.6 116.0,103.2 121.6,101.5 127.2,96.0 132.8,89.9 138.4,92.6 144.0,90.7 149.6,87.9 155.2,87.0 160.8,92.2 166.4,98.3 172.0,103.8 177.6,116.3 183.2,114.5 188.8,120.1 194.4,120.0 200.0,116.5 205.6,109.4 211.2,98.9 216.8,100.9 222.4,95.4 228.0,91.7 233.6,91.1 239.2,88.4 244.8,141.8 250.4,93.1 256.0,94.4 261.6,94.8 267.2,106.8 272.8,113.7 278.4,116.0 284.0,118.8 289.6,119.2 295.2,112.3 300.8,107.6 306.4,104.0 312.0,98.0 317.6,96.3 323.2,90.4 328.8,88.8 334.4,90.4 340.0,85.2 345.6,92.4 351.2,92.5 356.8,93.2 362.4,107.8 368.0,111.7 373.6,119.5 379.2,117.2 384.8,116.1 390.4,114.5 396.0,107.2 401.6,104.5 407.2,97.2 412.8,96.3 418.4,93.0 424.0,91.1 429.6,86.6 435.2,85.4 440.8,89.6 446.4,90.3 452.0,97.7 457.6,152.3 463.2,109.7 468.8,112.1 474.4,115.9 480.0,119.8 485.6,116.4 491.2,109.5 496.8,107.6 502.4,98.8 508.0,99.9 513.6,96.8 519.2,94.3 524.8,87.3 530.4,91.2 536.0,91.0 541.6,91.9 547.2,91.4 552.8,105.2 558.4,110.3 564.0,114.7 569.6,115.3 575.2,116.1 580.8,113.5 586.4,113.1 592.0,105.8 597.6,99.6 603.2,95.3 608.8,141.2 614.4,94.0 620.0,91.7 625.6,90.5 631.2,91.0 636.8,90.9 642.4,92.9 648.0,102.4 653.6,112.6 659.2,115.0 664.8,118.7 670.4,118.0 676.0,113.4 681.6,110.9 687.2,106.1 692.8,98.2 698.4,97.3 704.0,98.2 709.6,89.0 715.2,87.7 720.8,86.0 726.4,86.8"/>

<text x="90" y="206" className="sk-t-s">D1</text><text x="185" y="206" className="sk-t-s">D2</text><text x="280" y="206" className="sk-t-s">D3</text><text x="375" y="206" className="sk-t-s">D4</text><text x="470" y="206" className="sk-t-s">D5</text><text x="565" y="206" className="sk-t-s">D6</text><text x="660" y="206" className="sk-t-s">D7</text>
<circle className="sk-cursor sk-bad-f" cx="726.4" cy="86.8" r="4"/>
<text x="60" y="228" className="sk-t-s sk-late l3">Every excursion below the green band is insulation life the plant is spending and not logging.</text>
</svg>
</div>
<figcaption><b>Fig. 1 — One-week busbar trace</b>The regulatory ±tolerance is the green band. The measured supply spends much of the week outside it — and every excursion is unlogged insulation life.</figcaption>
</figure>
<h2>The slow failure</h2>
<p>A motor fed continuously at [VOLTAGE] instead of 400&nbsp;V draws roughly
[PERCENTAGE] more current for the same shaft torque. Resistive losses rise by roughly
[PERCENTAGE]. Winding temperature rises. Insulation thermal life halves for every
[TEMPERATURE] of sustained over-temperature.</p>
<p>This is not catastrophic; it is slow. The motor does not trip the day the network
sags. It runs hotter, every day, for [DURATION], until the insulation fails at an
inconvenient time. The plant logs &ldquo;motor failed&rdquo; and replaces it. The
plant does not log &ldquo;the network supplied this motor with abusive conditions for
a year, observed on no monitoring system.&rdquo;</p>
<p>Voltage unbalance is worse. A 4% voltage unbalance produces on the order of
[PERCENTAGE] current unbalance, and the resulting negative-sequence rotor heating was
never in the motor's design basis. A motor on a persistently unbalanced supply has a
thermal life that is a fraction of its nameplate.</p>

<h2>The engineering we owe these motors</h2>
<h3>Tier 1 — design specification</h3>
<p>Specify a 1.15 service factor, not 1.0. Specify Class&nbsp;F insulation with
Class&nbsp;B temperature rise, giving [TEMPERATURE] of thermal margin. Specify winding
thermistors wired to a protection relay that trips on winding temperature, not only
overcurrent. This adds [PERCENTAGE] to motor cost and roughly doubles realistic
in-service life on this grid.</p>
<h3>Tier 2 — motor protection</h3>
<p>Replace thermal-overload relays with electronic motor protection monitoring
current and voltage unbalance, undervoltage, phase loss, earth fault and
starts-per-hour, with logging and thresholds that correspond to motor harm. Cost is
[VALUE] per critical motor; the relay repays itself the first time it prevents a
rewind.</p>
<h3>Tier 3 — voltage support at the site</h3>
<p>Where the supply is genuinely outside any motor-tolerable envelope, bring it
inside before it reaches the equipment:</p>
<ul>
<li>Off-load tap changing on the incoming transformer, set to the measured average,
not nominal.</li>
<li>Automatic voltage regulation on the critical-load bus only, not the whole
site.</li>
<li>On-load tap-changing transformers where the daily swing makes a static tap
useless.</li>
<li>Power-conditioning topologies for genuinely sensitive controllers and
instrumentation.</li>
</ul>

<h2>Before any of the above</h2>
<p>Capital on voltage support without data is a gamble. The first step is always
measurement: a one-week class-A power quality recording at the incomer, and a parallel
recording at one or two critical motor terminals to characterise what the load
actually sees after the plant's own distribution impedance.</p>
<div className="callout"><p><strong>The principle.</strong> Motor failures enter the
ledger as discrete events; the true cost includes lost production, expedited
replacement freight and the second motor halfway through the same slow failure. On
the sites we have analysed, the all-in cost of an unprotected motor fleet on this
grid reaches [PERCENTAGE] of annual revenue once lost production is properly
attributed. We owe our motors a supply they can survive; the instruments to verify it
cost less than the third failure.</p></div>
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
