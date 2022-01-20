const points = {
  love: 0,
  15: 1,
  30: 2,
  40: 3,
};

function tennisGamePoints(score) {
  const [playerOneScore, playerTwoScore] = score.split('-');

  if (playerTwoScore === 'all') return points[playerOneScore] * 2;

  return points[playerOneScore] + points[playerTwoScore];
}

console.log(tennisGamePoints('15-40'));
console.log(tennisGamePoints('30-all'));
console.log(tennisGamePoints('love-15'));
console.log(tennisGamePoints('love-30'));
console.log(tennisGamePoints('love-40'));
console.log(tennisGamePoints('15-love'));
console.log(tennisGamePoints('15-30'));
