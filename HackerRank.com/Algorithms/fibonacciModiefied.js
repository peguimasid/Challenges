function fibonacciModified(t1, t2, n) {
  let result = 0;

  let currentStep = 3;

  t1 = BigInt(t1);
  t2 = BigInt(t2);

  while (currentStep <= n) {
    let temp = t1 + t2 * t2;

    result = temp;

    t1 = t2;
    t2 = temp;

    currentStep++;
  }

  return result.toString();
}

console.log(fibonacciModified(0, 1, 10));
