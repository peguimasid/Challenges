/**
 * @param {number[][]} grid
 * @param {number} index
 * @return {number[]}
 */
function getCol(grid, index) {
  const result = [];

  for (const row of grid) {
    result.push(row[index]);
  }

  return result;
}

/**
 * @param {number[]} column
 * @return {object}
 */
function countFrequency(column) {
  const result = { zeroes: 0, ones: 0 };

  for (const value of column) {
    if (value === 0) result.zeroes++;
    if (value === 1) result.ones++;
  }

  return result;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
function matrixScore(grid) {
  // for each row, if starts with zero, flip
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    if (row[0] === 0) {
      grid[i] = row.map((i) => (i === 0 ? 1 : 0));
    }
  }

  // for each column, if has mores zeroes than ones, flip
  for (let i = 0; i < grid[0].length; i++) {
    const column = getCol(grid, i);
    const { ones, zeroes } = countFrequency(column);
    if (zeroes > ones) {
      for (const row of grid) {
        row[i] = row[i] === 0 ? 1 : 0;
      }
    }
  }

  return grid.reduce((acc, row) => {
    acc += parseInt(row.join(''), 2);
    return acc;
  }, 0);
}

const grid1 = [
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [1, 1, 0, 0],
];

console.log(matrixScore(grid1)); // 39
