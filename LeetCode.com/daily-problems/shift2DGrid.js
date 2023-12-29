/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
  const result = [];
  const arr = grid.flat();
  const m = grid[0].length;

  while (k--) arr.unshift(arr.pop());

  while (arr.length) result.push(arr.splice(0, m));

  return result;
};

console.log(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  )
);

// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
