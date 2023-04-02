/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
  potions.sort((a, b) => a - b);
  const result = [];

  for (const spell of spells) {
    const rel = success / spell;
    let left = 0;
    let right = potions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (potions[mid] < rel) left = mid + 1;
      if (potions[mid] >= rel) right = mid - 1;
    }
    result.push(potions.length - left);
  }

  return result;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));
