/**
 * @param {number} n
 * @return {number}
 */
function numberOfMatches(n) {
  if (n === 1) return 0;
  if (n % 2 === 0) return n / 2 + numberOfMatches(n / 2);
  if (n % 2 === 1) return (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1);
}

// if n is even => n / 2 matches played => n / 2 teams in next round
// if n is odd => (n - 1) / 2 matches played => ((n - 1) / 2) + 1 teams in next round

console.log(numberOfMatches(7)); // 6
console.log(numberOfMatches(14)); // 13
