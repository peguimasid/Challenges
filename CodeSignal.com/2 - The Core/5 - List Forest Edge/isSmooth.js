function arraySizeIsEven(array) {
  return array.length % 2 === 0
}

function arraySizeIsOdd(array) {
  return array.length % 2 !== 0
}

function getSumOfMiddleElements(array) {
  const middle = array.length / 2
  const firstMiddleElement = array[middle - 1]
  const secondMiddleElement = array[middle]
  const sumOfMiddleNumbers = firstMiddleElement + secondMiddleElement

  return sumOfMiddleNumbers
}

function isSmooth(array) {
  const firstNumber = array[0]
  const lastNumber = array[array.length - 1]

  if(firstNumber !== lastNumber) return false

  if(arraySizeIsEven(array)) {
    const middleElementsSum = getSumOfMiddleElements(array)
    if(middleElementsSum !== firstNumber) return false
  }

  if(arraySizeIsOdd(array)) {
    let middle = Math.floor(array.length / 2)
    if(array[middle] !== firstNumber) return false
  }

  return true
}

console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12]))