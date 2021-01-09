function swap(array, indexOne, indexTwo) {
  let temp = array[indexOne]
  array[indexOne] = array[indexTwo]
  array[indexTwo] = temp
}

function firstReverseTry(array) {
  if(!array.length) return array

  swap(array, 0, array.length - 1)

  return array
}

console.log(firstReverseTry([1, 2, 3, 4, 5])) // [5, 2, 3, 4, 1]