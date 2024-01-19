/**
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(matrix) {
  const n = matrix.length;

  let result = Number.MAX_SAFE_INTEGER;

  function fall(row, col, sum) {
    if (row === n - 1) {
      result = Math.min(result, sum + matrix[row][col]);
    }

    const nextCols = [-1, 0, 1];

    for (const nextCol of nextCols) {
      if (matrix?.[row + 1]?.[col + nextCol]) {
        fall(row + 1, col + nextCol, sum + matrix[row][col]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    fall(0, i, 0);
  }

  return result;
}

const mat1 = [
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
];

console.log(minFallingPathSum(mat1)); // 13 => 1 -> 4 -> 8 or 1 -> 5 -> 7

const mat2 = [
  [-19, 57],
  [-40, -5],
];

console.log(minFallingPathSum(mat2)); // -59 => -19 -> -40
