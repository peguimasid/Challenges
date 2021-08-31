function stringConstruction(string) {
  let result = 0;
  let alreadyCopied = [];

  for (const char of string) {
    if (!alreadyCopied.includes(char)) {
      alreadyCopied.push(char);
      result++;
    }
  }

  return result;
}

console.log(stringConstruction('abcd'));
console.log(stringConstruction('abab'));
