function twoArrays(k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[i] < k) return 'NO';
  }

  return 'YES';
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
