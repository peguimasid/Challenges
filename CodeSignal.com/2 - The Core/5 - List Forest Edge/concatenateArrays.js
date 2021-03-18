function concatenateArrays(a, b) {
  let result = []
  let i = 0
  let j = 0

  while(i < a.length) {
    result.push(a[i])
    i++
  }

  while(j < b.length) {
    result.push(b[j])
    j++
  }

  return result
}

console.log(concatenateArrays([2, 2, 1], [10, 11]))