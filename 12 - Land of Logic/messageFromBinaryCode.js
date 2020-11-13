function transfromBinaryIntoChar(aBinary) {
  return String.fromCharCode(parseInt(aBinary, 2))
}

function messageFromBinaryCode(code) {
  let result = ''

  let binariesArray = []
  let actualBinary = ''

  for(let i = 0; i < code.length + 1; i++) {
    if(actualBinary.length === 8) {
      binariesArray.push(actualBinary)
      actualBinary = ''
    }

    actualBinary += code[i]
  }

  binariesArray.forEach(binary => {
    result += transfromBinaryIntoChar(binary)
  })

  return result
}

console.log(messageFromBinaryCode("010010000110010101101100011011000110111100100001"))
