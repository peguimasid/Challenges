function sumOfMinimums(array) {
  return array.reduce((acc, curr) => (acc += Math.min(...curr)), 0);
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);
