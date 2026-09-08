/**
 * @param {number} n
 * @return {number}
 */
function countCommas(n) {
  return Math.max(n - 999, 0);
}

console.log(countCommas(998)); // 0
console.log(countCommas(1002)); // 3

// Note: The constraint is 1 <= n <= 10^5 (where 10^5 = 100,000).
// This means that n will never reach a value (like 1,000,000) that would require more than one comma.
// Therefore, for this problem, we only ever need to count at most one comma for numbers >= 1,000.
