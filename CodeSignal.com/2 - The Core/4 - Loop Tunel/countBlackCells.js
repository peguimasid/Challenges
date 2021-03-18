function gcd(a, b) {
  if(b === 0) return a

  return gcd(b, a % b)
}

function countBlackCells(n, m) {
  return n + m + gcd(n, m) - 2
}

// I DONT DO THIS

console.log(countBlackCells(3, 4))