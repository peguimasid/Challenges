/**
 * @param {number} n
 * @return {number}
 */
function pivotInteger(n) {
  const x = Math.sqrt((n * (n + 1)) / 2);

  if (x % 1 !== 0) return -1;

  return Math.floor(x);
}

// Ache o elemento `x`, tal que:
// - A soma entre `1` e `x` seja igual a soma entre `x` e `n`

console.log(pivotInteger(8)); // 6
console.log(pivotInteger(1)); // 1
console.log(pivotInteger(4)); // -1
