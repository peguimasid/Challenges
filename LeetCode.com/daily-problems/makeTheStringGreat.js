/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  let chars = s.split('');
  let i = 0;
  while (i < chars.length - 1) {
    if (
      (chars[i] === chars[i].toLowerCase() &&
        chars[i + 1] === chars[i].toUpperCase()) ||
      (chars[i] === chars[i].toUpperCase() &&
        chars[i + 1] === chars[i].toLowerCase())
    ) {
      chars.splice(i, 2);
      if (i > 0) i--;
    } else {
      i++;
    }
  }
  return chars.join('');
};

console.log(makeGood('leEeetcode'));
console.log(makeGood('abBAcC'));
