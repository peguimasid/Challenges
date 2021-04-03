function getTotalX(a, b) {
  let result = 0

  for (let i = 1; i <= 100; i++)
    if (a.every(number => i % number === 0) && b.every(number => number % i === 0)) result++

  return result
}

console.log(getTotalX([2, 4], [16, 32, 96]))