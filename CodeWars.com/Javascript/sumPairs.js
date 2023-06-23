function sumPairs(ints, s) {
  const encountered = {};

  for (const num of ints) {
    const difference = s - num;

    if (encountered[difference]) {
      return [difference, num];
    }

    encountered[num] = true;
  }

  return undefined;
}

console.log(sumPairs([11, 3, 7, 5], 10)); // [3, 7]
console.log(sumPairs([4, 3, 2, 3, 4], 6)); // [4, 2]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)); // [3, 7]
