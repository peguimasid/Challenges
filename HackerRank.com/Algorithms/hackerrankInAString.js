function hackerrankInString(string) {
  let findWord = 'hackerrank';

  let j = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === findWord[j]) j++;
  }

  if (j >= findWord.length) return 'YES';

  return 'NO';
}

console.log(hackerrankInString('hhaacckkekraraannk'));
