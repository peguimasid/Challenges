/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  return candies.map(
    (kidCandies) => kidCandies + extraCandies >= Math.max(...candies)
  );
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
