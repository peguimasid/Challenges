function getLargerNumbers(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    result.push(Math.max(a[i], b[i]));
  }

  return result;
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
