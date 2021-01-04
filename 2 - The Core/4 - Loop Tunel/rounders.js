function rounders(value) {
  let result = 0
  let counter = 0

  while (value > 10) {
    value = Math.round(value/10)
    counter++
  }

  result = value * Math.pow(10, counter)

  return result
}

console.log(rounders(1234))