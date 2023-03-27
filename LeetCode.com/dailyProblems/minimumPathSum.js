/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
  let result = Number.MAX_SAFE_INTEGER;

  const traverse = (i, j, sum) => {
    if (i === grid.length - 1 && j === grid[0].length - 1) {
      result = Math.min(result, sum);
    }
    if (grid[i + 1] !== undefined) traverse(i + 1, j, sum + grid[i + 1][j]);
    if (grid[i][j + 1] !== undefined) traverse(i, j + 1, sum + grid[i][j + 1]);
  };

  traverse(0, 0, grid[0][0]);

  return result;
};

// prettier-ignore
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7
// prettier-ignore
console.log(minPathSum([[1,2,3],[4,5,6]])); // 12
// prettier-ignore
console.log(minPathSum([[0,0],[0,0]])); // 0
