function utopianTree(n) {
  let result = 0

  for (let i = 0; i <= n; i++) i % 2 === 0 ? result += 1 : result *= 2

  return result
}

console.log(utopianTree(0))