function isInfiniteProcess(a, b) {
  if(a === b) {
    return false
  }

  if(Math.abs(a - b) > 20) {
    return true
  }

  a++
  b--

  return isInfiniteProcess(a, b)
}

console.log(isInfiniteProcess(2, 6))