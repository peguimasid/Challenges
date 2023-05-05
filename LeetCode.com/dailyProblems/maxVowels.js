/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
  let result = 0;

  for (let i = 0; i < s.length - k + 1; i++) {
    let curr = 0;
    for (let j = i; j < i + k; j++) {
      if ('aeiou'.indexOf(s[j]) > -1) curr++;
    }
    result = Math.max(result, curr);
  }

  return result;
};

console.log(maxVowels('abciiidef', 3)); // 3 = iii
console.log(maxVowels('aeiou', 2)); // 2 = ae || ei || io || ou
console.log(maxVowels('leetcode', 3)); // 2 = lee || eet || ode
