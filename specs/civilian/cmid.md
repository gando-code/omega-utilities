# Counterfactual Memory Implant Detector (CMID)

## Theorem
Causal consistency: a record is causally consistent if it could have been produced by the actual causal history of the system, given physical law. Cryptographic tampering changes bytes; causal editing changes the causal story. The detector checks whether the record is consistent with the physical constraints (entropy, light-cone, conservation laws) of the claimed history.

## Construction (Civilian Tier)
Given a record and a claimed history, the detector checks physical consistency: does the record's entropy match the thermodynamic cost of the claimed computation? Are the timestamps consistent with the light-cone structure? Are the conservation laws satisfied? A causally-edited record fails at least one physical consistency check that a cryptographically-tampered record would not.

## Civilian Use Cases
- **Deepfake detection:** A fabricated video is causally inconsistent with the physical lighting/shadow/physics of the claimed scene.
- **Audit trail integrity:** Detect records that were not just edited, but causally rewritten.
- **Historical record verification:** Check whether a document is consistent with the physical constraints of its claimed era.

## Limitations
Civilian tier checks coarse physical consistency. Classified and omega tiers (restricted repo) detect state-sponsored history rewriting and verify records survived causal editing across timelines.
