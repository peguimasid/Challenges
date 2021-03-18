function isPower(n) {
  for(let i = 0; i <= 20; i++) {
    for(let j = 2; j <= 20; j++) {
      if(Math.pow(i, j) === n) return true
    }
  }

  return false
}

console.log(isPower(7))