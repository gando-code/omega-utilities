// Thermodynamic Reversibility Engine — civilian reference implementation
// Demonstrates a reversible Toffoli gate (no bit erasure → zero Landauer cost).

export function toffoli(a: boolean, b: boolean, c: boolean): [boolean, boolean, boolean] {
  return [a, b, c !== (a && b)];
}

export function inverseToffoli(a: boolean, b: boolean, c: boolean): [boolean, boolean, boolean] {
  return toffoli(a, b, c);
}

export function landauerCostBits(erasedBits: number, tempK = 300): number {
  const k = 1.380649e-23;
  return erasedBits * k * tempK * Math.LN2;
}

if (true) {
  const [a, b, c] = toffoli(true, true, false);
  console.log("TRE Toffoli(true,true,false):", [a, b, c]);
  console.log("TRE reversible (inverse restores):", JSON.stringify(inverseToffoli(a, b, c)));
  console.log("TRE Landauer cost of erasing 1 bit at 300K (J):", landauerCostBits(1));
}
