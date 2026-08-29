# Architecture

## Tier Model

```
┌──────────────────────────────────────────────────────────┐
│  OMEGA TIER   │  Inter-civilization scale                │
│               │  Causal-horizon mapping, treaty verify    │
├──────────────────────────────────────────────────────────┤
│  CLASSIFIED   │  Government / military                    │
│               │  Full construction, compliance annexes    │
├──────────────────────────────────────────────────────────┤
│  CIVILIAN     │  Public, open-source (THIS REPO)          │
│               │  Specs + reference implementations        │
└──────────────────────────────────────────────────────────┘
```

## Design Principles

1. **Theorem-grounded.** Every utility cites a theorem of mathematics or physics. No heuristics. No LLM wrappers. If a construction cannot be reduced to a theorem, it does not belong here.
2. **Tier-isolated.** Civilian specs reveal the construction at a level safe for public disclosure. Classified and omega tiers add depth, parameter ranges, and adversarial constructions — never exposed in this repo.
3. **Reference-first.** Each utility ships a zero-dependency TypeScript reference implementation that demonstrates the core construction. Production deployments wrap these in hardened runtimes.
4. **Physics-bounded adversaries.** Security claims hold against any adversary bounded by the laws of physics. We do not assume computational hardness alone.

## Data Flow (Civilian Tier)

```
Input ──► Reference Implementation ──► Verdict + Proof Artifact
                                      │
                                      ├─► Civilian: logged, auditable
                                      ├─► Classified: signed, SIEM-forwarded (restricted repo)
                                      └─► Omega: causality-anchored (restricted repo)
```

## Integration

Civilian reference implementations are standalone. The Mobility Moves platform wraps them as Base44 backend functions for production use. See the restricted repository for classified-tier integration contracts.
