const isVowel = (char, vowels = ['a', 'e', 'i', 'o', 'u']) =>
  vowels.includes(char);

function swap(string) {
  return string
    .split('')
    .map((char) => (isVowel(char) ? char.toUpperCase() : char))
    .join('');
}

console.log(swap('Hello World!'));
