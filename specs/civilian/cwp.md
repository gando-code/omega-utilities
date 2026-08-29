# Counterfactual Witness Protocol (CWP)

## Theorem
Counterfactual reasoning (Pearl, 2000) combined with zero-knowledge proofs (Goldwasser–Micali–Rackoff, 1985). One can prove a statement about a counterfactual world without revealing the actual world that produced it.

## Construction (Civilian Tier)
A witness commits to an action policy π. Given an observed outcome y, the witness produces a ZK proof that "had I followed π, I would have defended correctly" — without revealing π or the actual event stream. The proof verifies against a public commitment to π and a public correctness predicate.

## Civilian Use Cases
- **Insurance claims:** Prove you would have taken reasonable care without revealing private behavior data.
- **AI accountability:** Prove an AI would have refused a harmful action without revealing the model.
- **Employment:** Prove you would have met a performance bar without revealing your actual record.

## Limitations
Civilian tier proves correctness against a *published* predicate. Classified and omega tiers (restricted repo) handle adversarial predicate selection, multi-party witness protocols, and cross-light-cone consistency.
