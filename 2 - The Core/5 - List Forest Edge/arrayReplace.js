function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  let result = []

  for(let number of inputArray) {
    if(number === elemToReplace) {
      result.push(substitutionElem)
    } else {
      result.push(number)
    }
  }

  return result
}

console.log(arrayReplace([1, 2, 1], 1, 3)) // [3, 2, 3]