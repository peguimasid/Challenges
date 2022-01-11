function sumTriangularNumbers(n) {
  if (n < 0) return 0;

  let result = 0;
  let currentNumber = 1;
  let triangularCount = 0;
  let toSum = 2;

  while (triangularCount < n) {
    result += currentNumber;
    currentNumber += toSum;
    toSum++;
    triangularCount++;
  }

  return result;
}

console.log(sumTriangularNumbers(34));
