/**
 * @param {string} word
 * @return {number}
 */
function minimumPushes(word) {
  const frequency = new Array(26).fill(0);

  for (const char of word) {
    frequency[char.charCodeAt() - 97]++;
  }

  frequency.sort((a, b) => b - a);

  let result = 0;

  for (let i = 0; i < 26 && frequency[i] !== 0; i++) {
    result += frequency[i] * Math.floor(i / 8 + 1);
  }

  return result;
}

console.log(minimumPushes("abcde")); // 5
console.log(minimumPushes("xyzxyzxyzxyz")); // 12
console.log(minimumPushes("aabbccddeeffgghhiiiiii")); // 24

// most frequent goes first
// less frequent goes after
