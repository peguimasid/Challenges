/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = function (s, indices) {
  let result = new Array(s.length);

  let count = 0;

  for (const index of indices) result[index] = s[count++];

  return result.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));
