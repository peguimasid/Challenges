/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const word1Frequency = word1.split('').reduce((acc, currChar) => {
    if (!acc[currChar]) acc[currChar] = 0;
    acc[currChar]++;
    return acc;
  }, {});

  const word2Frequency = word2.split('').reduce((acc, currChar) => {
    if (!acc[currChar]) acc[currChar] = 0;
    acc[currChar]++;
    return acc;
  }, {});

  const frequences = Object.values(word2Frequency);

  for (const i in word1Frequency) {
    if (!word2Frequency[i]) return false;
    let indexOfFrequency = frequences.indexOf(word1Frequency[i]);
    if (indexOfFrequency === -1) return false;
    frequences.splice(indexOfFrequency, 1);
  }

  return frequences.length === 0;
};

console.log(closeStrings('abc', 'bca'));
console.log(closeStrings('cabbba', 'abbccc'));
console.log(closeStrings('uau', 'ssx'));
