/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = (n, trust) => {
  const peoples = new Array(n).fill(0);
  const trustsCount = new Array(n).fill(0);

  for (const [currentPeople, trustPeople] of trust) {
    peoples[currentPeople - 1] = 1;
    trustsCount[trustPeople - 1]++;
  }

  for (let i = 0; i < peoples.length; i++) {
    if (peoples[i] === 0 && trustsCount[i] === n - 1) return i + 1;
  }

  return -1;
};

// the judge trust nobody
// everybody trust the judge

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
  ])
);
