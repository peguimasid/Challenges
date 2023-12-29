/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = (colors, neededTime) => {
  if (colors.length === 1) return 0;

  let totalSum = 0;
  let max = neededTime[0];
  let subSum = neededTime[0];

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] !== colors[i - 1]) {
      totalSum += subSum - max;
      subSum = 0;
      max = 0;
    }

    subSum += neededTime[i];
    max = Math.max(max, neededTime[i]);
  }

  return totalSum + subSum - max;
};

console.log(minCost('abaac', [1, 2, 3, 4, 5]));

// two pointers
// run as long has deletes
