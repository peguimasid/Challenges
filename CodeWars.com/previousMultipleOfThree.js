const prevMultOfThree = (n) => {
  let i = String(n).length;

  while (i > 0) {
    const currentNum = Number(String(n).slice(0, i));

    if (currentNum % 3 === 0) return currentNum;
    i--;
  }

  return null;
};

console.log(prevMultOfThree(952406));
