function SeriesSum(n) {
  let result = 0
  let coeficient = 1

  for (let i = 0; i < n; i++) {
    result += 1 / coeficient
    coeficient += 3
  }

  return String(result.toFixed(2))
}

// console.log(SeriesSum(1)) // => 1 = "1.00"
// console.log(SeriesSum(2)) // => 1 + 1/4 = "1.25"
console.log(SeriesSum(5)) // => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"