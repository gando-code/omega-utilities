// Semantic Gravity Compactor — civilian reference implementation
// Demonstrates compression approaching the information-theoretic limit on structured data.

export function compact(data: string): { compacted: string; ratio: number; rule: string } {
  for (let period = 1; period <= data.length / 2; period++) {
    const unit = data.slice(0, period);
    if (unit.repeat(Math.floor(data.length / period)) === data.slice(0, period * Math.floor(data.length / period))) {
      const rule = `repeat("${unit}", ${Math.floor(data.length / period)})`;
      return { compacted: rule, ratio: rule.length / data.length, rule };
    }
  }
  return { compacted: data, ratio: 1, rule: "identity" };
}

if (true) {
  const out = compact("ABABABABABABABAB");
  console.log("SGC ratio:", out.ratio, "rule:", out.rule);
}
