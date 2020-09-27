function differentSymbolsNaive(string) {
  let frequencyCounter = [];

  for(let val of string) {
    if(frequencyCounter.indexOf(val) === -1) frequencyCounter.push(val);
  }

  return frequencyCounter.length;
}

console.log(differentSymbolsNaive('cabca'));