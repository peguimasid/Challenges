function narcissistic(value) {
  return value
    .toString()
    .split('')
    .map(num => Math.pow(num, String(value).length))
    .reduce((acc, curr) => acc + curr) === value
}

console.log(narcissistic(153)) // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

