const alphabetPosition = (text, alphabet = 'abcdefghijklmnopqrstuvwxyz') =>
  text
    .split('')
    .map((char) => char.toLowerCase())
    .filter((char) => alphabet.includes(char))
    .map((char) => alphabet.indexOf(char) + 1)
    .join(' ');

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
