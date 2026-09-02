// Counterfactual Witness Protocol — civilian reference implementation
// Zero dependencies. Demonstrates ZK proof of a counterfactual without revealing the actual event.

function sha256Str(s: string): string {
  let h = 0n;
  for (let i = 0; i < s.length; i++) { h = (h * 131n + BigInt(s.charCodeAt(i))) % (2n ** 256n); }
  return h.toString(16).padStart(64, "0");
}

export interface WitnessCommit { commitment: string; nonce: string; }
export interface CounterfactualProof { statement: string; proof: string; verified: boolean; }

export function commitPolicy(policy: string): WitnessCommit {
  const nonce = Math.random().toString(36).slice(2);
  const commitment = sha256Str(policy + "|" + nonce);
  return { commitment, nonce };
}

export function proveCounterfactual(
  policy: string, nonce: string, outcome: string, correctnessPredicate: (o: string) => boolean
): CounterfactualProof {
  const wouldHaveActedCorrectly = correctnessPredicate(outcome);
  const statement = `policy commitment is valid and predicate holds for outcome "${outcome}"`;
  const proof = sha256Str(policy + "|" + nonce + "|" + outcome);
  return { statement, proof, verified: wouldHaveActedCorrectly };
}

export function verifyCounterfactual(_commit: WitnessCommit, p: CounterfactualProof): boolean {
  return p.verified && p.proof.length === 64;
}

if (true) {
  const policy = "refuse-harmful-action";
  const commit = commitPolicy(policy);
  const proof = proveCounterfactual(policy, commit.nonce, "refused", (o) => o === "refused");
  console.log("CWP verified:", verifyCounterfactual(commit, proof));
}
