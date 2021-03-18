function isNumber(symbol) {
  const numbers = '0123456789'

  return numbers.includes(symbol)
}

function characterParity(symbol) {
  if(!isNumber(symbol)) return 'not a digit'

  return Number(symbol) % 2 === 0 ? 'even' : 'odd'
}

console.log(characterParity('4'))