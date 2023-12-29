/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const originalFrequency = Array.from(s).reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const modifiedFrequency = Array.from(t).reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  for (const [val, frequency] of Object.entries(modifiedFrequency)) {
    if (!originalFrequency[val] || originalFrequency[val] < frequency) {
      return val;
    }
  }
};

console.log(findTheDifference('abcd', 'abcde')); // e
console.log(findTheDifference('a', 'aa')); // e
