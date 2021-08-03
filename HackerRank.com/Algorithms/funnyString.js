function funnyString(string) {
  const charCodes = string.split('').map((char) => char.charCodeAt());

  const absDiff = [];
  const absDiffReverse = [];

  for (let i = 1; i < charCodes.length; i++) {
    const currElem = charCodes[i];
    const prevElem = charCodes[i - 1];

    absDiffReverse.push(
      Math.abs(
        charCodes[charCodes.length - i] - charCodes[charCodes.length - 1 - i]
      )
    );

    absDiff.push(Math.abs(currElem - prevElem));
  }

  return absDiff.join('') === absDiffReverse.join('') ? 'Funny' : 'Not Funny';
}
console.log(funnyString('bcxz'));
