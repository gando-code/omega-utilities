# Thermodynamic Reversibility Engine (TRE)

## Theorem
Landauer's Principle (1961): erasing one bit dissipates at least kT·ln(2) joules. Bennett (1973) and Fredkin–Toffoli (1982): computation can be made logically reversible, in principle dissipating zero heat. Reversible computing avoids erasure, so the thermodynamic cost approaches zero.

## Construction (Civilian Tier)
A reversible computing runtime executes logically reversible gates (Toffoli, Fredkin). No bits are erased, so the Landauer bound is not hit. Civilian implementations demonstrate measurable energy savings on reversible workloads and provide a library of reversible primitives.

## Civilian Use Cases
- **Energy-efficient computing:** Reduce datacenter energy bills on reversible workloads (simulation, linear algebra).
- **Edge devices:** Compute on thermally constrained devices (implantables, satellites).
- **Sustainable AI:** Reversible matrix multiplication for greener inference.

## Limitations
Civilian tier is reversible at the gate level. Classified and omega tiers (restricted repo) achieve full thermodynamic reversibility with low thermal signature and computation that survives heat death.
