/**
 * @param {number} n
 * @return {number}
 */
function countCommas(n) {
  let power = 1000;
  let result = 0;

  while (power <= n) {
    result += n - power + 1;
    power *= 1000;
  }

  return result;
}

// For each power of 1,000 (1,000, 1,000,000, ...), add how many numbers ≥ that value (n - power + 1).
// This sums the total number of commas across all numbers up to n.

// Example:
// countCommas(2_000) = (2_000 - 1_000 + 1) = 1,001
// countCommas(2_200_000) = (2,200,000 - 1,000 + 1) + (2,200,000 - 1,000,000 + 1) = 2,199,001 + 1,200,001 = 3,399,002
console.log(countCommas(2_200_000));
