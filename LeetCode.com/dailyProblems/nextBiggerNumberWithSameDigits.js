/**
 * @param {number} num
 * @return {object}
 */
const getFrequency = (num) => {
  const freq = {};
  while (num > 0) {
    freq[num % 10] = (freq[num % 10] || 0) + 1;
    num = Math.floor(num / 10);
  }
  return freq;
};

/**
 * @param {object} original
 * @param {number} num
 * @return {boolean}
 */
const hasSameFrequency = (original, num) => {
  const freq = getFrequency(num);

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
  const freq = getFrequency(n);

  for (let i = n + 1; i < n * 10; i++) {
    if (hasSameFrequency(freq, i)) {
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
