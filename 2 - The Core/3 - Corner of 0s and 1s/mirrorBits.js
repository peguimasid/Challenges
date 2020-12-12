function mirrorBits(a) {
  let result = 0

  const numberToBinary = a.toString(2)
  const numberMirrored = numberToBinary.split('').reverse('').join('')
  result = parseInt(numberMirrored, 2)

  return result
}

console.log(mirrorBits(97))