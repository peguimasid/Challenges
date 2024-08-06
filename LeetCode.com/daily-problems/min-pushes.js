/**
 * @param {string} word
 * @return {number}
 */
function minimumPushes(word) {
  const lettersFrequency = word.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const sortedWord = Object.entries(lettersFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([letter, frequency]) => letter.repeat(frequency))
    .join("");

  let result = 0;
  let count = 0;

  for (let i = 0; i < sortedWord.length; i++) {
    const prevChar = sortedWord?.[i - 1];
    const currChar = sortedWord[i];
    if (prevChar && prevChar !== currChar) count++;
    result += Math.floor(count / 8) + 1;
  }

  return result;
}

console.log(minimumPushes("abcde")); // 5
console.log(minimumPushes("xyzxyzxyzxyz")); // 12
console.log(minimumPushes("aabbccddeeffgghhiiiiii")); // 24

// most frequent goes first
// less frequent goes after
