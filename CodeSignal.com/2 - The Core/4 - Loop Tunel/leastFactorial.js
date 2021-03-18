function leastFactorial(n) {
  if(n === 1) return 1

  let factorialResult = 1

  for(let i = 1; i < n; i++) {
    factorialResult = factorialResult * i
    
    if(factorialResult >= n) {
      return factorialResult
    }
  }
}

console.log(leastFactorial(17))