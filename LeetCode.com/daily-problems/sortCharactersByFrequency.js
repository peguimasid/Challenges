/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
  const freq = s.split('').reduce((acc, char) => {
    if (!acc[char]) acc[char] = 0;
    acc[char]++;
    return acc;
  }, {});

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .map(([char, freq]) => {
      return char.repeat(freq);
    })
    .join('');
};

console.log(frequencySort('tree'));
console.log(frequencySort('cccaaa'));
console.log(frequencySort('Aabb'));
