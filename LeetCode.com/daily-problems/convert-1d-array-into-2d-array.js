/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
function construct2DArray(original, m, n) {
  if (m * n !== original.length) return [];

  const result = new Array(m).fill(null).map(() => new Array(n).fill(null));

  for (let i = 0; i < original.length; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result[row][col] = original[i];
  }

  return result;
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1,2], [3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
