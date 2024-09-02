/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
function construct2DArray(original, m, n) {
  if (m * n !== original.length) return [];

  const result = new Array(m).fill(null).map(() => new Array(n).fill(0));

  let index = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = original[index++];
    }
  }

  return result;
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2)); // [[1,2], [3,4]]
console.log(construct2DArray([1, 2, 3], 1, 3)); // [[1,2,3]]
console.log(construct2DArray([1, 2], 1, 1)); // []
