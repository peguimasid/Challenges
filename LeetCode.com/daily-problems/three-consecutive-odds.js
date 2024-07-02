/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds(arr) {
  let oddCount = 0;

  for (const value of arr) {
    const isOdd = value % 2;
    if (isOdd && oddCount === 2) return true;
    if (isOdd && oddCount < 2) oddCount++;
    if (!isOdd) oddCount = 0;
  }

  return false;
}

console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
