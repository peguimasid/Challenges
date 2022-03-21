function expandedForm(num) {
  num = num.toString()

  let nums = []

  for (let i = 0; i < String(num).length; i++) {
    let currentNumber = num[i]
    if (currentNumber != 0) nums.push(num.slice(i))
  }

  let numSumToGetResult = nums.map(num => `${num[0]}${'0'.repeat(num.length - 1)}`)

  let result = ''

  for (let i = 0; i < numSumToGetResult.length; i++) {
    let num = numSumToGetResult[i]

    if (i === numSumToGetResult.length - 1) {
      result += num
    } else {
      result += `${num} + `
    }
  }

  return result
}

console.log(expandedForm(70304)) // '70000 + 300 + 4'

// console.log(expandedForm(42)) // '40 + 2'
