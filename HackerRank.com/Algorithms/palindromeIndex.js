const checkPal = (string) =>
  string.slice(0, Math.floor(string.length / 2)) ===
  string
    .slice(Math.ceil(string.length / 2))
    .split('')
    .reverse()
    .join('');

function palindromeIndex(s) {
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      const stringA = s.slice(0, i).concat(s.slice(i + 1));
      const stringB = s
        .slice(0, s.length - 1 - i)
        .concat(s.slice(s.length - i));
      if (checkPal(stringA)) return i;
      if (checkPal(stringB)) return s.length - 1 - i;
      return -1;
    }
  }

  return -1;
}

console.log(palindromeIndex('aaab'));
console.log(palindromeIndex('baa'));
console.log(palindromeIndex('aaa'));
