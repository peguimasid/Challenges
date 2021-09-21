function gridChallenge(grid) {
  let data = grid.map((row) => row.split('').sort().join(''));

  for (let i = 0; i < data.length; i++) {
    const row = data[i];

    for (let j = 0; j < row.length - 1; j++) {
      const currentRowChar = data[j][i];
      const nextRowChar = data[j + 1][i];

      if (
        currentRowChar &&
        nextRowChar &&
        currentRowChar.charCodeAt() > nextRowChar.charCodeAt()
      )
        return 'NO';
    }
  }

  return 'YES';
}

console.log(gridChallenge(['abc', 'lmp', 'qrt']));
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']));
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv']));
// console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
// console.log(gridChallenge(['abc', 'ade', 'efg']));
