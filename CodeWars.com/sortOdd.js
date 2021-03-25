// function sortArray(array) {
//   let result = array.filter(number => number % 2 === 0)

//   let arrayWithoutEven = array.filter(number => number % 2 !== 0).sort((a, b) => a - b)
//   let oddPositions = []

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) oddPositions.push(i)
//   }

//   while (arrayWithoutEven.length) {
//     result.splice(oddPositions[0], 0, arrayWithoutEven[0])

//     oddPositions.shift()
//     arrayWithoutEven.shift()
//   }

//   return result
// }

// Better solution
function sortArray(array) {
  const odd = array.filter(number => number % 2 !== 0).sort((a, b) => a - b);

  return array.map(number => number % 2 !== 0 ? odd.shift() : number)
}

console.log(sortArray([5, 8, 6, 3, 4])) // [3, 8, 6, 5, 4]
//                                          ^        ^