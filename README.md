# Omega Utilities

> Ten unthought-of, unmodeled, unsimulated utilities — needed by everyone, from civilians to the most advanced classified programs to omega civilizations in any universe.

Each utility is grounded in a theorem of mathematics or physics — not a heuristic, not an LLM wrapper. They scale across three tiers:

| Tier | Audience | Example Use |
|---|---|---|
| **Civilian** | Public, open-source | Privacy-preserving insurance claims, tamper-evident contracts, AI hallucination boundaries |
| **Classified** | Government / military | Intent provenance, attack attribution, physics-guaranteed key distribution |
| **Omega** | Advanced civilizations | Inter-civilization treaty verification, causality-stable records, mapping the observable-universe boundary |

This public repository contains the **civilian-tier specifications** and **open reference implementations**. The classified and omega tiers live in a separate restricted repository (`omega-utilities-classified`).

---

## The Ten Utilities

### 01. Counterfactual Witness Protocol (`CWP`)

**Foundation:** Counterfactual reasoning + ZK proofs

**Civilian use:** See `specs/civilian/cwp.md`.

**Open reference implementation:** `reference/cwp.ts`.

### 02. Quantum Retrocausal Notary (`QRN`)

**Foundation:** Delayed-choice quantum eraser

**Civilian use:** See `specs/civilian/qrn.md`.

**Open reference implementation:** `reference/qrn.ts`.

### 03. Semantic Gravity Compactor (`SGC`)

**Foundation:** Bekenstein bound / holographic entropy

**Civilian use:** See `specs/civilian/sgc.md`.

**Open reference implementation:** `reference/sgc.ts`.

### 04. Gödel Blind-Spot Mapper (`GBSM`)

**Foundation:** Gödel incompleteness

**Civilian use:** See `specs/civilian/gbsm.md`.

**Open reference implementation:** `reference/gbsm.ts`.

### 05. Thermodynamic Reversibility Engine (`TRE`)

**Foundation:** Landauer / Bennett reversible computing

**Civilian use:** See `specs/civilian/tre.md`.

**Open reference implementation:** `reference/tre.ts`.

### 06. Causal Discovery Oracle (`CDO`)

**Foundation:** Pearl SCM / do-calculus

**Civilian use:** See `specs/civilian/cdo.md`.

**Open reference implementation:** `reference/cdo.ts`.

### 07. Bell-Inequality Entanglement Telegraph (`BIET`)

**Foundation:** Bell / CHSH / Tsirelson

**Civilian use:** See `specs/civilian/biet.md`.

**Open reference implementation:** `reference/biet.ts`.

### 08. Algorithmic Information Complexity Distiller (`AICD`)

**Foundation:** Kolmogorov complexity

**Civilian use:** See `specs/civilian/aicd.md`.

**Open reference implementation:** `reference/aicd.ts`.

### 09. Counterfactual Memory Implant Detector (`CMID`)

**Foundation:** Causal consistency vs physical law

**Civilian use:** See `specs/civilian/cmid.md`.

**Open reference implementation:** `reference/cmid.ts`.

### 10. Holographic Causal Horizon Mapper (`HCHM`)

**Foundation:** Causal-set theory + holographic principle

**Civilian use:** See `specs/civilian/hchm.md`.

**Open reference implementation:** `reference/hchm.ts`.

---

## Why These Are Needed

Every existing tool — from consumer apps to classified programs — operates within the same paradigm: observe, correlate, encrypt, detect. These ten utilities operate on the **substrate beneath that paradigm**: causality, information theory, thermodynamics, quantum nonlocality, and the formal limits of logic itself. They answer questions no current tool can ask:

- "What *would have* happened?" (counterfactual proof without revealing the event)
- "Was this record causally edited, not just cryptographically tampered?"
- "What is the shortest program that generates this dataset?" (Kolmogorov complexity)
- "Is this communication channel secure by physics, not by math?" (Bell inequality)
- "What is knowable vs. forever beyond my causal horizon?"

No adversary — classical, quantum, or oracle — bounded by the laws of physics can defeat them, because they are the laws of physics.

---

## Repository Structure

```
omega-utilities/
├── README.md                  # This file
├── ARCHITECTURE.md            # System architecture + tier model
├── LICENSE                    # Apache-2.0
├── CONTRIBUTING.md            # Contribution guide
├── specs/
│   └── civilian/              # Civilian-tier specs (one file per utility)
│       ├── cwp.md
│       ├── qrn.md
│       └── ...
├── reference/                 # Open reference implementations (TypeScript)
│   ├── cwp.ts
│   ├── qrn.ts
│   └── ...
└── .github/workflows/ci.yml   # Build + test pipeline
```

---

## Getting Started

```bash
git clone https://github.com/<owner>/omega-utilities.git
cd omega-utilities

# Run the reference implementations
npx tsx reference/cwp.ts
```

Each reference implementation is self-contained, zero-dependency TypeScript. They demonstrate the core construction of each utility at a civilian-accessible level.

---

## Tiers

- **Civilian** (this repo) — open, Apache-2.0, no restricted content.
- **Classified** (restricted repo) — government/military proposal specs, full construction details, compliance annexes.
- **Omega** (restricted repo) — inter-civilization-scale constructions, causal-horizon mapping, treaty verification protocols.

Access to the restricted repository is by invitation only. See `ACCESS.md` in that repo (not public).

---

## License

Apache-2.0 — see [LICENSE](LICENSE).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All utilities must remain pure math/physics — no heuristics, no LLM wrappers. Each utility must cite its founding theorem.
