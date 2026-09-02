// Algorithmic Information Complexity Distiller — civilian reference implementation
// Demonstrates approximating Kolmogorov complexity via shortest generative rule search.

export function kolmogorovUpperBound(x: string): { K: number; rule: string } {
  if (/^(\d)\1*$/.test(x)) return { K: 2, rule: `repeat("${x[0]}", ${x.length})` };
  const rle = runLengthEncode(x);
  if (rle.length < x.length) return { K: rle.length, rule: `RLE:${rle}` };
  return { K: x.length, rule: `identity:"${x}"` };
}

function runLengthEncode(s: string): string {
  let out = "", i = 0;
  while (i < s.length) { let j = i; while (j < s.length && s[j] === s[i]) j++; out += s[i] + (j - i); i = j; }
  return out;
}

if (true) {
  console.log("AICD K(00000000):", kolmogorovUpperBound("00000000"));
  console.log("AICD K(01010101):", kolmogorovUpperBound("01010101"));
  console.log("AICD K(random-ish):", kolmogorovUpperBound("01101001"));
}
