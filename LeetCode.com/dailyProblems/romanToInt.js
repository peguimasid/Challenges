let map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    const next = map[s[i + 1]];

    if (next > curr) {
      result += next - curr;
      i++;
    } else {
      result += curr;
    }
  }

  return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

// M - CM - XC - IV
