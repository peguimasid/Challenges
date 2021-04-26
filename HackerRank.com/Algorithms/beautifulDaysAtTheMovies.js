function beautifulDays(i, j, k) {
  return Array
    .from({ length: j - i + 1 })
    .map((_num, index) => i + index)
    .filter(num => Number.isInteger(((num - Number(String(num).split('').reverse().join(''))) / k))).length
}

console.log(beautifulDays(20, 23, 6))