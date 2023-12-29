/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (x > 0 && y > 0 && matrix[x - 1][y - 1] !== matrix[x][y]) return false;
    }
  }

  return true;
};

const mat = [
  [1, 2],
  [2, 2],
];
// const mat = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 3],
//   [9, 5, 1, 2],
// ];

console.log(isToeplitzMatrix(mat));
