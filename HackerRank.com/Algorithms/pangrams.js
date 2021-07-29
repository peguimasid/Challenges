function pangrams(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const findLetters = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();

    if (!findLetters.includes(char) && alphabet.includes(char))
      findLetters.push(char);
  }

  return findLetters.length === alphabet.length ? 'pangram' : 'not pangram';
}

console.log(
  pangrams('We promptly judged antique ivory buckles for the next prize')
);
