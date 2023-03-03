// const strStr = (haystack, needle) => {
//   return haystack.indexOf(needle);
// };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (haystack === needle) return 0;
  let i = 0;
  while (i < haystack.length) {
    let j = 0;
    while (j < haystack.length) {
      if (j === needle.length) return i;
      if (haystack[i + j] !== needle[j]) break;
      j++;
    }
    i++;
  }

  return -1;
};

console.log(strStr('sadbutsad', 'sad')); // 0
console.log(strStr('idontknowwhattodo', 'know')); // 5
console.log(strStr('leetcode', 'leeto')); // -1
