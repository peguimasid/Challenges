const ascii = (s, i) => s.charCodeAt(i);

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function equalSubstring(s, t, maxCost) {
  let currentCost = 0;
  let result = 0;

  let start = 0;
  let end = 0;

  while (end < s.length) {
    currentCost += Math.abs(ascii(s, end) - ascii(t, end));

    while (currentCost > maxCost) {
      currentCost -= Math.abs(ascii(s, start) - ascii(t, start));
      start++;
    }

    result = Math.max(result, end - start + 1);
    end++;
  }

  return result;
}

console.log(equalSubstring("abcd", "bcdf", 3)); // 3
// console.log(equalSubstring("abcd", "cdef", 3)); // 1
// console.log(equalSubstring("abcd", "acde", 0)); // 1
