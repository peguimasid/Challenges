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

// AI Detailed explaining for the given solution

// This JavaScript function numSquares(n) is an implementation of the Lagrange's Four-Square Theorem.
// The theorem states that every natural number can be represented as the sum of four integer squares.
// The function calculates the least number of perfect squares that sum up to n.

// Here's a step-by-step explanation:

// 1. isSquare(x): This helper function checks if a number x is a perfect square.
// It does this by squaring the floor value of the square root of x and comparing it to x.

// 2. if (isSquare(n)) return 1;
// If n is a perfect square, it returns 1 because n can be represented as one square number (itself).

// 3. while (n % 4 === 0) { n /= 4; }: This loop divides n by 4 until n is no longer divisible by 4.
// This is based on the property that if a number is a multiple of 4, it can be expressed as the
// sum of squares of other numbers.

// if (n % 8 === 7) return 4; If n modulo 8 is 7, it returns 4. This is based on the property that a
// number which leaves a remainder of 7 when divided by 8 can always be expressed as a sum of four squares.

// 5. for (let i = 0; i <= n; i++) { if (isSquare(n - i * i)) return 2; }
// This loop checks if n can be expressed as the sum of two squares. It does this by subtracting
// the square of i from n and checking if the result is a perfect square.

// 6. return 3;: If none of the above conditions are met, it returns 3. This is because, according
// to Lagrange's Four-Square theorem, any natural number can always be represented as the sum
// of three squares.

// In summary, this function is trying to find the minimum number of squares that can sum up to n,
// and it does this by checking for specific conditions that would allow n to be represented as the
// sum of 1, 2, 3, or 4 squares.
