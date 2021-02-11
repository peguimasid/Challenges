function swapDiagonals(matrix) {
  for(let i = 0 ; i < matrix.length; i++) {
    let temp = matrix[i][i]
    matrix[i][i] = matrix[i][matrix.length - i - 1]
    matrix[i][matrix.length - i - 1] = temp
  }

  return matrix
}

let matrix = 
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

console.log(swapDiagonals(matrix))