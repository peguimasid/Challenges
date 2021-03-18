function findDecryptedLetterPosition(sumOfAllFindexIndexes, position) {
  for(let i = 0; i < 1000; i++) {
    if((sumOfAllFindexIndexes + i) % 26 === position) {
      return i
    }
  }
}

function cipher26(message) {
  let result = ''

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  let sumOfAllFindexIndexes = 0

  for(let i = 0; i < message.length; i++) {
    const alphabetCurrentLetterPosition = alphabet.indexOf(message[i])
    const decryptedLetterIndex = findDecryptedLetterPosition(sumOfAllFindexIndexes, alphabetCurrentLetterPosition)
    sumOfAllFindexIndexes += decryptedLetterIndex
    result += alphabet[decryptedLetterIndex]
  }

  return result
}

console.log(cipher26('ibttlprimfymqlpgeftwu'))