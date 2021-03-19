function rowSumOddNumbers(n) {

  let number = 1
  let difference = 0

  for (let i = 0; i < n; i++) {
    number += difference
    difference += 2
  }

  let result = 0

  for (let i = 0; i < n; i++) {
    result += number
    number += 2
  }

  return result
}

console.log(rowSumOddNumbers(1)) //      1
console.log(rowSumOddNumbers(2)) //    3 + 5 = 8
console.log(rowSumOddNumbers(3)) //  7 + 9 + 11 = 27
console.log(rowSumOddNumbers(4)) //  13 + 15 + 17 + 19 = 64