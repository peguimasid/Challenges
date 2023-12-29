/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const downLimit = -2147483648;
  const upLimit = 2147483648;
  const stringChars = String(x).split('');

  let sign = stringChars[0] === '-' ? -1 : 1;

  const answer =
    Number(
      stringChars
        .filter((item) => item.match(/[0-9]/))
        .reverse()
        .join('')
    ) * sign;

  return answer > upLimit || answer < downLimit ? 0 : answer;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
