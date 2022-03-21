const UpperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function firstNonRepeatingLetter(string) {
  if (!string.length) return ''

  const upperCaseLetterIndexes = string.split('').map((char, index) => UpperCaseAlphabet.includes(char) ? index : null).filter(item => typeof item === 'number')

  string = string.toLowerCase()

  for (let i = 0; i < string.length; i++) {
    const actualChar = string[i]
    let foundChar = false

    for (let j = 0; j < string.length; j++) {
      if (actualChar === string[j] && i !== j) foundChar = true
    }

    if (!foundChar) return upperCaseLetterIndexes.includes(i) ? actualChar.toUpperCase() : actualChar
  }

  return ''
}

console.log(firstNonRepeatingLetter('sTreSS'))