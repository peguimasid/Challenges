/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  const frequencyCounter = words.reduce((acc, curr) => {
    if (!acc[curr]) acc[curr] = 1;
    acc[curr]++;
    return acc;
  }, {});

  return Object.entries(frequencyCounter)
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map(([word]) => word)
    .slice(0, k);
};

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));
