/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
const bestTeamScore = (scores, ages) => {
  const players = scores
    .map((_, i) => ({ age: ages[i], score: scores[i] }))
    .sort((a, b) => (a.age === b.age ? a.score - b.score : a.age - b.age));

  let result = 0;
  const bestScores = [];

  for (let i = 0; i < players.length; i++) {
    const currentPlayer = players[i];
    bestScores.push(currentPlayer.score);
    for (let j = 0; j < i; j++) {
      if (
        currentPlayer.age <= players[j].age ||
        currentPlayer.score >= players[j].score
      ) {
        bestScores[i] = Math.max(
          bestScores[i],
          bestScores[j] + currentPlayer.score
        );
      }
    }
    if (result < bestScores[i]) result = bestScores[i];
  }

  return result;
};

console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])); // 34
console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])); // 16
console.log(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])); // 6
