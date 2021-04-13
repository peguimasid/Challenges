function countingValleys(steps, path) {
  let result = 0
  let height = 0

  let enterInValley = false

  for (let i = 0; i < steps; i++) {
    let step = path[i]
    if (step === 'U') height++
    if (step === 'D') height--

    if (height < 0 && !enterInValley) enterInValley = true

    if (height >= 0 && enterInValley) {
      enterInValley = false
      result++
    }
  }

  return result
}

console.log(countingValleys(8, ["U", "D", "D", "D", "U", "D", "U", "U"]))