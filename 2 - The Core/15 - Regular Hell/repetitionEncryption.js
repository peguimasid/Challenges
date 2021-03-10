function repetitionEncryption(letter) {
  var pattern = /([A-Z]+)[^A-Z]+\1\b/ig;
  var matches = letter.match(pattern);
  console.log(matches)
  if (matches) {
    return matches.length;
  }
  else {
    return 0;
  }
}

console.log(repetitionEncryption("Hi, hi Jane! I'm so. So glad to to finally be able to write - WRITE!! - to you!"))