/* Nitrox maths and generated calculation questions.
   Plain script: loaded by the page with <script src>, and by tests/lint through globalThis.NitroxMath.
   All depths in metres of seawater, pressures in bar. */
(function (root) {
  "use strict";

  var rng = Math.random;
  function setRandom(fn) { rng = fn || Math.random; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rng() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function pick(a) { return a[Math.floor(rng() * a.length)]; }

  // Rounding with a small epsilon so exact results (e.g. 1.4 / 0.28) don't fall to the wrong side.
  function fl(x) { return Math.floor(x + 1e-9); }
  function ce(x) { return Math.ceil(x - 1e-9); }
  function f2(x) { return (Math.round(x * 100) / 100).toFixed(2); }
  function f1(x) { return (Math.round(x * 10) / 10).toFixed(1); }

  // NOAA oxygen exposure limits: [PO2 bar, single-dive minutes, 24-hour minutes]
  var NOAA = [[1.6, 45, 150], [1.5, 120, 180], [1.4, 150, 180], [1.3, 180, 210], [1.2, 210, 240], [1.1, 240, 270], [1.0, 300, 300], [0.9, 360, 360], [0.8, 450, 450], [0.7, 570, 570], [0.6, 720, 720]];
  var MIXES = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  var REC_MAX_O2 = 40;

  function pabs(depth) { return depth / 10 + 1; }
  function po2(fo2, depth) { return fo2 * pabs(depth); }
  /** Exact MOD in metres for an O2 fraction and PO2 limit. Round down with fl() for use. */
  function mod(fo2, limit) { return (limit / fo2 - 1) * 10; }
  /** Exact best-mix O2 percentage for a depth and PO2 limit. Round down and cap at 40% for use. */
  function bestMix(depth, limit) { return limit / pabs(depth) * 100; }
  function bestMixRounded(depth, limit) { return Math.min(REC_MAX_O2, fl(bestMix(depth, limit))); }
  /** Exact equivalent air depth in metres. Round up with ce() for air tables. */
  function ead(fo2, depth) { return ((1 - fo2) / 0.79 * pabs(depth) - 1) * 10; }
  /** Conservative NOAA row: the lowest table PO2 at or above the given PO2. Null above 1.6 bar. */
  function noaaRow(p) { for (var i = NOAA.length - 1; i >= 0; i--) { if (NOAA[i][0] >= p - 1e-9) return NOAA[i]; } return null; }
  function cnsPercent(p, minutes) { var r = noaaRow(p); return r ? Math.round(minutes / r[1] * 100) : null; }
  /** CNS% remaining after a surface interval, using a 90-minute half-time. */
  function cnsAfterSurface(cns, minutes) { return cns * Math.pow(0.5, minutes / 90); }

  /* ---------- generated calculation questions ----------
     Each returns {q, a, why, kind, answer}: a[0] is the correct option, answer its raw value. */
  function uniq(correct, cands, fmt, fill) {
    var out = [correct], seen = {}; seen[correct] = 1;
    for (var i = 0; i < cands.length && out.length < 4; i++) { var c = cands[i]; if (c == null || seen[c]) continue; seen[c] = 1; out.push(c); }
    var k = 1; while (out.length < 4) { var c2 = fill(k++); if (!seen[c2]) { seen[c2] = 1; out.push(c2); } }
    return out.map(fmt);
  }
  var GEN = {
    pabs: function () {
      var d = pick([8, 12, 14, 15, 18, 22, 24, 26, 28, 32, 35, 38]), P = pabs(d);
      return { kind: "pabs", inputs: { depth: d }, answer: P, q: "What is the absolute pressure at " + d + " m in seawater?",
        a: uniq(P, [d / 10, d / 10 + 2, +(P + 0.5).toFixed(1)], function (x) { return (+x).toFixed(1) + " bar"; }, function (k) { return +(P + k * 0.3).toFixed(1); }),
        why: d + " ÷ 10 + 1 = " + P.toFixed(1) + " bar." };
    },
    po2: function () {
      var m = pick(MIXES), f = m / 100, d = pick([15, 18, 20, 22, 24, 25, 26, 28, 30, 32]), P = pabs(d), v = po2(f, d);
      return { kind: "po2", inputs: { o2: m, depth: d }, answer: f2(v), q: "What is the PO₂ of EAN" + m + " at " + d + " m?",
        a: uniq(f2(v), [f2(f * d / 10), f2((1 - f) * P), f2(f * (P + 1))], function (x) { return x + " bar"; }, function (k) { return f2(v + k * 0.07); }),
        why: "Pabs = " + P.toFixed(1) + " bar. " + f.toFixed(2) + " × " + P.toFixed(1) + " = " + f2(v) + " bar" + (v > 1.4 + 1e-9 ? ". That's over the 1.4 bar working limit." : ".") };
    },
    mod: function () {
      var m = pick(MIXES), f = m / 100, lim = pick([1.4, 1.4, 1.4, 1.6]), x = mod(f, lim), c = fl(x), alt = (lim === 1.4 ? 1.6 : 1.4);
      return { kind: "mod", inputs: { o2: m, limit: lim }, answer: c, q: "What is the MOD of EAN" + m + " at a PO₂ of " + lim.toFixed(1) + " bar (rounded the conservative way)?",
        a: uniq(c, [ce(x) === c ? c + 1 : ce(x), fl(mod(f, alt)), fl(lim / f * 10), c - 3], function (v) { return v + " m"; }, function (k) { return c - k - 1; }),
        why: "(" + lim.toFixed(1) + " ÷ " + f.toFixed(2) + " − 1) × 10 = " + f2(x) + " m, rounded down to " + c + " m." };
    },
    best: function () {
      var d = pick([22, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]), P = pabs(d), raw = bestMix(d, 1.4), c = bestMixRounded(d, 1.4);
      return { kind: "best", inputs: { depth: d, limit: 1.4 }, answer: c, q: "What is the best mix for a planned maximum depth of " + d + " m at 1.4 bar?",
        a: uniq(c, [ce(raw) === c ? c + 1 : Math.min(ce(raw), 41), fl(bestMix(d, 1.6)), Math.min(40, fl(1.4 / (d / 10) * 100)), c - 4], function (v) { return "EAN" + v; }, function (k) { return c - k - 1; }),
        why: "1.4 ÷ " + P.toFixed(1) + " = " + raw.toFixed(1) + "%, rounded down to EAN" + c + (raw > 40 ? " (capped at the 40% recreational limit)." : ".") };
    },
    ead: function () {
      var m = pick([30, 32, 34, 36, 38]), f = m / 100, d = pick([15, 18, 20, 22, 24, 25, 26, 28]);
      if (mod(f, 1.4) < d) d = fl(mod(f, 1.4)) - 2;
      var P = pabs(d), x = ead(f, d), c = ce(x), wrongFormula = ce((f / 0.21 * P - 1) * 10);
      return { kind: "ead", inputs: { o2: m, depth: d }, answer: c, q: "What is the EAD of EAN" + m + " at " + d + " m, ready to enter an air table?",
        a: uniq(c, [fl(x) === c ? c - 1 : fl(x), d, wrongFormula > 60 ? c + 4 : wrongFormula, c + 3], function (v) { return v + " m"; }, function (k) { return c + k + 1; }),
        why: "(" + (1 - f).toFixed(2) + " ÷ 0.79 × " + P.toFixed(1) + " − 1) × 10 = " + f1(x) + " m, rounded up to " + c + " m." };
    },
    cns: function () {
      var r = pick(NOAA.slice(0, 6)), t = pick([15, 20, 30, 40, 45, 60]); if (t > r[1]) t = r[1];
      var v = Math.round(t / r[1] * 100);
      return { kind: "cns", inputs: { po2: r[0], minutes: t }, answer: v, q: "Your PO₂ is " + r[0].toFixed(1) + " bar for " + t + " min. The NOAA single-dive limit at that PO₂ is " + r[1] + " min. What CNS% have you used?",
        a: uniq(v, [Math.round(t / r[2] * 100), Math.round(r[1] / t), 100 - v, Math.min(100, v * 2)], function (x) { return x + "%"; }, function (k) { return v + k * 5; }),
        why: t + " ÷ " + r[1] + " × 100 = " + v + "%." };
    },
    half: function () {
      var c = pick([40, 50, 60, 70, 80, 90]), si = pick([90, 180]), v = cnsAfterSurface(c, si);
      return { kind: "half", inputs: { cns: c, minutes: si }, answer: v, q: "You surface with " + c + "% CNS. After a " + si + "-minute surface interval breathing air, roughly what CNS% remains?",
        a: uniq(v, [c, si === 90 ? c / 4 : c / 2, c - si / 10], function (x) { return x + "%"; }, function (k) { return v + k * 5; }),
        why: "CNS% halves roughly every 90 minutes: " + c + "% → " + (c / 2) + "%" + (si === 180 ? " → " + (c / 4) + "%" : "") + "." };
    }
  };
  var GEN_KEYS = ["pabs", "po2", "po2", "mod", "mod", "mod", "best", "best", "ead", "ead", "cns", "half"];
  function genQ(kind) { var g = GEN[kind || pick(GEN_KEYS)](); g.tag = "Calculation"; return g; }

  var api = {
    setRandom: setRandom, shuffle: shuffle, pick: pick, fl: fl, ce: ce, f1: f1, f2: f2,
    NOAA: NOAA, MIXES: MIXES, REC_MAX_O2: REC_MAX_O2,
    pabs: pabs, po2: po2, mod: mod, bestMix: bestMix, bestMixRounded: bestMixRounded, ead: ead,
    noaaRow: noaaRow, cnsPercent: cnsPercent, cnsAfterSurface: cnsAfterSurface,
    GEN_KINDS: Object.keys(GEN), genQ: genQ
  };
  root.NitroxMath = api;
  if (typeof module === "object" && module && module.exports) module.exports = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
