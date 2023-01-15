function matrixPower(mat, exponent) {
  if (exponent === 1) {
    return mat;
  }
  if (exponent % 2 === 0) {
    const matSquared = matrixMultiply(mat, mat);
    return matrixPower(matSquared, exponent / 2);
  } else {
    const matSquared = matrixMultiply(mat, mat);
    return matrixMultiply(mat, matrixPower(matSquared, (exponent - 1) / 2));
  }
}

function matrixMultiply(a, b) {
  const a00 = a[0][0] * b[0][0] + a[0][1] * b[1][0];
  const a01 = a[0][0] * b[0][1] + a[0][1] * b[1][1];
  const a10 = a[1][0] * b[0][0] + a[1][1] * b[1][0];
  const a11 = a[1][0] * b[0][1] + a[1][1] * b[1][1];
  return [
    [a00, a01],
    [a10, a11],
  ];
}

function fib(n) {
  const isNegative = n < 0;
  if (isNegative) n *= -1;
  if (n <= 1) {
    return BigInt(n);
  }
  const mat = [
    [BigInt(1), BigInt(1)],
    [BigInt(1), BigInt(0)],
  ];

  const result = matrixPower(mat, n - 1);

  if (n % 2) return result[0][0];

  return isNegative ? result[0][0] * BigInt(-1) : result[0][0];
}

console.log(fib(1851280));

console.log(fib(-1));
console.log(fib(-11));
console.log(fib(-5));
console.log(fib(-83));

console.log(fib(0)); // 0n
console.log(fib(1)); // 1n
console.log(fib(2)); // 1n
console.log(fib(3)); // 2n
console.log(fib(4)); // 3n
console.log(fib(5)); // 5n
console.log(fib(-6)); //-8n
