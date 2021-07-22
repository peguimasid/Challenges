function rotateAlphabet(aNumberOfTimes) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const firstPart = alphabet.slice(aNumberOfTimes % 26);
  const secondPart = alphabet.slice(0, aNumberOfTimes % 26);

  return [alphabet, `${firstPart}${secondPart}`];
}

function isUpperCase(aChar) {
  return aChar === aChar.toUpperCase();
}

function isAlphabetChar(aChar) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpperCase = alphabet
    .split('')
    .map((c) => c.toUpperCase())
    .join('');

  return alphabet.includes(aChar) || alphabetUpperCase.includes(aChar);
}

function caesarCipher(string, k) {
  const [originalAlphabet, rotatedAlphabet] = rotateAlphabet(k);

  let result = '';

  // rotatedAlphabet[originalAlphabet.indexOf(char)]

  for (let char of string) {
    if (isAlphabetChar(char) && isUpperCase(char)) {
      result +=
        rotatedAlphabet[
          originalAlphabet
            .split('')
            .map((c) => c.toUpperCase())
            .join('')
            .indexOf(char)
        ].toUpperCase();
    } else if (isAlphabetChar(char) && !isUpperCase(char)) {
      result += rotatedAlphabet[originalAlphabet.indexOf(char)];
    } else {
      result += char;
    }
  }

  return result;
}

console.log(caesarCipher('www.abc.xy', 87));
