function arrayReplace(array, elemToReplace, substitutionElem) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === elemToReplace) array[i] = substitutionElem
  }
  return array;
}

console.log(arrayReplace([1, 2, 1], 1, 3))