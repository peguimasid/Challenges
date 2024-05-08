/**
 * @param {number[]} score
 * @return {string[]}
 */
function findRelativeRanks(score) {
  const original = score.reduce((map, s, i) => {
    map.set(s, i);
    return map;
  }, new Map());

  const sorted = score.toSorted((a, b) => b - a);

  const result = new Array(score.length).fill(null);

  const values = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal',
  };

  for (let i = 0; i < sorted.length; i++) {
    result[original.get(sorted[i])] = values[i] ?? String(i + 1);
  }

  return result;
}

console.log(findRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
