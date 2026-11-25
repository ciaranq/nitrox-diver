import { describe, expect, test, beforeAll } from "bun:test";
import "../course/nitrox-math.js";

const M = (globalThis as any).NitroxMath;

// Deterministic RNG (mulberry32) so generator tests are reproducible.
function seeded(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

describe("pressure and partial pressure", () => {
  test("absolute pressure is depth / 10 + 1", () => {
    expect(M.pabs(0)).toBe(1);
    expect(M.pabs(25)).toBe(3.5);
    expect(M.pabs(40)).toBe(5);
  });
  test("PO2 = FO2 × Pabs", () => {
    expect(M.f2(M.po2(0.32, 30))).toBe("1.28");
    expect(M.f2(M.po2(0.36, 25))).toBe("1.26");
    expect(M.f2(M.po2(0.21, 10))).toBe("0.42");
  });
});

describe("MOD (rounded down)", () => {
  test.each([
    [0.32, 1.4, 33], [0.36, 1.4, 28], [0.40, 1.4, 25], [0.28, 1.4, 40],
    [0.32, 1.6, 40], [0.36, 1.6, 34], [0.40, 1.6, 30], [0.21, 1.4, 56],
  ])("FO2 %p at %p bar → %p m", (fo2, lim, expected) => {
    expect(M.fl(M.mod(fo2, lim))).toBe(expected);
  });
  test("analysed 32.8% gives a shallower MOD than 32%", () => {
    expect(M.fl(M.mod(0.328, 1.4))).toBe(32);
  });
});

describe("best mix (rounded down, capped at 40%)", () => {
  test.each([[30, 35], [28, 36], [33, 32], [25, 40], [18, 40], [35, 31]])("%p m → EAN%p", (depth, expected) => {
    expect(M.bestMixRounded(depth, 1.4)).toBe(expected);
  });
});

describe("EAD (rounded up for air tables)", () => {
  test("EAN32 at 30 m is 24.4 m, entered as 25 m", () => {
    expect(M.f1(M.ead(0.32, 30))).toBe("24.4");
    expect(M.ce(M.ead(0.32, 30))).toBe(25);
  });
  test("EAN36 at 20 m is 14.3 m, entered as 15 m", () => {
    expect(M.f1(M.ead(0.36, 20))).toBe("14.3");
    expect(M.ce(M.ead(0.36, 20))).toBe(15);
  });
});

describe("CNS clock", () => {
  test("uses the next higher NOAA row", () => {
    expect(M.noaaRow(1.22)[0]).toBe(1.3);
    expect(M.noaaRow(1.4)[0]).toBe(1.4);
    expect(M.noaaRow(1.61)).toBeNull();
  });
  test("CNS% = minutes / limit × 100", () => {
    expect(M.cnsPercent(1.4, 75)).toBe(50);
    expect(M.cnsPercent(1.22, 40)).toBe(22);
  });
  test("halves every 90 minutes at the surface", () => {
    expect(M.cnsAfterSurface(60, 90)).toBe(30);
    expect(M.cnsAfterSurface(60, 180)).toBe(15);
  });
});

describe("generated questions", () => {
  beforeAll(() => M.setRandom(seeded(42)));

  test.each(M.GEN_KINDS as string[])("%s: 300 questions, 4 unique options, first option is correct", (kind) => {
    for (let i = 0; i < 300; i++) {
      const g = M.genQ(kind);
      expect(g.a).toHaveLength(4);
      expect(new Set(g.a).size).toBe(4);
      expect(g.q.length).toBeGreaterThan(10);
      expect(g.why.length).toBeGreaterThan(5);
      const { inputs: x, answer } = g;
      const expected =
        kind === "pabs" ? M.pabs(x.depth) :
        kind === "po2" ? M.f2(M.po2(x.o2 / 100, x.depth)) :
        kind === "mod" ? M.fl(M.mod(x.o2 / 100, x.limit)) :
        kind === "best" ? M.bestMixRounded(x.depth, x.limit) :
        kind === "ead" ? M.ce(M.ead(x.o2 / 100, x.depth)) :
        kind === "cns" ? M.cnsPercent(x.po2, x.minutes) :
        M.cnsAfterSurface(x.cns, x.minutes);
      expect(answer).toBe(expected);
      expect(g.a[0]).toContain(String(answer));
    }
  });

  test("EAD questions never exceed the mix's 1.4 bar MOD", () => {
    for (let i = 0; i < 300; i++) {
      const g = M.genQ("ead");
      expect(g.inputs.depth).toBeLessThanOrEqual(M.mod(g.inputs.o2 / 100, 1.4));
    }
  });
});
