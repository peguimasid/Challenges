function getNumber(letter) {
  const alpabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  return alpabeth.indexOf(letter)
}

function getLetter(number) {
  const alpabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  return alpabeth[number]
}

function getNumberPairs(number) {
  let result = []

  for(let i = 0; i < 26; i++) {
    for(let j = i; j < 26; j++) {
      if(i + j === number) result.push([i , j])
    }
  }

  return result
}

function newNumeralSystem(letter) {
  let result = []

  const number = getNumber(letter)

  const numberPairsThatAddedUpIsEqualToNumber = getNumberPairs(number)
  
  numberPairsThatAddedUpIsEqualToNumber.forEach(pair => {
    result.push(`${getLetter(pair[0])} + ${getLetter(pair[1])}`)
  })

  return result
}

console.log(newNumeralSystem('G'))

// ["A + G", "B + F", "C + E", "D + D"]

// ["0 + 6", "1 + 5", "2 + 4", "3 + 3"]