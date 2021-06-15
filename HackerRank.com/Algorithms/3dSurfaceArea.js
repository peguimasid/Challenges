function surfaceArea(A) {
  var red = (a, b) => a + b;
  // add up, down, first left and last rigth
  var r =
    A[0].length * A.length * 2 + A[0].reduce(red) + A[A.length - 1].reduce(red);
  // add front and back
  for (let i = 0; i < A.length; i++) {
    r += A[i][0] + A[i][A[i].length - 1];
    for (let k = 0; k < A[0].length - 1; k++) {
      r += Math.abs(A[i][k] - A[i][k + 1]);
    }
  }
  // add left and right if (A.length>1)
  if (A.length > 1) {
    for (let i = 0, j = 1; i < A.length, j < A.length; i++, j++) {
      for (let k = 0; k < A[0].length; k++) {
        r += Math.abs(A[i][k] - A[j][k]);
      }
    }
  }
  // done
  return r;
}

console.log(
  surfaceArea([
    [1, 3, 4],
    [2, 2, 3],
    [1, 2, 4],
  ])
);
