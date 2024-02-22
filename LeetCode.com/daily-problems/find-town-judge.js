/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  if (n === 1) return 1;

  const trusted = new Array(n + 1).fill(0);

  for (const [trustGiver, trustReceiver] of trust) {
    trusted[trustGiver]--;
    trusted[trustReceiver]++;
  }

  for (let i = 0; i <= n; i++) {
    if (trusted[i] === n - 1) return i;
  }

  return -1;
}

// the town judge trust nobody
// everybody trust the judge, except for himself

console.log(findJudge(2, [[1, 2]])); // 2

// prettier-ignore
console.log(findJudge(3, [[1, 3], [2, 3]])); // 3

// prettier-ignore
console.log(findJudge(4, [[1, 3], [2, 3], [3, 1]])); // -1

// prettier-ignore
console.log(findJudge(3, [[1, 2], [2, 3]])); // -1
