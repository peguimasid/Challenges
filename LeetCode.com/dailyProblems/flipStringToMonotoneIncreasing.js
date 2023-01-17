/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = (s) => {
  let result = 0;
  let numOfOnesAlreadySeen = 0;

  for (const char of s) {
    if (char === '0') result = Math.min(result + 1, numOfOnesAlreadySeen);
    if (char === '1') numOfOnesAlreadySeen++;
  }

  return result;
};

console.log(minFlipsMonoIncr('00110')); // 1
console.log(minFlipsMonoIncr('010110')); // 2
console.log(minFlipsMonoIncr('00011000')); // 2
console.log(minFlipsMonoIncr('0101100011')); // 3
