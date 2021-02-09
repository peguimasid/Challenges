function extractMatrixColumn(matrix, column) {
  return matrix.map(array => array[column])
}

let matrix = 
[[1, 1, 1, 2], 
[0, 5, 0, 4], 
[2, 1, 3, 6]]

console.log(extractMatrixColumn(matrix, 2))