// Num of zeros in the left half + num of ones in the right half

/**
 * @param {string} s
 * @return {number}
 */
function maxScore(s) {
  let onesCount = 0;
  let zerosCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') onesCount++;
  }

  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '0') zerosCount++;
    if (s[i] === '1') onesCount--;
    result = Math.max(result, zerosCount + onesCount);
  }

  return result;
}

console.log(maxScore('00')); // 1 => "0" + "0"
console.log(maxScore('0100')); // 2 => "0" + "100"
console.log(maxScore('011101')); // 5 => "0" + "11101"
console.log(maxScore('00111')); // 5 => "00" + "111"
console.log(maxScore('1111')); // 3 => "1" + "111"
