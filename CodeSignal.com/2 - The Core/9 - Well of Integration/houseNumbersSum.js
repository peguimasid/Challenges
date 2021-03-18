function houseNumbersSum(array) {
  let result = 0

  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) return result

    result += array[i]
  }

  return result
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]))