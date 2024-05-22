/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => s === s.split('').reverse().join('');

/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  const result = [];

  /**
   * @param {string[]} arr
   * @param {string} str
   */
  function permute(arr, str) {
    if (str.length === 0) result.push(arr);

    for (let i = 1; i <= str.length; i++) {
      const substr = str.slice(0, i);
      if (isPalindrome(substr)) {
        permute([...arr, substr], str.slice(i));
      }
    }
  }

  permute([], s);
  return result;
}

// [["a","a","a","b"],["a","aa","b"],["aa","a","b"],["aaa","b"]]
console.log(partition('aaab'));

// [["a","b","c","a","a"],["a","b","c","aa"]]
console.log(partition('abcaa'));

// [["a","b","b","a","b"],["a","b","bab"],["a","bb","a","b"],["abba","b"]]
console.log(partition('abbab'));

// [["a","b","a","c","a"],["a","b","aca"],["aba","c","a"]]
console.log(partition('abaca'));

// [["a","a","a"],["a","aa"],["aa","a"],["aaa"]]
console.log(partition('aaa'));
