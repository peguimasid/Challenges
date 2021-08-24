function gameOfThrones(string) {
  let frequencyCounter = {};

  for (let char of string) {
    frequencyCounter[char]
      ? frequencyCounter[char]++
      : (frequencyCounter[char] = 1);
  }

  let oddNum = 0;

  for (let key in frequencyCounter) {
    oddNum += frequencyCounter[key] % 2;
  }

  return oddNum > 1 ? 'NO' : 'YES';
}

console.log(gameOfThrones('aabbccdd'));
console.log(gameOfThrones('aaabbbb'));
console.log(gameOfThrones('cdefghmnopqrstuvw'));
console.log(gameOfThrones('cdcdcdcdeeeef'));
