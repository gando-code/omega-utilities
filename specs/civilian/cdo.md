# Causal Discovery Oracle (CDO)

## Theorem
Pearl's structural causal model (SCM) framework and do-calculus (1995). Causal structure can, under identifiability conditions, be recovered from observational data alone — not just correlations. The do-operator P(Y | do(X)) computes the effect of intervention, distinct from observational conditioning P(Y | X).

## Construction (Civilian Tier)
Given observational data, the oracle runs constraint-based causal discovery (PC algorithm) or functional-causal discovery (LiNGAM) to recover the causal DAG. It returns the set of DAGs consistent with the data and a confidence score per edge. Interventions are then predicted via do-calculus on the recovered graph.

## Civilian Use Cases
- **Drug discovery:** Recover the causal pathway of a treatment, not just correlated biomarkers.
- **Economics:** Identify the true causal drivers of an outcome from observational data.
- **A/B testing without experiments:** Estimate intervention effects from historical data.

## Limitations
Civilian tier assumes identifiability and no hidden confounders (or uses sensitivity analysis). Classified and omega tiers (restricted repo) handle adversarial confounding and reverse-engineer physical law from observation.
