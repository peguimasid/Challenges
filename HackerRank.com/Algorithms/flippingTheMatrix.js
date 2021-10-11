function flippingMatrix(matrix) {
  let result = 0;

  const length = Math.floor(matrix.length);

  for (let i = 0; i < length / 2; i++) {
    for (let j = 0; j < length / 2; j++) {
      const maxVal = Math.max(
        matrix[i][j],
        matrix[i][length - j - 1],
        matrix[length - i - 1][j],
        matrix[length - i - 1][length - j - 1]
      );

      result += maxVal;
    }
  }

  return result;
}

console.log(
  flippingMatrix([
    [1, 2],
    [3, 4],
  ])
);

// [[1, 2], [3, 4]]
// [[1, 2], [4, 3]] // revers row 1
// [[4, 2], [1, 3]] // reverse col 0
