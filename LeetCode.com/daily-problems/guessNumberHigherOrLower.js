/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (num) => {
  const pick = 6; // change this to the number you choose

  if (num === pick) return 0;
  if (num > pick) return -1;
  if (num < pick) return 1;
};

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n) => {
  if (guess(n) == 0) return n;
  const binarySearch = (min, max) => {
    let middle = Math.floor((min + max) / 2);
    const guessResult = guess(middle);
    if (guessResult === 0) return middle;
    if (guessResult === 1) return binarySearch(middle, max);
    if (guessResult === -1) return binarySearch(1, middle);
  };
  return binarySearch(1, n);
};

console.log(guessNumber(10));
// console.log(guessNumber(1));
// console.log(guessNumber(2));
