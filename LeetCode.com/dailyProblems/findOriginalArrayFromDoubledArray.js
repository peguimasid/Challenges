/**
 * @param {number[]} changed
 * @return {number[]}
 */
const findOriginalArray = (changed) => {
  changed.sort((a, b) => a - b);

  let result = [];
  let map = new Map();

  for (let i = 0; i < changed.length; i++) {
    const num = changed[i];
    const numHalf = map.get(num / 2);

    if (num % 2 || !numHalf) {
      map.set(num, (map.get(num) ?? 0) + 1);
    } else {
      result.push(num / 2);
      map.set(num / 2, numHalf - 1);
    }
  }

  return changed.length / result.length === 2 ? result : [];
};

console.log(findOriginalArray([1, 3, 4, 2, 6, 8]));
console.log(findOriginalArray([6, 3, 0, 1]));
console.log(findOriginalArray([1]));
