function isSumOfConsecutive2(n) {
  let result = 0

  for(let i = 1; i < n; i++) {
    let sum = 0

    for(let j = i; j < n; j++) {
      if(sum === n) result++
      sum += j
    }
  }

  return result
}

console.log(isSumOfConsecutive2(15))