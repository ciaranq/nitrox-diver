# Study Notes — "The Ultimate Guide to Nitrox Diving" (Scuba Diving magazine)

- **Source:** https://www.scubadiving.com/nitrox-scuba-diving-guide-certification
- **Author:** PADI's content development executive (a PADI Enriched Air Instructor Trainer). The page doesn't give the author's name in the article body.
- **Agency lens:** PADI (Enriched Air Diver course, Recreational Dive Planner). This is **not** NAUI material.
- **Units:** imperial (feet, 33 ft of seawater = 1 atm). The metric equivalent is 10 m per bar.
- Paraphrased notes; retrieved 2026-11-25.

---

## 1. What nitrox is

| Term | Meaning |
|---|---|
| Air / normoxic | ~21% O2 / 79% N2 |
| EAN, EANx, enriched air, nitrox | Any N2/O2 mix with **more than 21% O2** |
| Common premixes | **EAN32** and **EAN36** (e.g. EAN36 = 36% O2 / 64% N2) |
| Recreational ceiling | **40% O2** (EAN40 is the highest mix without advanced certification) |

**The point of nitrox is less nitrogen, not more oxygen.** Less N2 means less N2 absorbed, so you get longer no-stop limits at the same theoretical DCS risk. That risk is never zero.

## 2. No-stop time gains (PADI RDP examples)

| Depth | Air NDL | Nitrox | Nitrox NDL |
|---|---|---|---|
| 100 ft | 20 min | EAN32 | 30 min |
| 70 ft | 40 min | EAN36 (EAD 50 ft) | 80 min |
| 60 ft | — | EAN36 | 80+ min (computer-dependent) |
| 70 ft | — | EAN32 (EAD 56 ft) | 55 min (table) |
| 70 ft | — | EAN40 (EAD 45 ft) | 100 min (table) ⚠️ see note |

- **Sweet spot: 50–100 ft.** Shallower than 50 ft, air NDLs already outlast your gas supply.
- With a computer and a multilevel profile, most nitrox dives are **limited by gas, not NDL**.
- Repetitive dives are longer too, because the previous dive left less residual N2.
- Same dive, more margin: a dive taken *to* the limit on air sits *well within* the limits on nitrox.

## 3. Tables vs computers

- **Tables:** use mix-specific nitrox tables, **or** air tables entered at the **Equivalent Air Depth (EAD)**.
- **Computers** (the most common approach): set the computer to the analysed O2%.

## 4. The cost: oxygen toxicity

- At high O2 **partial pressure**, any mix can become toxic. Nitrox brings O2 depth limits *inside* recreational depths. Air only reaches them well beyond recreational limits.
- **Signs:** convulsions/seizures, visual distortion, ringing ears, nausea, twitching, irritability, dizziness.
- Rare, but an underwater hit can come **without warning**. Losing the regulator during a convulsion means drowning.
- So you **always calculate the max depth (MOD) for your mix** and stay above it.

## 5. Cylinder marking & procedures

- **Green and yellow band** at the top of the tank, just below the crown.
- **Label/tag** with the O2%, the max depth for that mix, and the diver's name.
- The **diver personally analyses** the gas.
- The diver **signs a fill log** recording the O2% and max depth.

## 6. Myths nitrox does NOT fix

| Myth | Reality |
|---|---|
| Less narcosis | Narcosis matters at 100–130 ft, which is where nitrox's O2 limits stop you anyway. O2 is thought to be roughly as narcotic as N2. Dr Peter Bennett (*The Physiology and Medicine of Diving*) calls the benefit too marginal to count. It's **gas** narcosis, not just nitrogen narcosis. |
| Lower gas consumption | Most inhaled O2 is exhaled unused. The urge to breathe is driven by **CO2**, which doesn't depend on the mix. |
| Less fatigue | In a blinded study (unmarked air vs nitrox tanks) divers reported no difference. It's placebo. |
| Dive deeper | The opposite: nitrox gives you a **shallower** floor. Tec divers use it as a **shallow decompression gas**, not a deep gas. |

## 7. Choosing a mix

- Shop premixes (32/36): pick up the tank, **analyse it, confirm the max depth, set the computer**.
- **Custom "best mix"** blends (≤40%) can maximise bottom time for a known depth, especially on square or repetitive profiles at the same depth.
- Dive centres often stock whichever blend best suits the depths of their local sites.

## 8. Equipment & oxygen service

- **Up to 40% O2:** standard scuba gear is accepted under long-standing community practice. The article claims no gear incidents within recreational nitrox limits. **Always follow the manufacturer's rules**, because some are stricter.
- **Exception: the cylinder.** It must be marked for nitrox, and often must be rated for **oxygen service**.
- Why: O2 doesn't burn itself, but it **raises the flammability** of everything it touches. Materials ignite more easily and burn hotter and faster at high O2 *percentage*.
- **Partial-pressure blending** puts **pure O2 into the tank first**, then oxygen-compatible air. So the cylinder must meet oxygen-service standards even though the final mix is ≤40%:
  - O-rings, valve seats and lubricants rated for pure O2
  - Specially cleaned, **annually**

## 9. Certification (PADI Enriched Air Diver)

- **eLearning:** a few hours covering theory, equipment and risk management.
- **In-person:** a day or two with a PADI pro, practising:
  1. Analysing EANx
  2. Setting a dive computer for the mix
  3. Filling out the enriched air log

## 10. Formulas

| Name | Formula (imperial) | Metric equivalent |
|---|---|---|
| PO2 | P(ata) × FO2 | P(bar) × FO2 |
| MOD | ((PO2max ÷ FO2) − 1) × 33 ft | ((PO2max ÷ FO2) − 1) × 10 m |
| Best mix | PO2max ÷ ((Depth + 33) ÷ 33) | PO2max ÷ ((Depth + 10) ÷ 10) |
| EAD | ((FN2 ÷ 0.79) × (D + 33)) − 33 | ((FN2 ÷ 0.79) × (D + 10)) − 10 |

The article uses **1.4** as PO2max in its MOD and best-mix formulas. It gives no EAD formula; the EAD row above is the standard one.

---

## ⚠️ Accuracy notes

- **MOD formula typo on the page:** it reads `*(1.4 ÷ mix%) - 1) X 33`, which has an unbalanced bracket and a stray `*`. The correct form is `((1.4 ÷ FO2) − 1) × 33`.
- **EAD figures check out** against the standard formula: EAN32 at 70 ft → 56 ft, EAN36 at 70 ft → 50 ft, EAN40 at 70 ft → 45 ft.
- **EAN40 at 70 ft = "100 min table limit":** I'm not certain this is right. On the PADI RDP, a 45 ft EAD rounds up to the 50 ft row, which I recall as 80 min. Check against the actual table before relying on it.
- **The article only states the 1.4 working limit.** It doesn't mention the **1.6 contingency limit**, CNS%/OTU tracking, or RAID's TOD (1.4) vs MOD (1.6) terminology. Use the RAID material in `syllabus/` for those.
- **The 40% oxygen-service rule is PADI/industry practice.** Check RAID's equipment rules (Viton O-rings, no silicone grease) where they differ.
