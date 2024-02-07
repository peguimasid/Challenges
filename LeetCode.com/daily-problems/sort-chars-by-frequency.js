/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  const frequency = s.split('').reduce((map, curr) => {
    map.set(curr, (map.get(curr) || 0) + 1);
    return map;
  }, new Map());

  return [...frequency.entries()]
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [char, frequency]) => {
      acc += char.repeat(frequency);
      return acc;
    }, '');
}

console.log(frequencySort('tree')); // "eert"

console.log(frequencySort('cccaaa')); // "aaaccc"

console.log(frequencySort('Aabb')); // "bbAa"
