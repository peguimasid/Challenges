function beautifulDays(i, j, k) {
  let count = 0

  return Array
    .from({ length: j - i + 1 })
    .map(num => i + count++)
    .filter(num => Number.isInteger(((num - Number(String(num).split('').reverse().join(''))) / k))).length
}

console.log(beautifulDays(20, 23, 6))