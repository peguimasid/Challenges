const prevMultOfThree = (n) =>
  Array(String(n).length)
    .fill(0)
    .map((_item, index) => Number(String(n).slice(0, index + 1)))
    .reverse()
    .find((number) => number % 3 === 0) || null;

console.log(prevMultOfThree(952406));
