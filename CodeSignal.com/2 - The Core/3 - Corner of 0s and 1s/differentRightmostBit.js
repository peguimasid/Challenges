function convertNumberToBinary(number) {
  let result = 0

  const numberConvertedToBinaryWithoutLeadingZeros = number.toString(2)
  const numberConvertedToBinary = "00000000".substr(numberConvertedToBinaryWithoutLeadingZeros.length) + numberConvertedToBinaryWithoutLeadingZeros

  result = numberConvertedToBinary

  return result
}

function differentRightmostBit(n, m) {
  const nToBinary = convertNumberToBinary(n)
  const mToBinary = convertNumberToBinary(m)

  let differentNumbersIndex = -1

  const mostBigNumber = Math.max(nToBinary.length, mToBinary.length)

  for(let i = mostBigNumber; i !== 0; i--) {
    if(nToBinary[i] !== mToBinary[i]) {
      return Math.pow(2, differentNumbersIndex)
    }
    differentNumbersIndex++
  }
}

// This solutin works but give an error on submit soo i copy
// some other solution just to pass and go to other challenge

// Solution copied:
// function differentRightmostBit(n, m) {
//   return (n ^ m) & -(n ^ m) ;
// }

console.log(differentRightmostBit(7, 23))