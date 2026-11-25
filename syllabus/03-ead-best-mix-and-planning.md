# Module 3: The T Formula, EAD, Best Mix & Dive Planning

## 0. RAID's "T Formula" (Partial Pressure Triangle)

RAID exams refer to the three-variable triangle as the **T Formula**:
- $P_g = F_g \times P$ *(Partial pressure = Fraction of gas $\times$ Absolute pressure in bar)*
- $F_g = P_g / P$ *(Best Mix fraction = Max $PpO_2$ / Absolute pressure)*
- $P = P_g / F_g$ *(Max pressure in bar = Max $PpO_2$ / Fraction of gas $\rightarrow$ subtract $1$ and $\times 10$ for depth in metres)*

## 1. Best Mix Calculation

**Best Mix** finds the highest $FO_2$ you can use for a planned maximum depth without exceeding your $PpO_2$ limit (maximizing NDL while staying safe).

$$\text{Best } FO_2 = \frac{PpO_{2,\max}}{P_{\text{abs}}} = \frac{PpO_{2,\max}}{(\text{Depth (m)} / 10) + 1}$$

> **CRITICAL EXAM RULE: Always round Best Mix DOWN** to a whole percentage (or down to the nearest available standard fill like EAN32/EAN36). Rounding up raises $PpO_2$ above your limit!

### Worked Example
- Planned dive to **$30\text{ m}$** ($P_{\text{abs}} = 4.0\text{ bar}$) at $PpO_{2,\max} = 1.4\text{ bar}$:
  $$\text{Best } FO_2 = \frac{1.4}{4.0} = 0.35 = 35\% \text{ (EAN35)}$$
- Planned dive to **$27\text{ m}$** ($P_{\text{abs}} = 3.7\text{ bar}$) at $1.4\text{ bar}$:
  $$\text{Best } FO_2 = \frac{1.4}{3.7} = 0.3783 = 37.8\% \rightarrow \textbf{37\% (EAN37)} \text{ or } \textbf{EAN36}$$

## 2. Equivalent Air Depth (EAD)

**EAD** tells you the depth on **air (79% $N_2$)** that has the **same nitrogen partial pressure ($PpN_2$)** as your Nitrox mix at your actual depth. Used when planning with air dive tables.

$$\text{EAD (m)} = \left(\frac{FN_2}{0.79} \times P_{\text{abs}} - 1\right) \times 10$$

> **CRITICAL EXAM RULE: Always round EAD UP** to the next deeper table depth when entering air dive tables (conservative).

### Worked Example
- Diving **EAN32** ($FN_2 = 0.68$) at **$30\text{ m}$** ($P_{\text{abs}} = 4.0\text{ bar}$):
  $$\text{EAD} = \left(\frac{0.68}{0.79} \times 4.0 - 1\right) \times 10 = (0.8608 \times 4.0 - 1) \times 10 = (3.443 - 1) \times 10 = 24.4\text{ m}$$
  You load nitrogen as if you were breathing air at **$24.4\text{ m}$** (enter air table at **$25\text{ m}$** or next deeper table row).

## 3. Using a Nitrox-Programmable Dive Computer

Most divers today plan and dive Nitrox using a **mix-adjustable dive computer** rather than EAD tables:
1. **Set $FO_2$ before EVERY dive** (and every repetitive dive!) to match the **analyzed** cylinder percentage — **NEVER round UP fractional percentages** (e.g., if your analyzer reads **`32.8%`**, enter **`32%`** into the computer, per RAID Computer Rule #15, because rounding up understates nitrogen loading).
2. **Set $PpO_2$ max alert to `1.4 bar`** (never `1.6 bar` for recreational planning).
3. **Never share a computer** or switch cylinders without matching the gas setting (wait 24 hours / clear No-Fly before lending/borrowing a computer).
4. **Diving an Air (`21%`) computer on Nitrox:** Allowed as a **conservative backup method** *only if* you calculate your Nitrox TOD/MOD separately, never exceed it, and follow the shorter Air NDLs (RAID Academic p. 32). If a Nitrox computer accidentally resets to `21%`, it no longer protects you from $PpO_2$/MOD oxygen toxicity!
5. **Gas supply vs NDL & Reserve Rules:** Extended NDLs mean you can run out of gas before hitting NDL. RAID open-circuit planning targets ending the dive / reaching reserve at **$50\text{ bar}$** and surfacing after the safety stop with at least **$30\text{ bar}$**. Ascend no faster than **$9\text{ m/min}$**, and always do a **$3\text{–}5\text{ min}$ safety stop at $5\text{ m}$** (required on dives $\ge 15\text{ m}$ or when $\text{NDL} \le 5\text{ min}$).
6. **Table Repetitive Planning (if using Air Tables):** Lookup $\text{EAD}$ (rounded **UP**) in Table 1 $\rightarrow$ get Pressure Group $\rightarrow$ apply Surface Interval in Table 2 $\rightarrow$ look up Residual Nitrogen Time ($\text{RNT}$) and Adjusted NDL in Table 3 ($\text{TBT} = \text{RNT} + \text{ABT}$). Note that your **actual Nitrox certification depth never overrides your base certification depth** (e.g. an Open Water 20 diver is still limited to $20\text{ m}$ even on EAN32).

## 4. Module 3 Checkpoint

1. What is the **Best Mix** (at $1.4\text{ bar}$) for a planned **$25\text{ m}$** Sydney dive?
2. What is the **EAD** of **EAN36** at **$25\text{ m}$** ($P_{\text{abs}} = 3.5\text{ bar}$)?
3. Why must you still monitor tank pressure closely even when your computer shows 45 minutes of NDL remaining?
