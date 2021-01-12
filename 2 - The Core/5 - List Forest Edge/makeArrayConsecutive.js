function indexNotExistsIn(array, i) {
  return array.indexOf(i) === -1
}

function makeArrayConsecutive2(statues) {
  let result = 0

  let minValue = Math.min(...statues)
  let maxValue = Math.max(...statues)
  
  for(let i = minValue; i < maxValue; i++) {
    if(indexNotExistsIn(statues, i)) result++
  }

  return result
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))