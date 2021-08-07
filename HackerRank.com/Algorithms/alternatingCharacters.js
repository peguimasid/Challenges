function alternatingCharacters(string) {
  let result = 0;

  for (let i = 1; i < string.length; i++) {
    const currentChar = string[i];
    const previousChar = string[i - 1];

    if (currentChar === previousChar) result++;
  }

  return result;
}

console.log(alternatingCharacters('AAAA'));
console.log(alternatingCharacters('BBBBB'));
console.log(alternatingCharacters('ABABABAB'));
console.log(alternatingCharacters('BABABA'));
console.log(alternatingCharacters('AAABBB'));
