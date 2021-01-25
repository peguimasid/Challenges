function addBorder(picture) {
  const withAsterisks = picture.map(string => {
    string = string.split('')
    string.push('*')
    string.unshift('*')
    return string.join('')
  })

  withAsterisks.push('*'.repeat(withAsterisks[0].length))
  withAsterisks.unshift('*'.repeat(withAsterisks[0].length))

  return withAsterisks
}


console.log(addBorder([
  'abc',
  'ded',
]))