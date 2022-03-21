function printerError(s) {
  const validLetters = 'abcdefghijklm';
  return `${s.split('').reduce((acc, curr) => {
    if (!validLetters.includes(curr)) acc += 1;

    return acc;
  }, 0)}/${s.length}`;
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
