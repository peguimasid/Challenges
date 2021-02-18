function digitDifferenceSort(array) {
  let numbersWithDifference = [] // { number, diff, index }

  for(let i = 0; i < array.length; i++) {
    let bigNumber = Math.max(...String(array[i]))
    let smallNumber = Math.min(...String(array[i]))

    let difference = Math.abs(bigNumber - smallNumber)

    numbersWithDifference.push({ number: array[i], diff: difference, index: i })
  }

  numbersWithDifference.sort((a, b) => b.index - a.index)

  let result = []

  let difference = 0

  while(numbersWithDifference.length) {
    let index = numbersWithDifference.findIndex(number => number.diff === difference)

    if (index >= 0) {
      result.push(numbersWithDifference[index].number)
      numbersWithDifference.splice(index, 1)
    } else {
      difference++
    }
  }

  return result
}

console.log(digitDifferenceSort([152, 23, 7, 887, 243]))

// 152 -> 5 - 1 = 4 ///// 5º
// 23 -> 3 - 2 = 1 ///// 3º
// 7 -> 7 - 7 = 0 ///// 1º
// 887 -> 8 - 7 = 1 ///// 2º
// 243 -> 4 - 2 = 2 ///// 4º

// [7, 887, 23, 243, 152]