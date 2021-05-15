function taumBday(b, w, bc, wc, z) {
  return (
    BigInt(b) * BigInt(Math.min(bc, wc + z)) +
    BigInt(w) * BigInt(Math.min(wc, bc + z))
  );
}

console.log(taumBday(7, 7, 4, 2, 1));

// b = quantity of black gifts
// w = quantity of white gifts
// bc = price of black gifts
// wc = price of white gifts
// z = custo pra converter um presente preto pra um branco e vice versa
