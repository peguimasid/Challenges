function rangeBitCount(a, b) {
  let result = 0

  let allNumbersBetween_A_and_B = []
  
  for(let i = a; i <= b; i++) {
    allNumbersBetween_A_and_B.push(i)
  }

  let numbersConvertedToBinary = []

  for(let i = 0; i < allNumbersBetween_A_and_B.length; i++) {
    numbersConvertedToBinary.push(allNumbersBetween_A_and_B[i].toString(2))
  }

  for(let binary of numbersConvertedToBinary) {
    for(let number of binary) {
      if(Number(number) === 1) {
        result += Number(number)
      }
    }
  }  

  return result
}

console.log(rangeBitCount(2, 7))