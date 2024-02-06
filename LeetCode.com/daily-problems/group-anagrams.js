/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str
      .split('')
      .toSorted((a, b) => a.localeCompare(b))
      .join('');

    if (!map.has(key)) map.set(key, []);

    map.set(key, [...map.get(key), str]);
  }

  return [...map.values()];
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(['']));
// [[""]]

console.log(groupAnagrams(['a']));
// [["a"]]
