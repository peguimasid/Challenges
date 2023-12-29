// for each cell => (ones_in_row + ones_in_col) - (zeros_in_row - zeros_in_col)

// For each row and col in mat:
// store in a object the amount: zerosInRow = {}, onesInRow = {}, zerosInCol = {}, onesInCol = {}
// run again into the matrix replacing using the formula

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function onesMinusZeros(grid) {
  const zerosInRow = {};
  const onesInRow = {};
  const zerosInCol = {};
  const onesInCol = {};

  for (const x in grid) {
    if (!zerosInRow[x]) zerosInRow[x] = 0;
    if (!onesInRow[x]) onesInRow[x] = 0;
    for (const y in grid[x]) {
      if (!zerosInCol[y]) zerosInCol[y] = 0;
      if (!onesInCol[y]) onesInCol[y] = 0;

      if (grid[x][y] === 0) {
        zerosInRow[x]++;
        zerosInCol[y]++;
      }
      if (grid[x][y] === 1) {
        onesInRow[x]++;
        onesInCol[y]++;
      }
    }
  }

  for (const x in grid) {
    for (const y in grid[x]) {
      grid[x][y] = onesInRow[x] + onesInCol[y] - zerosInRow[x] - zerosInCol[y];
    }
  }

  return grid;
}

const mat = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];

console.log(onesMinusZeros(mat));

// RESULT:
// [
//   [0 ,  0, 4],
//   [0 ,  0, 4],
//   [-2, -2, 2],
// ];
