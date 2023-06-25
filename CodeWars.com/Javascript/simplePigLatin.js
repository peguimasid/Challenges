/**
 * @param {string} str
 */
const pigIt = (str) => {
  return str
    .split(' ')
    .map((word) => {
      if (/[^a-zA-Z]/.test(word)) return word;
      const newWord = word.split('');
      newWord.push(newWord.shift());
      return `${newWord.join('')}ay`;
    })
    .join(' ');
};

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
// console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
