/**
 * @param {number[][]} grid
 * @return {number}
 */
function getMaximumGold(grid) {
  let result = 0;
  const m = grid.length;
  const n = grid[0].length;

  /**
   * @param {number} i
   * @param {number} j
   * @return {number}
   */
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) {
      return 0;
    }

    const cell = grid[i][j];

    grid[i][j] = 0;

    const up = dfs(i - 1, j);
    const down = dfs(i + 1, j);
    const left = dfs(i, j - 1);
    const right = dfs(i, j + 1);

    grid[i][j] = cell;

    return cell + Math.max(up, down, left, right);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result = Math.max(result, dfs(i, j));
    }
  }

  return result;
}

const grid = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];

console.log(getMaximumGold(grid));
