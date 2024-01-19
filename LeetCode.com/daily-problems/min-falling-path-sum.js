/**
 * @param {number[][]} matrix
 * @return {number}
 */
function minFallingPathSum(matrix) {
  const n = matrix.length;
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let row = 1; row < n; row++) {
    for (let col = 0; col < n; col++) {
      dp[row][col] = Math.min(
        matrix[row][col] + (dp[row - 1][col - 1] ?? Number.MAX_SAFE_INTEGER),
        matrix[row][col] + (dp[row - 1][col] ?? Number.MAX_SAFE_INTEGER),
        matrix[row][col] + (dp[row - 1][col + 1] ?? Number.MAX_SAFE_INTEGER)
      );
    }
  }

  return Math.min(...dp.pop());
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
