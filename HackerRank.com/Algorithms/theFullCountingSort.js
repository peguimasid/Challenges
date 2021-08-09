function replaceFirstHalphWithDashes(array) {
  let middle = Math.floor(array.length / 2);

  for (let i = 0; i < middle; i++) {
    const [number] = array[i];

    const toNum = Number(number);

    array[i] = [toNum, '-'];
  }
}

function countSort(array) {
  replaceFirstHalphWithDashes(array);

  let countValues = Array.from({ length: 100 }, () => []);

  for (let i = 0; i < array.length; i++) {
    const [number, string] = array[i];

    countValues[number].push(string);
  }

  return countValues.flat(1).join(' ');
}

console.log(
  countSort([
    [0, 'ab'], //
    [6, 'cd'], //
    [0, 'ef'], //
    [6, 'gh'], //
    [4, 'ij'], //
    [0, 'ab'], //
    [6, 'cd'], //
    [0, 'ef'], //
    [6, 'gh'], //
    [0, 'ij'], //
    [4, 'that'], //
    [3, 'be'], //
    [0, 'to'], //
    [1, 'be'], //
    [5, 'question'], //
    [1, 'or'], //
    [2, 'not'], //
    [4, 'is'], //
    [2, 'to'], //
    [4, 'the'], //
  ])
);
