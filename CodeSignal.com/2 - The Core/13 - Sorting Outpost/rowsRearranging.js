function checkIsIncreasing(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const currentNumber = matrix[i][j]
      const nextNumber = matrix[i + 1][j]
      if(currentNumber >= nextNumber) return false
    }
  }

  return true
}

function rowsRearranging(matrix) {
  const sorted = matrix.sort((a, b) => a[0] - b[0])

  return checkIsIncreasing(sorted)
}

let matrix = 
[[2, 7, 1], 
[0, 2, 0], 
[1, 3, 1]]

 console.log(rowsRearranging(matrix))
