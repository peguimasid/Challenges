function isSentenceCorrect(sentence) {
  var re = /^[A-Z][^.?!]*[.?!]$/;
  return re.test(sentence);
}

console.log(isSentenceCorrect("This is an example of *correct* sentence."))