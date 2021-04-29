// function permutationEquation(p) {
//   let result = []

//   for (let i = 1; i <= p.length; i++) {
//     let find = p.indexOf(i) + 1

//     let findTwo = p.indexOf(find) + 1

//     result.push(findTwo)
//   }

//   return result
// }

function permutationEquation(p) {
  return p.map((_, index) => p.indexOf(p.indexOf(index + 1) + 1) + 1)
}

console.log(permutationEquation([4, 3, 5, 1, 2]))