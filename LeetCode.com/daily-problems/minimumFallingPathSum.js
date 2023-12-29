/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = (matrix) => {
  if (matrix.length === 1) return matrix[0][0];

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const previousRowElements = [];
      if (j > 0) previousRowElements.push(matrix[i - 1][j - 1]);
      previousRowElements.push(matrix[i - 1][j]);
      if (j < matrix.length - 1) previousRowElements.push(matrix[i - 1][j + 1]);
      matrix[i][j] += Math.min(...previousRowElements);
    }
  }

  const lastRow = matrix[matrix.length - 1];

  return Math.min(...lastRow);
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
