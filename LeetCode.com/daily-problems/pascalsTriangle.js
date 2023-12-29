/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  let result = Array(numRows)
    .fill()
    .map(() => []);

  result[0].push(1);
  for (let i = 1; i < result.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      result[i].push((result[i - 1][j - 1] ?? 0) + (result[i - 1][j] ?? 0));
    }
  }

  return result;
};

console.log(generate(10));

//     [1]
//    [1,1]
//   [1,2,1]
//  [1,3,3,1]
// [1,4,6,4,1]
