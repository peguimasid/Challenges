function diagonalDifference(array) {
  let leftDiagonalSum = 0
  let rightDiagonalSum = 0

  for (let i = 0; i < array.length; i++) {
    const currentRow = array[i]

    for (let j = i; j < i + 1; j++) {
      leftDiagonalSum += currentRow[j]
      rightDiagonalSum += currentRow[array.length - j - 1]
    }
  }

  return Math.abs(rightDiagonalSum - leftDiagonalSum)
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]

console.log(diagonalDifference(matrix))