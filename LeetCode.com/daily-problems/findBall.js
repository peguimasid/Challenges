const findBallDropColumn = (row, col, grid) => {
  if (row === grid.length) return col;
  const nextCol = col + grid[row][col];

  const isOutOfBounds = nextCol < 0 || nextCol > grid[0].length - 1;
  const isVShape = grid[row][col] != grid[row][nextCol];

  if (isOutOfBounds || isVShape) return -1;

  return findBallDropColumn(row + 1, nextCol, grid);
};

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = (grid) => {
  const n = grid[0].length;
  return Array(n)
    .fill(0)
    .map((_, i) => findBallDropColumn(0, i, grid));
};

// [ 1,  1,  1, -1, -1]
// [ 1,  1,  1, -1, -1]
// [-1, -1, -1,  1,  1]
// [ 1,  1,  1,  1, -1]
// [-1, -1, -1, -1, -1]
const g = [
  [1, 1, 1, -1, -1],
  [1, 1, 1, -1, -1],
  [-1, -1, -1, 1, 1],
  [1, 1, 1, 1, -1],
  [-1, -1, -1, -1, -1],
];

console.log(findBall(g));
