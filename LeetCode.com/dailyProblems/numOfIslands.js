/**
 * @param {string[][]} grid
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const preventCountSameIsland = (grid, x, y) => {
  if (
    x < 0 ||
    x >= grid.length ||
    y < 0 ||
    y >= grid[x].length ||
    grid[x][y] === '2' ||
    grid[x][y] === '0'
  )
    return;

  grid[x][y] = '2';

  preventCountSameIsland(grid, x + 1, y);
  preventCountSameIsland(grid, x - 1, y);
  preventCountSameIsland(grid, x, y + 1);
  preventCountSameIsland(grid, x, y - 1);
};

/**
 * @param {string[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        preventCountSameIsland(grid, i, j);
        result++;
      }
    }
  }

  return result;
};

// const grid = [
//   ['1', '1', '1', '1', '0'],
//   ['1', '1', '0', '1', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '0', '0', '0'],
// ];

const grid = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

// const grid = [
//   ['1', '1', '1'],
//   ['0', '1', '0'],
//   ['1', '1', '1'],
// ];

console.log(numIslands(grid));
