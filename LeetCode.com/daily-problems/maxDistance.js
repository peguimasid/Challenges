const iterateAndMark = (grid) => {
  const toMark = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) toMark.push([i, j]);
    }
  }

  for (const [row, col] of toMark) {
    if (grid?.[row]?.[col - 1] === 0) grid[row][col - 1] = 1;
    if (grid?.[row]?.[col + 1] === 0) grid[row][col + 1] = 1;
    if (grid?.[row + 1]?.[col] === 0) grid[row + 1][col] = 1;
    if (grid?.[row - 1]?.[col] === 0) grid[row - 1][col] = 1;
  }
};

const allSquaresFilled = (grid) => {
  for (const row of grid) {
    for (const cell of row) {
      if (cell === 0) return false;
    }
  }

  return true;
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = (grid) => {
  let result = 0;

  if (!grid.some((row) => row.some((cell) => cell === 1))) return -1;
  if (!grid.some((row) => row.some((cell) => cell === 0))) return -1;

  while (!allSquaresFilled(grid)) {
    result++;
    iterateAndMark(grid);
  }

  return result;
};

const grid1 = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];

const grid2 = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const grid3 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

console.log(maxDistance(grid1));
console.log(maxDistance(grid2));
console.log(maxDistance(grid3));
