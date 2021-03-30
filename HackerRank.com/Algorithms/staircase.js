function staircase(n) {
  let i = 1
  while (n !== i - 1) {
    console.log(`${' '.repeat(n - i)}${'#'.repeat(i)}`)
    i++
  }
}

console.log(staircase(6))