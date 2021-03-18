function getSumIgnoringPosition(array, ignoredPosition) {
  let sum = 0

  for(let j = 0; j < array.length; j++) {
    if(ignoredPosition !== j) sum += array[j]
  }

  return sum
}

function shuffledArray(shuffled) {
  for(let i = 0; i < shuffled.length; i++) {
    let currentPosition = i
    let currentItem = shuffled[i]

    const arraySumIgnoringCurrentPosition = getSumIgnoringPosition(shuffled, currentPosition)

    if(arraySumIgnoringCurrentPosition === currentItem) {
      shuffled.splice(currentPosition, 1)

      return shuffled.sort((a, b) => a - b)
    }
  }
}

console.log(shuffledArray([1, -3, -5, 7, 2]))