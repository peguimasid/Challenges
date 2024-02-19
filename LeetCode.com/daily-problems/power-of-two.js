/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  for (let i = 0; i < n / 2 + 1; i++) {
    if (2 ** i === n) return true;
  }

  return false;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(3)); // false
