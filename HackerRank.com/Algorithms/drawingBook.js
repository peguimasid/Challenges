function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2)
  const totalTurns = Math.floor(n / 2)

  return Math.min(pageTurns, totalTurns - pageTurns)
}

console.log(pageCount(6, 5))