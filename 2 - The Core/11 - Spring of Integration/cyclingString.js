function getStringPartUntilSpecifiedLength(string, length) {
  const stringPart = string.slice(0, length)
  const stringPartRepeated = stringPart.repeat(string.length)
  const stringPartRepeatedOnOriginalSize = stringPartRepeated.slice(0, string.length)

  return stringPartRepeatedOnOriginalSize
}

function cyclicString(s) {
  let length = 1;

    while (getStringPartUntilSpecifiedLength(s, length) != s) {
      length++;
    }

  return length;
}

// console.log(cyclicString('cabca')) // 3
console.log(cyclicString('bcaba')) // 5