function longestWord(text) {
  let result = '';
  let actualWord = '';

  const regexp = /[a-zA-Z]/;

  for (let i = 0; i < text.length; i++) {
    if(regexp.test(text[i])) {
      actualWord+=text[i];
      if(text[i] === text[text.length - 1] && actualWord.length > result.length) {
        result = actualWord
      }
    } else {

      if(actualWord.length > result.length) {
        result = actualWord
      }
      actualWord = '';

    }
  }

  return result;
}
