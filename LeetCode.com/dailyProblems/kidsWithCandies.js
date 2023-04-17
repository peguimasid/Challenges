/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  const mostCandieAmount = Math.max(...candies);

  return candies.map(
    (kidCandiesAmount) => kidCandiesAmount + extraCandies >= mostCandieAmount
  );
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
