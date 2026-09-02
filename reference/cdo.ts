// Causal Discovery Oracle — civilian reference implementation
// Demonstrates constraint-based causal DAG discovery (PC algorithm sketch).

export type Edge = { from: string; to: string; confidence: number; }

export function discoverCausalDAG(
  vars: string[], corr: Record<string, Record<string, number>>
): Edge[] {
  const edges: Edge[] = [];
  for (const a of vars) {
    for (const b of vars) {
      if (a === b) continue;
      const r = corr[a]?.[b] ?? 0;
      if (Math.abs(r) > 0.5) {
        if (vars.indexOf(a) < vars.indexOf(b)) {
          edges.push({ from: a, to: b, confidence: Math.abs(r) });
        }
      }
    }
  }
  return edges;
}

if (true) {
  const dag = discoverCausalDAG(["rain", "wet", "slip"], {
    rain: { rain: 1, wet: 0.9, slip: 0.6 },
    wet: { rain: 0.9, wet: 1, slip: 0.8 },
    slip: { rain: 0.6, wet: 0.8, slip: 1 },
  });
  console.log("CDO discovered edges:", dag);
}
