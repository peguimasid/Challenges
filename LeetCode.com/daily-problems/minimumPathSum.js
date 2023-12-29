/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  const n = grid.length;
  const m = grid[0].length;

  for (let i = 1; i < n; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  for (let i = 1; i < m; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[n - 1][m - 1];
};

// prettier-ignore
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7
// prettier-ignore
console.log(minPathSum([[1,2,3],[4,5,6]])); // 12
// prettier-ignore
console.log(minPathSum([[0,0],[0,0]])); // 0
