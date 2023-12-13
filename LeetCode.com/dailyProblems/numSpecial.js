/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat) {
  const rowsOnes = {};
  const colsOnes = {};

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    if (!rowsOnes[i]) rowsOnes[i] = 0;
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (!colsOnes[j]) colsOnes[j] = 0;
      if (cell === 1) {
        rowsOnes[i]++;
        colsOnes[j]++;
      }
    }
  }

  let result = 0;

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      if (mat[i][j] === 1 && rowsOnes[i] === 1 && colsOnes[j] === 1) {
        result++;
      }
    }
  }

  return result;
}

const mat1 = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
];

console.log(numSpecial(mat1)); // 1

const mat2 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

console.log(numSpecial(mat2)); // 3
