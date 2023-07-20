/**
 * @param {string} x
 * @return {string}
 */
function high(x) {
  const words = x.split(' ');

  let biggestScore = 0;
  let result = '';

  for (const word of words) {
    const wordScore = word
      .split('')
      .map((char) => char.charCodeAt() - 97 + 1)
      .reduce((acc, curr) => acc + curr);
    if (wordScore > biggestScore) {
      biggestScore = wordScore;
      result = word;
    }
  }

  return result;
}

console.log(high('man i need a taxi up to ubud')); // 'taxi'
console.log(high('what time are we climbing up the volcano')); // 'volcano'
console.log(high('take me to semynak')); //'semynak'
console.log(high('aa b')); //'aa'
