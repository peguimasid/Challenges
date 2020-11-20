function palindromeRearranging(string) {
  if(string.length === 1) return true;

  let frequencyCounter = {};
  let oddCounter = 0;

  const isOdd = val => val % 2 !== 0;
  
  for(let char of string) {
    frequencyCounter[char] ? frequencyCounter[char]++ : frequencyCounter[char] = 1
  }
  
  for(let key in frequencyCounter) {
    if(isOdd(frequencyCounter[key])) oddCounter++
  }

  if(oddCounter > 1) return false;

  return true;
}

console.log(palindromeRearranging('zyyzzzzz'));
