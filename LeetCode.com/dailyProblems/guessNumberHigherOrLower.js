/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  for (let i = 1; i <= n; i++) {
    if (guess(i) === 0) return i;
  }
};

console.log(guessNumber(10));
console.log(guessNumber(1));
console.log(guessNumber(2));
