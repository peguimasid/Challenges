function integerToStringOfFixedWidth(number, width) {
  let result = ''

  number = number.toString().split('').reverse().join('')

  for(let i = 0; i < width; i++) {
    if(!number[i]) {
      result += '0'
    } else {
      result += number[i]
    }
  }

  result = result.split('').reverse().join('')

  return result
}

console.log(integerToStringOfFixedWidth(1234, 5))