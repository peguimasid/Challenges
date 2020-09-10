function sameFrequency(firstNumber, secondNumber) {
  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};

  firstNumber = firstNumber.toString();
  secondNumber = secondNumber.toString();

  for(let val of firstNumber) {
    frequencyCounterOne[val] ? frequencyCounterOne[val]++ : frequencyCounterOne[val] = 1;
  }

  for(let val of secondNumber) {
    frequencyCounterTwo[val] ? frequencyCounterTwo[val]++ : frequencyCounterTwo[val] = 1;
  }

  for(let key in frequencyCounterOne) {
    if(!(key in frequencyCounterTwo)) return false;
    if(frequencyCounterOne[key] !== frequencyCounterTwo[key]) return false;
  }
  return true;
}

console.log(sameFrequency(1821, 281));