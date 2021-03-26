function zeros(n) {
  let result = 0

  for (let i = 5; 1 <= Math.floor(n / i); i *= 5) {
    result += Math.floor(n / i)
  }

  return result
}

console.log(zeros(100))