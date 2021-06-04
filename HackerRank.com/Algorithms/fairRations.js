function isOdd(number) {
  return number % 2 === 1;
}

function fairRations(B) {
  let result = 0;

  for (let i = 0; i < B.length - 1; i++) {
    if (isOdd(B[i])) {
      B[i]++;
      B[i + 1]++;
      result += 2;
    }
  }

  console.log(B);

  return isOdd(B[B.length - 1]) ? "NO" : result;
}

console.log(fairRations([1, 2]));
