const digitsMap = {
  ':)': 0,
  ':D': 1,
  '>(': 2,
  '>:C': 3,
  ':/': 4,
  ':|': 5,
  ':O': 6,
  ';)': 7,
  '^.^': 8,
  ':(': 9,
};

/**
 * @param {string} emojiString
 * @return {string}
 */
function deEmojify(emojiString) {
  if (!emojiString?.length) return '';

  return emojiString
    .split('  ')
    .map((chain) => {
      return chain
        .split(' ')
        .map((emote) => digitsMap[emote])
        .join('');
    })
    .reduce((acc, curr) => acc.concat(String.fromCharCode(curr)), '');
}

console.log(deEmojify(':D :) :/  :D :) :|'), 'hi');
// prettier-ignore
console.log(deEmojify(';) >(  :D :) :D  :D :) ^.^  :D :) ^.^  :D :D :D  >:C >(  :D :D :(  :D :D :D  :D :D :/  :D :) ^.^  :D :) :)  >:C >:C'),'Hello world!');
console.log(deEmojify(':)'), '\x00');
console.log(deEmojify(''), '');
