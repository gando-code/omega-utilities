# Gödel Blind-Spot Mapper (GBSM)

## Theorem
Gödel's First Incompleteness Theorem (1931): any consistent formal system F capable of arithmetic contains a sentence G such that neither G nor ¬G is provable in F. Chaitin (1974) strengthened this: some true statements are unprovable because they encode more information than the axioms of the system.

## Construction (Civilian Tier)
Given a formal system or AI model, the mapper identifies the class of true-but-unprovable statements — the "blind spots." For AI models, these are inputs where the model's output is correct but its training/proof system cannot justify it. The mapper returns the boundary: what the model can prove vs. what it can only guess.

## Civilian Use Cases
- **AI hallucination boundaries:** Know exactly where your model is guessing vs. proving.
- **Formal verification gaps:** Find the statements a verifier cannot check, before relying on it.
- **Education:** Teach the limits of formal systems concretely, not abstractly.

## Limitations
Civilian tier maps blind spots for decidable approximations. Classified and omega tiers (restricted repo) map the formal limits of arbitrary axiom systems, including those of adversarial civilizations.
