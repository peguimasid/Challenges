/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function replaceWords(dictionary, sentence) {
  dictionary.sort((a, b) => a.length - b.length);

  const words = [];

  for (const word of sentence.split(" ")) {
    let find = false;

    for (const dict of dictionary) {
      if (word.startsWith(dict)) {
        words.push(dict);
        find = true;
        break;
      }
    }

    if (!find) words.push(word);
  }

  return words.join(" ");
}
// prettier-ignore
// console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")); // "the cat was rat by the bat"

// prettier-ignore
// console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs")); // "a a b c"

// prettier-ignore
console.log(replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa")); // "a a a a a a a a bbb baba a"
