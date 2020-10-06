function longestDigitsPrefix(string) {
  return string.match(/^\d*/)[0]
}

console.log(longestDigitsPrefix('456789'))
