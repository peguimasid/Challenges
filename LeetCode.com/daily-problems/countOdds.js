/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
  let result = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2) result++;
  }

  return result;
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));
