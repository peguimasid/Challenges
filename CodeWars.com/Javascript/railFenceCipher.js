/**
 * @param {string} string
 * @param {number} numberRails
 * @return {string}
 */
function encodeRailFenceCipher(string, numberRails) {
  const arr = new Array(numberRails).fill('');

  let toPush = 0;
  let dir = 'down';

  for (const char of string) {
    arr[toPush] += char;
    if (toPush === numberRails - 1) dir = 'up';
    if (toPush === 0) dir = 'down';
    if (dir === 'up') toPush--;
    if (dir === 'down') toPush++;
  }

  return arr.join('');
}

function decodeRailFenceCipher(string, numberRails) {
  for (let i = 1; i <= numberRails; i++) {
    // console.log(2 * numberRails - (numberRails % i));
  }
}

console.log(encodeRailFenceCipher('WEAREDISCOVEREDFLEEATONCE', 3)); // "WECRLTEERDSOEEFEAOCAIVDEN"
console.log(decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // "WEAREDISCOVEREDFLEEATONCE"
