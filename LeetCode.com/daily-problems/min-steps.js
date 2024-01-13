/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function minSteps(s, t) {
  const tFrequency = new Array(26).fill(0);
  const sFrequency = new Array(26).fill(0);

  for (const char of t) {
    tFrequency[char.charCodeAt() - 97]++;
  }
  for (const char of s) {
    sFrequency[char.charCodeAt() - 97]++;
  }

  let result = 0;

  for (const index in tFrequency) {
    if (tFrequency[index] < sFrequency[index]) {
      result += sFrequency[index] - tFrequency[index];
    }
  }

  return result;
}

console.log(minSteps('bab', 'aba')); // 1
console.log(minSteps('leetcode', 'practice')); // 5
console.log(minSteps('anagram', 'mangaar')); // 0
