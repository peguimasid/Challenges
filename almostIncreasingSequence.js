function almostIncresingSequence(sequence) {
  let invalidItemsCount =  0

  for(let i = 1; i < sequence.length; i++) {
    if(sequence[i] <= sequence[i - 1]) {
      invalidItemsCount++;
      if(invalidItemsCount > 1) return false;
      if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }
  
  return true;
}

console.log(almostIncresingSequence([1]))