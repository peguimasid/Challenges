const swap = (string, i, j) => {
  return string
    .split('')
    .map((char, index) => {
      if (index === i) return string[j];
      if (index === j) return string[i];
      return char;
    })
    .join('');
};

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = (s, goal) => {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (swap(s, i, j) === goal) return true;
    }
  }

  return false;
};

console.log(buddyStrings('aa', 'aa'));
