function decentNumber(n) {
  let result = -1;
  let i = n;

  while (i >= 0) {
    if (i % 3 === 0) {
      result = '5'.repeat(i) + '3'.repeat(n - i);
      break;
    }
    i -= 5;
  }

  return result;
}

// console.log(decentNumber(1));
// console.log(decentNumber(3));
// console.log(decentNumber(5));
console.log(decentNumber(11));

// Has only digits 3 and/or 5
// num of 3's is divisible by 5
// num of 5's is divisible by 3
// its de largest such number for its length
