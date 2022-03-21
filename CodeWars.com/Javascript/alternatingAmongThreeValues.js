function f(x, cc) {
  const valuesArray = Object.values(cc);
  const findNumberIndex = valuesArray.findIndex((number) => number === x);

  return findNumberIndex + 1 === valuesArray.length
    ? valuesArray[0]
    : valuesArray[findNumberIndex + 1];
}

console.log(f(5, { a: 3, b: 4, c: 5 }));
