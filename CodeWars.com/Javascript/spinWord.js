/**
 * @param {string} string
 */
function spinWords(string) {
  return string
    .split(' ')
    .map((word) =>
      word.length >= 5 ? word.split('').reverse().join('') : word
    )
    .join(' ');
}

console.log(spinWords('Welcome'), 'emocleW');
console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
console.log(spinWords('This is a test'), 'This is a test');
console.log(spinWords('This is another test'), 'This is rehtona test');
// prettier-ignore
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
// prettier-ignore
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// prettier-ignore
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
