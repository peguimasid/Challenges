function maxSequence(arr) {
  let result = 0;
  return arr.reduce(function (acc, curr) {
    result = Math.max(result + curr, 0);
    return Math.max(result, acc);
  }, 0);
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
