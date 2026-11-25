# Module 1: Benefits, Tradeoffs & Gas Physics

## 1. What is Enriched Air Nitrox (EANx)?

- **Normal Air:** ~21% Oxygen ($O_2$) + ~79% Nitrogen ($N_2$) (ignoring ~1% trace gases; diving calculations use `0.21` $O_2$ and `0.79` $N_2$).
- **Enriched Air Nitrox (EANx):** Any nitrogen-oxygen breathing mix with **more than 21% oxygen** — recreational certification covers **22% to 40% $O_2$** (ISO 11107).
- **Standard recreational mixes:**
  - **EAN32** (32% $O_2$ / 68% $N_2$) — also called "NOAA Nitrox I"; common all-rounder for 20–30 m Sydney dives.
  - **EAN36** (36% $O_2$ / 64% $N_2$) — also called "NOAA Nitrox II"; best for shallower dives (~18–28 m) needing long bottom times.

## 2. Primary Benefit & Common Myths

- **Main benefit:** Less nitrogen in your breathing gas ($FN_2$ drops from 79% to 68% or 64%) means your tissues absorb **less nitrogen** at a given depth and time, giving you:
  1. **Longer No-Decompression Limits (NDLs)** — especially on repetitive dives and in the 18–30 m range.
  2. **Shorter surface intervals** between repetitive dives (or extra conservatism if you dive air NDL limits on Nitrox).
- **Myths (Exam Traps!):**
  - *Does Nitrox let you dive deeper?* **NO.** Nitrox has a **shallower** Maximum Operating Depth (MOD) than air because oxygen becomes toxic under pressure.
  - *Does Nitrox reduce gas consumption (SAC rate)?* **NO.** You breathe the same volume of gas per minute at depth; your tank lasts the same time (unless you stay shallower).
  - *Does Nitrox eliminate decompression sickness (DCS)?* **NO.** It only reduces nitrogen loading; you must still ascend slowly, do safety stops, and respect NDL/computer limits.
  - *Does Nitrox eliminate nitrogen narcosis?* Most agencies treat $O_2$ and $N_2$ similarly for narcosis at recreational depths — **do not rely on Nitrox to reduce narcosis.**

## 3. Dalton's Law & Partial Pressures

**Dalton's Law:** The total pressure of a gas mixture equals the sum of the partial pressures of its individual gases.

- **Ambient (absolute) pressure in seawater (metric):**
  $$P_{\text{abs}} = \frac{\text{Depth (m)}}{10} + 1 \text{ bar}$$
  *(e.g. $0\text{ m} = 1\text{ bar}$, $10\text{ m} = 2\text{ bar}$, $20\text{ m} = 3\text{ bar}$, $30\text{ m} = 4\text{ bar}$)*
- **Partial pressure of oxygen ($PpO_2$):**
  $$PpO_2 = FO_2 \times P_{\text{abs}}$$
  where $FO_2$ is the oxygen fraction as a decimal (e.g. 32% = `0.32`).
- **Partial pressure of nitrogen ($PpN_2$):**
  $$PpN_2 = FN_2 \times P_{\text{abs}}$$
  where $FN_2 = 1 - FO_2$.

### Worked Examples
1. **Air (21%) at $30\text{ m}$ ($4.0\text{ bar}$):**
   $PpO_2 = 0.21 \times 4.0 = 0.84\text{ bar}$ | $PpN_2 = 0.79 \times 4.0 = 3.16\text{ bar}$
2. **EAN32 at $30\text{ m}$ ($4.0\text{ bar}$):**
   $PpO_2 = 0.32 \times 4.0 = 1.28\text{ bar}$ | $PpN_2 = 0.68 \times 4.0 = 2.72\text{ bar}$
3. **EAN36 at $25\text{ m}$ ($3.5\text{ bar}$):**
   $PpO_2 = 0.36 \times 3.5 = 1.26\text{ bar}$ | $PpN_2 = 0.64 \times 3.5 = 2.24\text{ bar}$

## 4. Module 1 Checkpoint

Before moving to Module 2, make sure you can answer:
1. What is the recreational Nitrox oxygen percentage range?
2. Why does Nitrox have a *shallower* maximum depth than air?
3. Calculate $PpO_2$ and $PpN_2$ for **EAN34 at $20\text{ m}$**.
