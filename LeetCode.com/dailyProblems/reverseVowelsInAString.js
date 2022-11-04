const isVowel = (c) => 'aeiouAEIOU'.indexOf(c) > -1;

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const vowelsIndexs = s
    .split('')
    .reduce((acc, char, index) => {
      if (isVowel(char)) acc.push(index);
      return acc;
    }, [])
    .reverse();

  let count = 0;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (vowelsIndexs.includes(i)) {
      result += s[vowelsIndexs[count++]];
    } else {
      result += s[i];
    }
  }

  return result;
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
