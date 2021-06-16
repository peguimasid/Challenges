function absolutePermutation(n, k) {
  let result = [];
  let d = 1;

  for (let i = 0, j = 0; i < n; i++, j++) {
    if (j === k) {
      d *= -1;
      j = 0;
    }

    let value = i + 1 + k * d;

    if (value < 1 || value > n) return [-1];

    result[i] = value;
  }

  return result;
}

console.log(absolutePermutation(4, 2));
