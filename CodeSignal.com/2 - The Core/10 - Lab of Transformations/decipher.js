function findCodesInString(numbersString) {
  let result = []

  let startIndex = 0
  
  for(let i = 0; i <= numbersString.length; i++) {
    let code = ""
    for(let j = startIndex; j <= i; j++) {
      if(isAlphabetLetter(code)) sendCodeToResultAndSetStartIndex(code, i)
      code += numbersString[j]
    }
  }

  function sendCodeToResultAndSetStartIndex(code, i) {
    result.push(code)
    startIndex = i
    code = ""
  }

  function isAlphabetLetter(code) {
    Number(code)
    return code >= 97
  }

  return result
}

function getASCIILetter(code) {
  return String.fromCharCode(code)
}

function decipher(cipher) {
  let result = ''

  let codes = findCodesInString(cipher)

  codes.forEach(code => result += getASCIILetter(code))

  return result
}

console.log(decipher('10197115121'))

// String.fromCharCode(97)

// a - 97
// z - 122