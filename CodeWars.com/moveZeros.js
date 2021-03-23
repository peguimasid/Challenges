var moveZeros = function (arr) {
  const arrayWithoutZeros = arr.filter(item => item !== 0)
  const zeros = arr.filter(item => item === 0)

  return arrayWithoutZeros.concat(zeros)
}
// Other Solution
var moveZeros = function (arr) {
  return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0))
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]))