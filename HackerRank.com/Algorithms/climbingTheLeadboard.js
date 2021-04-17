
function climbingLeaderboard(scores, alice) {

  let positions = [];
  let distScore = [...new Set(scores)];

  let i = distScore.length - 1;

  alice.forEach(element => {

    while (i >= 0) {
      if (element >= distScore[i]) {
        i--;
      } else {
        positions.push(i + 2);
        break;
      }
    }
    if (i < 0) positions.push(1);
  });

  return positions;
}

console.log(climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]))