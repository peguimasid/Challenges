function cutTheSticks(arr) {
  let result = []

  while(arr.length) {
    result.push(arr.length)

    const minStick = Math.min(...arr)

    arr = arr.map(stick => stick - minStick).filter(stick => stick !== 0)
  }

  return result
}

console.log(cutTheSticks([1, 2, 3]))