function sumPairs(ints, s) {
  const solutions = [];

  for (let i = 0; i < ints.length - 1; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) solutions.push([i, j]);
    }
  }

  if (!solutions?.length) return undefined;

  const [first] = solutions.sort(([, b1], [, b2]) => b1 - b2);

  const [i, j] = first;

  return [ints[i], ints[j]];
}

console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
