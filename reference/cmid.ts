// Counterfactual Memory Implant Detector — civilian reference implementation
// Demonstrates causal-consistency checks against physical law (entropy, light-cone).

export interface Record { content: string; claimedEntropyBits: number; claimedTimestamp: string; claimedLocation: string; }

export function causalConsistencyCheck(r: Record, observedEntropyBits: number, lightconeOk: boolean): {
  consistent: boolean; failedChecks: string[];
} {
  const failed: string[] = [];
  if (Math.abs(r.claimedEntropyBits - observedEntropyBits) > observedEntropyBits * 0.1) {
    failed.push("entropy mismatch — record claims more/less information than physically produced");
  }
  if (!lightconeOk) failed.push("timestamp outside causal past — record could not have arrived");
  return { consistent: failed.length === 0, failedChecks: failed };
}

if (true) {
  const r: Record = { content: "event-log", claimedEntropyBits: 1024, claimedTimestamp: "2026-01-01T00:00:00Z", claimedLocation: "node-1" };
  console.log("CMID check:", causalConsistencyCheck(r, 1020, true));
  console.log("CMID tampered:", causalConsistencyCheck(r, 500, false));
}
