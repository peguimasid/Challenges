/**
 * @param {object} original
 * @param {string} string
 * @return {boolean}
 */
const hasSameFrequency = (original, string) => {
  const freq = string.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (const key in freq) {
    if (original[key] != freq[key]) return false;
  }

  return true;
};

/**
 * @param {number} n
 * @return {number}
 */
const nextBigger = (n) => {
  const freq = String(n)
    .split('')
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

  for (let i = n + 1; i < n * 10; i++) {
    const numStr = String(i);
    if (hasSameFrequency(freq, numStr)) {
      return i;
    }
  }

  return -1;
};

console.log(nextBigger(12), 21);
console.log(nextBigger(513), 531);
console.log(nextBigger(2017), 2071);
console.log(nextBigger(414), 441);
console.log(nextBigger(144), 414);
