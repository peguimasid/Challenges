function maximumPerimeterTriangle(sticks) {
  let nonDegenerate = [];

  sticks.sort((a, b) => a - b);

  for (let i = 0; i < sticks.length; i++) {
    for (let j = i + 1; j < sticks.length; j++) {
      for (let k = j + 1; k < sticks.length; k++) {
        if (sticks[i] + sticks[j] > sticks[k]) {
          nonDegenerate.push([sticks[i], sticks[j], sticks[k]]);
        }
      }
    }
  }

  let sum = nonDegenerate.map((triangle) =>
    triangle.reduce((acc, curr) => acc + curr)
  );

  const bigger = nonDegenerate.find(
    (item) => item.reduce((acc, curr) => acc + curr) === Math.max(...sum)
  );

  return bigger || [-1];
}

console.log(maximumPerimeterTriangle([3, 9, 2, 15, 3]));
