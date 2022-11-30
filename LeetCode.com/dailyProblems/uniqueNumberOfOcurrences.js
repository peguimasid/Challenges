/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  const frquencies = Object.values(
    arr.reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : (acc[curr] = 1);
      return acc;
    }, {})
  );

  return [...new Set(frquencies)].length === frquencies.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
