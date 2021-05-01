function findDigits(n) {
  return n
    .toString()
    .split('')
    .map(n => Number(n))
    .filter(num => n % num === 0).length
}

console.log(findDigits(11))