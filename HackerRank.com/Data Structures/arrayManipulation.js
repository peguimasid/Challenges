// O(n^2)
// function arrayManipulation(n, queries) {
//   let result = Array(n).fill(0);

//   for (let i = 0; i < queries.length; i++) {
//     const query = queries[i];
//     const a = query[0];
//     const b = query[1];
//     const k = query[2];

//     for (let j = a - 1; j < b; j++) {
//       result[j] += k;
//     }
//   }

//   return Math.max(...result);
// }

function arrayManipulation(n, queries) {
  let result = Array(n + 1).fill(0);

  queries.forEach(([a, b, k]) => {
    result[a - 1] += k;
    result[b] -= k;
  });

  return result.reduce(
    (acc, cur) => {
      return {
        running_total: acc.running_total + cur,
        max: Math.max(acc.max, acc.running_total + cur),
      };
    },
    { running_total: 0, max: 0 }
  ).max;
}

console.log(
  arrayManipulation(4, [
    [2, 3, 603],
    [1, 1, 286],
    [4, 4, 882],
  ])
);
