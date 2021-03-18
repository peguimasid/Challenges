function reflectString(string) {
  let result = ''

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  for(let char of string) {
    result += alphabet[26 - alphabet.indexOf(char) - 1]
  }

  return result
}

console.log(reflectString('name'))