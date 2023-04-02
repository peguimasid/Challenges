/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
  return spells.reduce((acc, curr, index) => {
    acc[index] += potions
      .map((potionStrength) => potionStrength * curr)
      .filter((potionStrength) => potionStrength >= success).length;
    return acc;
  }, new Array(spells.length).fill(0));
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
