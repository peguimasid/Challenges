/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = (tokens, power) => {
  let score = 0;

  let start = 0;
  let end = tokens.length - 1;

  tokens.sort((a, b) => a - b);
  if (end + 1 === 0 || power < tokens[0]) return 0;

  while (start <= end) {
    if (power >= tokens[start]) {
      score++;
      power -= tokens[start++];
    } else {
      if (end - start >= 1) {
        power += tokens[end--];
        score--;
      } else break;
    }
  }

  return score;
};

console.log(bagOfTokensScore([100, 200, 300, 400], 200));
