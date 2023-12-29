let dict = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  return digits.split('').reduce((acc, curr) => {
    if (!acc.length) return [...dict[curr]];

    const result = [];

    for (const comb of acc) {
      for (const digit of dict[curr]) {
        result.push(comb + digit);
      }
    }

    return result;
  }, []);
};

console.log(letterCombinations('2'));
