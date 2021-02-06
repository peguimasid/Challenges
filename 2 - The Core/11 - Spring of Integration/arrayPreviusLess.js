function arrayPreviousLess(items) {
  let result = [];

  for(let i = 0; i < items.length; i++) {
    let smallValue = null

    for(let j = 0; j < i; j++) {
      items[j] < items[i] ? smallValue = items[j] : null
    }

    smallValue ? result.push(smallValue) : result.push(-1) 
  }

  return result
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5])) // [-1, 3, -1, 2, 4]