function getAllPresentLetters(array) {
  let result = [];

  for (let string of array) {
    for (let char of string) {
      if (!result.includes(char)) result.push(char);
    }
  }

  return result;
}

function gemstones(array) {
  const letters = getAllPresentLetters(array);

  return letters.reduce((acc, curr) => {
    acc += array.every((string) => string.split('').includes(curr)) ? 1 : 0;
    return acc;
  }, 0);
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']));
