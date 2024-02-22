/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  if (n === 1) return 1;

  const graph = {};

  for (const [trustGiver, trustReceiver] of trust) {
    if (!graph[trustGiver]) graph[trustGiver] = [];
    if (!graph[trustReceiver]) graph[trustReceiver] = [];

    graph[trustGiver].push(trustReceiver);
  }

  for (const key in graph) {
    const personTrustNobody = graph[key].length === 0;
    const everybodyTrustPerson = Object.entries(graph)
      .filter(([k]) => k !== key)
      .every((t) => t[1].includes(Number(key)));

    if (personTrustNobody && everybodyTrustPerson) return key;
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
