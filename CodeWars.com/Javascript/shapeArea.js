function shapeArea(n) {
  if (n <= 0) return 0;

  let result = 1;

  for (let i = 0; i < n - 1; i++) {
    result += 4 * (i + 1);
  }

  return result;
}

console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));

// 1 = 1 = 1
// 2 = 3 = 5
// 3 = 5 = 13
// 4 = 7 = 25
// 5 = 9 = 41
