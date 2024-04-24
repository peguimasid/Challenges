/**
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  const F = new Array(38).fill(0);

  F[1] = F[2] = 1;

  for (let i = 0; i <= n; i++) {
    F[i + 3] = F[i] + F[i + 1] + F[i + 2];
  }

  return F[n];
}

console.log(tribonacci(4)); // 4
console.log(tribonacci(25)); // 1389537
