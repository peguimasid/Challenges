/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const frequency = new Array(26).fill(0);

  for (const char of s) {
    frequency[char.charCodeAt() - 97]++;
  }

  for (const index in s) {
    if (frequency[s[index].charCodeAt() - 97] === 1) {
      return index;
    }
  }

  return -1;
}

console.log(firstUniqChar('leetcode'));

console.log(firstUniqChar('loveleetcode'));

console.log(firstUniqChar('aabb'));
