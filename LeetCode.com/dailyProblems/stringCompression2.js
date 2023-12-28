/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function getLengthOfOptimalCompression(s, k) {
  function count(i, k, prevChar, prevCharCount) {
    if (k < 0) {
      return Number.MAX_SAFE_INTEGER;
    }

    if (i === s.length) {
      return 0;
    }

    let result = 0;

    if (s[i] === prevChar) {
      const incr = [1, 9, 99].includes(prevCharCount) ? 1 : 0;
      result = incr + count(i + 1, k, prevChar, prevCharCount + 1);
    } else {
      result = Math.min(
        count(i + 1, k - 1, prevChar, prevCharCount), // Delete s[i];
        1 + count(i + 1, k, s[i], 1) // Don't delete s[i];
      );
    }

    return result;
  }

  return count(0, k, '', 0);
}

console.log(getLengthOfOptimalCompression('aaabcccd', 2)); // 4 -> a3c3 -> Deletes `b` and `d`
console.log(getLengthOfOptimalCompression('aabbaa', 2)); // 2 -> a2 -> Deletes `bb` at the middle
console.log(getLengthOfOptimalCompression('aaaaaaaaaaa', 0)); // 3 -> a11 -> No deletions
