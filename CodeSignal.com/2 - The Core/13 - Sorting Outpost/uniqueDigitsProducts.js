function uniqueDigitProducts(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    array[i] = String(array[i])

    const firstDigit = Number(array[i][0])

    let product = firstDigit
    
    for(let j = 1; j < array[i].length; j++) product *= array[i][j]

    if(result.indexOf(product) === -1) result.push(product)
  }

  return result.length
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]))