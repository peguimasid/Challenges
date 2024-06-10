/**
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
  return heights
    .toSorted((a, b) => a - b)
    .reduce((acc, curr, i) => (curr === heights[i] ? acc : acc + 1), 0);
}

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
console.log(heightChecker([5, 1, 2, 3, 4])); // 5
console.log(heightChecker([1, 2, 3, 4, 5])); // 0
