function squareDigitsSequence(a0) {
  let used = new Set();
  
  while (!used.has(a0)) {
      used.add(a0);
      a0 = a0.toString()
          .split('')
          .map(x => parseInt(x) ** 2)
          .reduce((a, b) => a + b)
  }
  
  return used.size + 1;
}

console.log(squareDigitsSequence(16))

// const set1 = new Set([1, 2, 3, 4, 5]);

// console.log(set1.has(1));
// // expected output: true

// console.log(set1.has(5));
// // expected output: true

// console.log(set1.has(6));
// // expected output: false