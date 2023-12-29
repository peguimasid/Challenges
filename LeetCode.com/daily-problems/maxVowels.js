const isVowel = (char) => new Set(['a', 'e', 'i', 'o', 'u']).has(char);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  let curr = 0;
  let result = 0;
  let left = 0;
  let right = 0;

  while (left < k) if (isVowel(s[left++])) curr++;
  result = Math.max(result, curr);
  while (right < s.length) {
    if (isVowel(s[left++])) curr++;
    if (isVowel(s[right++])) curr--;
    result = Math.max(result, curr);
  }

  return result;
};

console.log(maxVowels('abciiidef', 3)); // 3 = iii
console.log(maxVowels('aeiou', 2)); // 2 = ae || ei || io || ou
console.log(maxVowels('leetcode', 3)); // 2 = lee || eet || ode
