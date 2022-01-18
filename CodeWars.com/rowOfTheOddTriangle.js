function oddRow(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => n * n - n + 1 + i * 2);
}

console.log(oddRow(2528141));
