/**
 * @param {string[]} words
 * @return {number}
 */
const longestPalindrome = (words) => {
  let result = 0;
  const map = words.reduce((acc, word) => {
    if (!acc[word]) acc[word] = 0;
    acc[word]++;
    return acc;
  }, {});

  let flag = false;

  for (const word of words) {
    const reverse = word[1] + word[0];
    if (word === reverse) {
      while (map[word] >= 2) {
        map[word] -= 2;
        result += 4;
      }
      if (map[word] === 1 && !flag) {
        flag = true;
        result += 2;
        map[word] -= 1;
      }
      continue;
    }
    while (map[word] > 0 && map[reverse] > 0) {
      map[word] -= 1;
      map[reverse] -= 1;
      result += 4;
    }
  }

  return result;
};

console.log(longestPalindrome(['lc', 'cl', 'gg']));
console.log(longestPalindrome(['ab', 'ty', 'yt', 'lc', 'cl', 'ab']));
