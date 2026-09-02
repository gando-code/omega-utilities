// Bell-Inequality Entanglement Telegraph — civilian reference implementation
// Demonstrates the CHSH inequality check (classical simulation of Bell test).

export function chshCorrelator(
  e_ab: number, e_abp: number, e_apb: number, e_apbp: number
): number {
  return e_ab - e_abp + e_apb + e_apbp;
}

export function bellVerdict(S: number): { violated: boolean; bound: string } {
  if (Math.abs(S) > 2) return { violated: true, bound: "quantum (Tsirelson 2√2 ≈ 2.828)" };
  return { violated: false, bound: "classical (|S| ≤ 2)" };
}

if (true) {
  const S = chshCorrelator(0.707, -0.707, 0.707, 0.707);
  console.log("BIET S =", S.toFixed(3), "verdict:", bellVerdict(S));
}
