/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let result = '';

  let lookIndex = 0;

  while (true) {
    if (!strs[0].length || !strs[0][lookIndex]) return result;
    const char = strs[0][lookIndex];

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][lookIndex] !== char) return result;
    }

    result += char;
    lookIndex++;
  }
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
console.log(longestCommonPrefix(['']));
console.log(longestCommonPrefix(['a']));
