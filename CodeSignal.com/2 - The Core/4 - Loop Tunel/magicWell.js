function magicalWell(a, b, n) {
  let result = 0

  for(let i = 0; i < n; i++) {
    result+= a * b
    a++
    b++
  }

  return result
}

console.log(magicalWell(1, 2, 2))