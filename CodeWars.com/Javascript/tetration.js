function tetration(x, y) {
  if (y === 0) return 1;
  return Math.pow(x, tetration(x, y - 1));
}

console.log(tetration(4, 0)); // 1
console.log(tetration(7, 1)); // 7
console.log(tetration(5, 2)); // 3125
console.log(tetration(2, 3)); // 16
