function convertArrayToBinaryAndJoin(array) {
  let result = 0

  console.log

  const arrayConvertedToBinaryWithoutLeadingZeros = array.map(number => number.toString(2), )
  const arrayConvertedToBinary = arrayConvertedToBinaryWithoutLeadingZeros.map(number => {
    return number = "00000000".substr(number.length) + number
  })

  result = arrayConvertedToBinary.reverse('').join('')

  return result
}

function arrayPacking(array) {
  let numbersToBinary = convertArrayToBinaryAndJoin(array)

  return parseInt(numbersToBinary, 2)
}

console.log(arrayPacking([24, 85, 0]))