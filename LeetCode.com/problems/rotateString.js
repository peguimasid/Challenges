/**
 * @param {string} s
 * @return {string}
 */
const rotate = (s) => {
  return s.slice(1) + s.slice(0, 1);
};
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = (s, goal) => {
  let i = 0;

  while (i < s.length) {
    s = rotate(s);
    if (s === goal) return true;
    i++;
  }

  return false;
};

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'abced'));
