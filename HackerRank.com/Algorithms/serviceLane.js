function serviceLane(width, cases) {
  let result = [];

  for (let i = 0; i < cases.length; i++) {
    let caseStart = cases[i][0];
    let caseEnd = cases[i][1];

    let points = [];

    for (let j = caseStart; j <= caseEnd; j++) {
      const point = width[j];

      points.push(point);
    }

    result.push(Math.min(...points));
  }

  return result;
}

console.log(
  serviceLane(
    [2, 3, 1, 2, 3, 2, 3, 3],
    [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ]
  )
);
