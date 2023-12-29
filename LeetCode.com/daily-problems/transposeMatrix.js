/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
  const numRows = matrix[0].length || 0;
  const result = new Array(numRows).fill().map(() => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[j].push(matrix[i][j]);
    }
  }

  return result;
}

const mat1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transpose(mat1)); // [[1,4,7],[2,5,8],[3,6,9]]

const mat2 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(transpose(mat2)); // [[1,4],[2,5],[3,6]]
