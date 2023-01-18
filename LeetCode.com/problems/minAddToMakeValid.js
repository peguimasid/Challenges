/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = (s) => {
  let closeParen = 0;
  let openParen = 0;

  for (const char of s) {
    if (char === '(') openParen++;
    if (char === ')' && openParen) openParen--;
    else if (char === ')' && !openParen) closeParen++;
  }

  return Math.abs(closeParen + openParen);
};

console.log(minAddToMakeValid('())'));
console.log(minAddToMakeValid('((('));
console.log(minAddToMakeValid('()))(('));
