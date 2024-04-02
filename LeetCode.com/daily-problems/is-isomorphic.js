/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      if (set.has(t[i])) {
        return false;
      }

      map[s[i]] = t[i];
      set.add(t[i]);
      continue;
    }

    if (map[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
}

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('bbbaaaba', 'aaabbbba')); // false
