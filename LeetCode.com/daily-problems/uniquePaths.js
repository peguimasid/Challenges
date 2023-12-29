const factorial = (n) => {
  if (n == 0) return 1;

  let result = 1;

  for (let i = 2; i <= n; i++) result *= i;

  return result;
};

function nCr(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  let q = m + n - 2;
  let r = n - 1;
  return nCr(q, r);
};

console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));

// m = 3 | n = 2

// [][x]
// [][x]
// [][x]

// [][]
// [x][]
// [x][x]

// [][]
// [x][x]
// [][x]
