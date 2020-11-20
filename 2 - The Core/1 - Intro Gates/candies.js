function candies(n, m) {
  if(m % n === 0) return m;

  return candies(n, m - 1)
}

console.log(candies(3, 10))