/**
 * @param {number[][]} grid
 * @return {number}
 */
function matrixScore(grid) {
  const n = grid.length;
  const m = grid[0].length;

  let result = 2 ** (m - 1) * n;

  for (let c = 1; c < m; c++) {
    let curr = 0;
    for (let r = 0; r < n; r++) {
      curr += grid[r][0] === grid[r][c] ? 1 : 0;
    }
    result += Math.max(curr, n - curr) * 2 ** (m - 1 - c);
  }

  return result;
}

const grid1 = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];

console.log(matrixScore(grid1)); // 39
