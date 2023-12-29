/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = strs.reduce((acc, curr) => {
    const sorted = curr.split('').sort().join('');
    if (!acc[sorted]) acc[sorted] = [];
    acc[sorted].push(curr);
    return acc;
  }, {});
  return Object.values(groups);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
