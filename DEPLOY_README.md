# PKNB Consult — Insights pages: what this is and how to deploy it

## What is in this folder

```
insights.html                          ← replaces your current insights.html
insights/journal.css                   ← shared stylesheet (one file, all articles)
insights/power-factor-penalty.html     ← Read · 6 min
insights/sub-metering-roi.html         ← Read · 8 min  (also the Featured analysis)
insights/hybrid-power-telecom.html     ← Read · 10 min
insights/compressed-air-losses.html    ← Read · 7 min
insights/voltage-instability-motors.html ← Read · 9 min
insights/defence-of-the-boring-audit.html ← Read · 5 min
```

Every "Read analysis →" and "Read · X min →" link now resolves to a real page.
No link points to `#` anymore.

## How to deploy on Hostinger (5 minutes)

1. Open Hostinger's File Manager for the site (or connect by FTP).
2. In the site root, **create a folder named `insights`** if one does not exist.
3. Upload the six article HTML files **and** `journal.css` into that `insights/`
   folder.
4. Upload `insights.html` into the **site root**, replacing the existing one.
   (Keep a copy of the old file first, in case you want to revert.)
5. Visit `/insights.html` and click every link. All seven should open.

The article pages use only a relative link to `insights/journal.css` and relative
`../` links back to your existing pages, so nothing breaks regardless of your domain
— this keeps working when you move off the Hostinger temporary domain to
pknbconsult.com.

## The gaps this closes (and the ones still open)

**Closed by these files:**
- Dead `#` links on every journal entry — now real pages.
- Dead Featured-analysis link — now points to the sub-metering article.
- The "Q1Q2Q3Q4recovered" broken fragment — replaced with a clean metrics panel.
- Footer phone placeholder `+233 (0) 000 000 000` — now your two real numbers.
- Footer WhatsApp `#` — now `wa.me/233241307209`.
- The abstraction line "compound across operating periods" — rewritten to
  "quietly compound on the electricity bill".

**Still needs your action — these are not things code can fix for you:**

1. **The placeholders.** Each article contains `[BRACKETED]` figures
   (e.g. `[PERCENTAGE]`, `[DURATION]`, `[VALUE]`). These are deliberate. Before you
   consider these final, open each file and either (a) insert the real figure from
   your project records, (b) soften to a verbal range, or (c) delete the sentence.
   A short editor-note at the foot of each article explains this convention to the
   reader, so the pages are publishable as-is, but the sooner you fill them the
   stronger they read. Search each file for `[` to find them.

2. **The LinkedIn link** in the footer is still `#` because I do not have your
   LinkedIn URL. Send it and I will set it, or create the company page first — it is
   worth having before the Broll / Nestlé approaches.

3. **The same footer fix is needed on every other page** (index, about, services,
   etc.), which all still show the placeholder phone number. The corrected footer
   block is in every file here — copy that `<footer>` markup into the other pages,
   or tell me and I will produce corrected versions of those pages too.

4. **The dates** are now consistent with publication. If you deploy in May 2026, a
   reader seeing "22 April 2026" on the newest piece is fine — it reads as recent,
   not aspirational, because the article is genuinely there.

## A note on styling

These pages are a self-contained editorial design rather than a copy of your existing
template, because the live site's raw CSS was not retrievable to match exactly. They
carry the same masthead, the same navigation, the same footer, and the same voice, so
they read as part of the site. If you would rather they inherit your exact existing
stylesheet, send me the site's CSS file (or the raw HTML source of any page) and I
will re-skin all seven to match precisely.

## Technical schematics (added)

Each of the six articles now contains one bespoke blueprint-style schematic, placed
at the point in the argument where it lands hardest:

- **Power factor** — three load-signature traces showing why one bill number hides
  three different causes.
- **Sub-metering** — panel-wired vs cost-centre-wired metering architecture, side by
  side.
- **Hybrid telecom** — load curves against the PV generation envelope for a
  day-peaking vs a flat/night-peaking site.
- **Compressed air** — energy-disposition flow: kWh in, splitting to leaks,
  artificial demand, and useful work.
- **Voltage instability** — a simulated one-week busbar trace against the
  motor-safe envelope.
- **Boring audit** — coverage comparison: what a platform sees vs what the
  walk-through finds.

These are hand-built SVG (vector), not photographs. They were chosen deliberately
over stock imagery for three reasons: (1) they render perfectly sharp at any screen
size and zoom, with no pixelation; (2) the entire seven-page site stays around
100&nbsp;KB, so it loads fast on mobile data; (3) a precise engineering figure signals
genuine technical authority, whereas generic stock photography of switchboards reads
as decoration — which your own About page explicitly warns against ("no generic stock
businessmen ... those kill authority"). The schematic styling lives in the same
`journal.css`, so no extra files are needed beyond what is already listed above.

If you later want a photographic hero image on the Insights index (a real photograph
of your own site work, anonymised, would be ideal — not stock), that is a separate
addition and worth doing only with genuine project photography.

## Motion (added)

Four of the six schematics now animate on load. The principle was strict: **motion
only where it reinforces the engineering argument**, never decoration.

- **Voltage** — the seven-day trace plots itself left to right like a live power
  quality logger, with a pulsing cursor that parks at the end. It makes the figure
  read as a real instrument recording.
- **Power factor** — the three load signatures draw in staggered sequence, leading
  the eye across the three cases in the order the argument makes them.
- **Hybrid telecom** — the PV generation envelope rises from the baseline like the
  sun coming up, animating the article's central metaphor.
- **Compressed air** — energy visibly flows from the compressor; the leak branches
  bleed downward noticeably faster than the main feed, so the loss feels real
  rather than merely labelled.

The two comparison diagrams (sub-metering architecture, audit coverage) are
deliberately left **static** — motion on a side-by-side comparison distracts from
the comparison.

All motion is pure CSS (no JavaScript, no libraries), so it cannot fail to load.
Hovering any animated figure replays its trace, letting a reader re-run the
"instrument". Every animation honours the operating-system `prefers-reduced-motion`
setting: a visitor with motion sensitivity, or that accessibility setting enabled,
sees the complete static figure instantly with no degradation. This is the same
discipline a serious engineering practice would apply to any system — the elegant
behaviour and the safe fallback are both built in, not bolted on.


