let alphabet = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'

const isLetter = (letter) => alphabet.includes(letter)

function rot13(message) {
  return message.split('').map(char => isLetter(char) ? alphabet[alphabet.indexOf(char) + 26] : char).join('')
}

console.log(rot13("10+2 is twelve")) // grfg