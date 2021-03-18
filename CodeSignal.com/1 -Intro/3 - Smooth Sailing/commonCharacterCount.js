function commonCharacterCount(stringOne, stringTwo) {
  let frequencyCounterOne = {};
  let frequencyCounterTwo = {};
  let totalCommonCharacters = 0;

  for(let value of stringOne) {
    frequencyCounterOne[value] ? frequencyCounterOne[value]++ : frequencyCounterOne[value] = 1;
  }

  for(let value of stringTwo) {
    frequencyCounterTwo[value] ? frequencyCounterTwo[value]++ : frequencyCounterTwo[value] = 1;
  }

  for(let key in frequencyCounterOne) {
    if(key in frequencyCounterTwo) {
      const numberOfTimesSpecificCharIsCommon = Math.min(frequencyCounterOne[key], frequencyCounterTwo[key])

      totalCommonCharacters += numberOfTimesSpecificCharIsCommon;
    }
  }

  return totalCommonCharacters;
}

console.log(commonCharacterCount("ababna", "alaks"))