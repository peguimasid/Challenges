const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function alphabeticShift(string) {
  let result = ''

  for(let i = 0; i < string.length; i++) {
    if(string[i] === 'z') result += 'a'
    else {
      result += alphabet[alphabet.indexOf(string[i]) + 1]
    }
  }

  return result;
}

console.log(alphabeticShift('crazy'));