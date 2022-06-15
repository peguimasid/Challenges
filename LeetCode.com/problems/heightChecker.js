/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let result = 0;

  const sorted = [...heights].sort((a, b) => a - b);

  for (const i in heights) {
    heights[i] !== sorted[i] && result++;
  }

  return result;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
