/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
  const rowMin = new Array(matrix.length).fill(Number.MAX_SAFE_INTEGER);
  const colMax = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      rowMin[i] = Math.min(rowMin[i], matrix[i][j]);
      colMax[j] = Math.max(colMax[j], matrix[i][j]);
    }
  }

  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j];
      if (rowMin[i] === value && colMax[j] === value) {
        result.push(value);
      }
    }
  }

  return result;
}

console.log(
  luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
  ])
);

console.log(
  luckyNumbers([
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
  ])
); // [12]

console.log(
  luckyNumbers([
    [7, 8],
    [1, 2],
  ])
); // [7]
