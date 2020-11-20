function lineEncoding(string) {
  let result = '';
  let frequencyCounter = [];
  let counter = 0;

  for(let i = 0; i < string.length; i++) {
    if(string[i] === string[i + 1]) {
      counter++
    } else {
      counter++;
      frequencyCounter.push([counter, string[i]])
      counter = 0;
    }
  }

  frequencyCounter.forEach(frequency => {
    if(frequency[0] === 1) {
      result += frequency[1];
    } else {
      result += frequency[0];
      result += frequency[1];
    }
  })

  return result;
}