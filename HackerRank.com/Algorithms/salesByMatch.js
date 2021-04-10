function sockMerchant(n, ar) {
  let frequencyCounter = {}

  for (let sock of ar) {
    frequencyCounter[sock] ? frequencyCounter[sock]++ : frequencyCounter[sock] = 1
  }

  let result = 0

  for (let key in frequencyCounter) {
    result += Math.floor(frequencyCounter[key] / 2)
  }

  return result
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]))