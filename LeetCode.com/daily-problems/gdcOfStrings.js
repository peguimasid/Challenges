/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
  for (let i = str2.length; i > 0; i--) {
    const substr = str2.slice(0, i);

    const test1 = str1.split(substr);
    const test2 = str2.split(substr);

    if (test1.every((s) => !s.length) && test2.every((s) => !s.length))
      return substr;
  }

  return '';
};

console.log(gcdOfStrings('ABCABC', 'ABC')); // 'ABC';
console.log(gcdOfStrings('ABABAB', 'ABAB')); // 'AB';
console.log(gcdOfStrings('LEET', 'CODE')); // '';
