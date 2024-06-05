/**
 * @param {string[]} words
 * @return {object[]}
 */
function getWordsFrequencies(words) {
  const result = [];

  for (const word of words) {
    const frequency = {};

    for (const char of word) {
      frequency[char] = (frequency[char] || 0) + 1;
    }

    result.push(frequency);
  }

  return result;
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
function commonChars(words) {
  const frequencies = getWordsFrequencies(words);

  const chars = Object.keys(frequencies[0]);

  let result = [];

  for (const char of chars) {
    let amountToPush = Number.MAX_SAFE_INTEGER;

    for (const frequency of frequencies) {
      amountToPush = Math.min(amountToPush, frequency[char] || 0);
    }

    for (let i = 0; i < amountToPush; i++) {
      result.push(char);
    }
  }

  return result;
}

console.log(commonChars(["bella", "label", "roller"])); // ["e","l","l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c","o"]
