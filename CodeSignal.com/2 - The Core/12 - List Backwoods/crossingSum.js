function crossingSum(matrix, a, b) {
  let result = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    result += matrix[a][i];
  }

  for (let i = 0; i < matrix.length; i++) {
    result += matrix[i][b];
  }

  result -= matrix[a][b]

  return result
}

let matrix = 
[[1, 1, 1, 1], 
 [2, 2, 2, 2], 
 [3, 3, 3, 3]]

console.log(crossingSum(matrix, 1, 3))