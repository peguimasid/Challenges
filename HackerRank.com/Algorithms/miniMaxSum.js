function miniMaxSum(arr) {
  let minValue = Math.min(...arr)
  let minValueIndex = arr.indexOf(minValue)
  let arrayWithoutMinValue = arr.map((num, index) => index === minValueIndex ? null : num).filter(item => typeof item === 'number')

  let maxValue = Math.max(...arr)
  let maxValueIndex = arr.indexOf(maxValue)
  let arrayWithoutmaxValue = arr.map((num, index) => index === maxValueIndex ? null : num).filter(item => typeof item === 'number')

  let maxSum = arrayWithoutMinValue.reduce((acc, curr) => acc + curr)
  let minSum = arrayWithoutmaxValue.reduce((acc, curr) => acc + curr)

  console.log(minSum, maxSum)

  return `${minSum} ${maxSum}`
}

console.log(miniMaxSum([1, 3, 5, 7, 9]))