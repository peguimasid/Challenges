/**
 * @param {string} s
 * @return {number}
 */
function minimumDeletions(s) {
  const countA = new Array(s.length).fill(null).map(() => 0);
  const countB = new Array(s.length).fill(null).map(() => 0);

  let bCount = 0;

  for (let i = 0; i < s.length; i++) {
    countB[i] = bCount;
    if (s[i] === "b") bCount++;
  }

  let aCount = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    countA[i] = aCount;
    if (s[i] === "a") aCount++;
  }

  let result = s.length;

  for (let i = 0; i < s.length; i++) {
    result = Math.min(result, countA[i] + countB[i]);
  }

  return result;
}

console.log(minimumDeletions("aababbab")); // 2
console.log(minimumDeletions("bbaaaaabb")); // 2
