/**
 * @param {number[]} a
 * @param {number[]} b
 */
function arrayDiff(a, b) {
  const bSet = new Set(b);
  return a.filter((value) => !bSet.has(value));
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2], [1])); // [2,2]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2], [])); // [1,2,2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
