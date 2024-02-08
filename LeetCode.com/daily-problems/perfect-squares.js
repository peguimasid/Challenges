/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const isSquare = (x) => Math.pow(Math.floor(Math.sqrt(x)), 2) === x;

  // check if already is a square
  if (isSquare(n)) return 1;

  // check if is a sum of 4 squares
  while (n % 4 === 0) {
    n /= 4;
  }

  if (n % 8 === 7) return 4;

  // check if it is a sum of 2 squares
  for (let i = 0; i <= n; i++) {
    if (isSquare(n - i * i)) return 2;
  }

  return 3;
}

console.log(numSquares(12)); // 3 => 4 + 4 + 4
console.log(numSquares(13)); // 2 => 4 + 9
