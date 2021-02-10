function getDiagonalNumbers(matrix) {
  let diagonalOne = []
  let diagonalTwo = []

  for(let i = 0; i < matrix.length; i++) {
    diagonalOne.push(matrix[i][i])
    diagonalTwo.push(matrix[i][matrix.length - i - 1])
  }

  return [diagonalOne, diagonalTwo]
}

function reverseOnDiagonals(matrix) {
  let [diagonalOne, diagonalTwo] = getDiagonalNumbers(matrix)

  setMatrixDiagonalOneNumbersReversed(diagonalOne)
  setMatrixDiagonalTwoNumbersReversed(diagonalTwo)

  return matrix

  function setMatrixDiagonalOneNumbersReversed(diagonalOne) {
    for(let i = 0; i < diagonalOne.length; i++) {
      matrix[i][i] = diagonalOne[diagonalOne.length - i - 1]
    }
  }
  function setMatrixDiagonalTwoNumbersReversed(diagonalTwo) {
    for(let i = diagonalTwo.length - 1; i >= 0; i--) {
      matrix[diagonalTwo.length - i - 1][i] = diagonalTwo[i]
    }
  }
}

let matrix = 
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]

console.log(reverseOnDiagonals(matrix))