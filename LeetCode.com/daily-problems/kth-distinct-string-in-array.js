/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
function kthDistinct(arr, k) {
  const frequency = {};

  for (const char of arr) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  let distinctCount = 0;

  for (const char of arr) {
    if (frequency[char] === 1) distinctCount++;
    if (distinctCount === k) return char;
  }

  return "";
}

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // "a"
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // "aaa"
console.log(kthDistinct(["a", "b", "a"], 3)); // ""
