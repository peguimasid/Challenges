function commonChild(s1, s2) {
  let array = [Array(s2.length + 1).fill(0)];

  [...s1].forEach((s1Char, i) => {
    array[i + 1] = [0];
    [...s2].forEach((s2Char, j) => {
      array[i + 1][j + 1] =
        s1Char === s2Char
          ? array[i][j] + 1
          : Math.max(array[i + 1][j], array[i][j + 1]);
    });
  });

  return array[s2.length][s1.length];
}

console.log(commonChild('ABCDEF', 'FBDAMN'));
