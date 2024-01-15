/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
function findWinners(matches) {
  const lostFrequency = matches.reduce((map, [winnerIndex, loserIndex]) => {
    if (!map.get(winnerIndex)) {
      map.set(winnerIndex, 0);
    }

    if (!map.get(loserIndex)) {
      map.set(loserIndex, 0);
    }

    map.set(loserIndex, map.get(loserIndex) + 1);
    return map;
  }, new Map());

  return [...lostFrequency.entries()]
    .sort(([aIndex], [bIndex]) => aIndex - bIndex)
    .reduce(
      (acc, [index, loses]) => {
        if (loses === 0) acc[0].push(index);
        if (loses === 1) acc[1].push(index);
        return acc;
      },
      [[], []]
    );
}

// prettier-ignore
console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))
// [[1,2,10],[4,5,7,8]]

// prettier-ignore
console.log(findWinners([[2,3],[1,3],[5,4],[6,4]]))
// [[1,2,5,6],[]]
