function camelcase(string) {
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return string.split('').reduce((acc, char) => {
    acc += uppercaseAlphabet.includes(char) ? 1 : 0;
    return acc;
  }, 1);
}

console.log(camelcase('saveChangesInTheEditor'));
