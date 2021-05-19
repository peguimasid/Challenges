function removeSpaces(string) {
  return string.split('').filter(char => char !== ' ').join('')
}

function encryption(s) {
  s = removeSpaces(s)

  let charsInRow = Math.ceil(Math.sqrt(s.length))

  const regex = new RegExp(`.{1,${charsInRow}}`, 'g')

  const matches = s.match(regex)

  let result = ''

  for (let i = 0; i < Math.max(...matches.map(s => s.length)); i++) {
    for (let j = 0; j < matches.length; j++) {
      const char = matches[j][i];
      
      if(char) result += char
    }
    result += ' '
  }

  return result
}

console.log(encryption('feedthedog'))