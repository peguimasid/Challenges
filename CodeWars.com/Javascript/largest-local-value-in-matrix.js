/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function getMaxAround(grid, x, y) {
  let result = 0;

  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      result = Math.max(result, grid?.[i]?.[j]);
    }
  }

  return result;
}

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function largestLocal(grid) {
  const n = grid.length;

  const result = new Array(n - 2)
    .fill(null)
    .map(() => new Array(n - 2).fill(0));

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      result[i][j] = getMaxAround(grid, i + 1, j + 1);
    }
  }

  return result;
}

const mat1 = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];

const mat2 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 2, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

console.log(largestLocal(mat1));
console.log(largestLocal(mat2));
