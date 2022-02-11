function partsSums(ls) {
  ls.unshift(0);
  let sum = ls.reduce((acc, curr) => acc + curr, 0);
  return ls.map((item) => (sum = sum - item));
}

console.log(partsSums([0, 1, 3, 6, 10]));
// console.log(
//   partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
// );

// [0, 1, 3, 6, 10]
// [1, 3, 6, 10]
// [3, 6, 10]
// [6, 10]
// [10]
// []
// [20 20, 19, 16, 10, 0]
