function solution(number) {
  if (number < 0) return 0

  let numbers = []

  for (let i = number - 1; i >= 0; i--) {
    numbers.push(i)
  }

  if (!numbers.length) return 0

  let allMultiples = numbers.filter(num => num % 3 === 0 || num % 5 === 0)

  return allMultiples.reduce((acc, currentVal) => acc + currentVal)
}

console.log(solution(0))