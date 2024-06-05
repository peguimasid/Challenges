/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  const minimumFrequency = new Array(26).fill(Infinity);

  for (const word of words) {
    const frequency = new Array(26).fill(0);

    for (const char of word) {
      frequency[char.charCodeAt() - 97]++;
    }

    for (let i = 0; i < 26; i++) {
      minimumFrequency[i] = Math.min(minimumFrequency[i], frequency[i]);
    }
  }

  const result = [];

  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < minimumFrequency[i]; j++) {
      result.push(String.fromCharCode(i + 97));
    }
  }

  return result;
}

console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]
