function getTextWords(text) {
  const regExp = /(\w|\s)*\w(?=")|\w+/g

  const words = text.match(regExp)

  return words ? words : []
}

function timedReading(maxLength, text) {
  const words = getTextWords(text)

  const filterWordsByMaxLength = words.filter(word => word.length <= maxLength)

  return filterWordsByMaxLength.length
}

console.log(timedReading(4, "..."))