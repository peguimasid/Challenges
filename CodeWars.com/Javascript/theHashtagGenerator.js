/**
 * @param {string} str
 * @return {string}
 */
function generateHashtag(str) {
  const splitInSpace = str.split(' ').filter(String);

  if (!splitInSpace.length) return false;

  const parsed = splitInSpace
    .map(([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join('')}`)
    .join('');

  if (parsed.length >= 140) return false;
  return `#${parsed}`;
}

console.log(generateHashtag('')); // false,
console.log(generateHashtag(' '.repeat(200))); // false,
console.log(generateHashtag('Do We have A Hashtag')); // #DoWeHaveAHashtag
console.log(generateHashtag('Codewars')); // "#Codewars
console.log(generateHashtag('Codewars Is Nice')); // #CodewarsIsNice
console.log(generateHashtag('Codewars is nice')); // #CodewarsIsNice
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars')); // #CodeWars
// prettier-ignore
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat")) // false
console.log(generateHashtag('a'.repeat(139))); // #Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
console.log(generateHashtag('a'.repeat(140))); // false,
