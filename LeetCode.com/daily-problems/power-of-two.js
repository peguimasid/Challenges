/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(3)); // false
