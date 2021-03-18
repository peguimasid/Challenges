//SOLUÇÃO SEM GRAÇA
// function sortByLength(inputArray) {
//   return inputArray.sort((a, b) => a.length - b.length)
// }

function findSmallerValue(array) {
  let smallValueLength = Number.POSITIVE_INFINITY
  
  for(let i = 0; i < array.length; i++) {
    if(array[i].length < smallValueLength) smallValueLength = array[i].length
  }

  for(let i = 0; i < array.length; i++) {
    if(array[i].length === smallValueLength) {
      return [array[i], i]  
    }
  }
}

function sortByLength(array) {
  let result = []

  while(array.length) {
    let [item, itemIndex] = findSmallerValue(array)
    result.push(item)
    array.splice(itemIndex, 1)
  }

  return result
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]))