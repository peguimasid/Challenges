/**
 * @param {string} text
 * @return {string}
 */
const duplicateCount = (text) => {
  const frequency = text
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});

  return Object.values(frequency).filter((freq) => freq > 1).length;
};

console.log(duplicateCount('')); // 0
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
