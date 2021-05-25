function minimumDistances(a) {
  let result = Number.POSITIVE_INFINITY;

  for (let i = 0; i < a.length; i++) {
    const number = a[i];

    for (let j = i + 1; j < a.length; j++) {
      const adjacentNumber = a[j];

      if (number === adjacentNumber && Math.abs(i - j) < result)
        result = Math.abs(i - j);
    }
  }

  return result === Number.POSITIVE_INFINITY ? -1 : result;
}

console.log(minimumDistances([3, 2, 1, 2, 3]));
