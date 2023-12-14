// for each cell => (ones_in_row + ones_in_col) - (zeros_in_row - zeros_in_col)

// For each row and col in mat:
// store in a object the amount: zerosInRow = {}, onesInRow = {}, zerosInCol = {}, onesInCol = {}
// run again into the matrix replacing using the formula

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
function onesMinusZeros(grid) {}

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
