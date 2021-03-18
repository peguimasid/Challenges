function sortByHeight(array) {
  let result = []
  let treesIndex = []

  for(let i = 0; i < array.length; i++) {
    const currentItem = array[i]

    currentItem === -1 ? treesIndex.push(i) : result.push(currentItem)
  }

  result = result.sort((a, b) => a - b)

  for(let tree of treesIndex) {
    result.splice(tree, 0, -1)
  }

  return result
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))