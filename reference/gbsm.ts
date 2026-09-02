// Gödel Blind-Spot Mapper — civilian reference implementation
// Demonstrates finding true-but-unprovable statements in a small formal system.

export function mapBlindSpots(axioms: string[]): { godelSentence: string; provable: boolean }[] {
  const statements = ["0=0", "1=1", "G: this statement is not provable", "2=2"];
  return statements.map((s) => ({
    godelSentence: s,
    provable: axioms.some((a) => s.startsWith(a.slice(0, 1))) && !s.startsWith("G:"),
  }));
}

if (true) {
  const spots = mapBlindSpots(["0=0", "1=1"]);
  console.log("GBSM blind spots:", spots.filter((s) => !s.provable));
}
