const isPalindrome = (string) => string.split('').reverse().join('') === string;

const theLoveLetterMystery = (string) => {
  let result = 0;

  let i = string.length - 1;
  let j = 0;

  while (j < i) {
    result += Math.abs(string[i].charCodeAt() - string[j].charCodeAt());
    i--;
    j++;
  }

  return result;
};

console.log(theLoveLetterMystery('adslkfjas'));
