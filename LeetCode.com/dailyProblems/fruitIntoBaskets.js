/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = (fruits) => {
  if (new Set(fruits).size < 3) return fruits.length;

  let result = 0;
  let before = 0;

  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === fruits[i + 1]) {
      before++;
      continue;
    }
    const set = new Set();
    for (let j = i; j < fruits.length; j++) {
      set.add(fruits[j]);
      if (set.size === 2) result = Math.max(result, j - i + 1 + before);
      if (set.size > 2) break;
    }
    before = 0;
  }

  return result;
};

console.log(totalFruit([0, 0, 1, 1])); // 4

console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
