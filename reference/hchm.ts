// Holographic Causal Horizon Mapper — civilian reference implementation
// Demonstrates computing an observer's causal horizon from a causal model.

export type CausalEvent = { id: string; dependsOn: string[]; }

export function mapCausalHorizon(observerId: string, events: CausalEvent[]): {
  pastHorizon: string[]; futureHorizon: string[]; foreverUnknowable: string[];
} {
  const past = new Set<string>();
  const stack = [observerId];
  while (stack.length) {
    const id = stack.pop()!;
    const ev = events.find((e) => e.id === id);
    if (!ev) continue;
    for (const dep of ev.dependsOn) if (!past.has(dep)) { past.add(dep); stack.push(dep); }
  }
  const future = new Set<string>();
  for (const ev of events) if (ev.dependsOn.includes(observerId)) future.add(ev.id);
  const unknowable = events.map((e) => e.id).filter((id) => id !== observerId && !past.has(id) && !future.has(id));
  return { pastHorizon: [...past], futureHorizon: [...future], foreverUnknowable: unknowable };
}

if (true) {
  const events: CausalEvent[] = [
    { id: "A", dependsOn: [] },
    { id: "B", dependsOn: ["A"] },
    { id: "C", dependsOn: ["B"] },
    { id: "D", dependsOn: [] },
  ];
  console.log("HCHM horizon for C:", mapCausalHorizon("C", events));
}
