/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = (arr) => {
  if (arr.length < 3) return true;

  arr.sort((a, b) => a - b);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== arr[i - 1] - arr[i - 2]) return false;
  }

  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1])); // true
console.log(canMakeArithmeticProgression([1, 2, 4])); // false
