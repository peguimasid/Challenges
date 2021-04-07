function migratoryBirds(arr) {
  let frequencyCounter = {}

  for (let bird of arr) {
    frequencyCounter[bird] ? frequencyCounter[bird]++ : frequencyCounter[bird] = 1
  }

  let maxBirdCount = 0

  for (let bird in frequencyCounter) {
    maxBirdCount = Math.max(frequencyCounter[bird], maxBirdCount)
  }

  let result = Number.POSITIVE_INFINITY

  for (let bird in frequencyCounter) {
    if (frequencyCounter[bird] === maxBirdCount) {
      result = Math.min(result, bird)
    }
  }

  return result
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))