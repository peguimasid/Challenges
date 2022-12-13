/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = (matrix) => {
  let result = Infinity;

  const fall = (matrix, x, y, sum = 0) => {
    if (!matrix[x]) return (result = Math.min(sum, result));
    if (matrix[x][y - 1]) fall(matrix, x + 1, y - 1, sum + matrix[x][y]);
    if (matrix[x][y]) fall(matrix, x + 1, y, sum + matrix[x][y]);
    if (matrix[x][y + 1]) fall(matrix, x + 1, y + 1, sum + matrix[x][y]);
  };

  for (let i = 0; i < matrix[0].length; i++) {
    fall(matrix, 0, i, 0);
  }

  return result;
};

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
);
console.log(
  minFallingPathSum([
    [-19, 57],
    [-40, -5],
  ])
);
