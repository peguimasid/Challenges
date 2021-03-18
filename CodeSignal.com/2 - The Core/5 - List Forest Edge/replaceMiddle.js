function arraySizeIsEven(array) {
  return array.length % 2 === 0
}

function arraySizeIsOdd(array) {
  return array.length % 2 !== 0
}

function getSumOfMiddleElementsAndReplace(array) {
  const middle = array.length / 2
  const firstMiddleElement = array[middle - 1]
  const secondMiddleElement = array[middle]
  const sumOfMiddleNumbers = firstMiddleElement + secondMiddleElement

  array[middle] = sumOfMiddleNumbers
  array.splice(middle - 1, 1)
  
  return array
}

function replaceMiddle(array) {
  if(arraySizeIsEven(array)) {
    const arrayWithMiddleElementsReplaced = getSumOfMiddleElementsAndReplace(array)
    
    return arrayWithMiddleElementsReplaced
  }

  if(arraySizeIsOdd(array)) return array
}

console.log(replaceMiddle([45, 23, 12, 33, 12, 453, -234, -45]))