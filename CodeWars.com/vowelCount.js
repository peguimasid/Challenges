function getCount(str) {
  var vowelsCount = 0;

  let vowels = 'aeiou'

  for (let char of str) {
    vowels.includes(char) ? vowelsCount++ : null
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"))