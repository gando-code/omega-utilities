# Quantum Retrocausal Notary (QRN)

## Theorem
Delayed-choice quantum eraser (Kim et al., 2000; Wheeler, 1978). The decision to measure wave-like or particle-like behavior can be made after the photon has already been detected — retroactively determining the recorded pattern.

## Construction (Civilian Tier)
A notarization commit encodes a value into an entangled pair. One half is stored; the other is measured in a basis chosen *after* a consistency check. The delayed measurement basis retroactively validates whether the committed value was consistent with a later-asserted state. Tampering with the stored half breaks the entanglement and is detectable.

## Civilian Use Cases
- **Tamper-evident contracts:** Commit now, retroactively validate consistency at a later audit.
- **Timestamp integrity:** Prove a record existed in a consistent state at commit time.
- **Software supply chain:** Retroactively validate that a build was consistent with its declared inputs.

## Limitations
Civilian tier uses single-pair entanglement. Classified and omega tiers (restricted repo) handle multi-party retrocausal notarization and causality-stable records across light-cones.
