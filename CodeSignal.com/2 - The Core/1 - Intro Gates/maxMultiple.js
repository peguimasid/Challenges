function maxMultiple(divisor, bound) {
  if(bound % divisor === 0) {
    return bound
  }

  return maxMultiple(divisor, bound  - 1)
}

console.log(maxMultiple(3, 10))
