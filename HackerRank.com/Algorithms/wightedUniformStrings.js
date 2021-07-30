function getWeights(aString) {
  let result = [];

  let sameLetterCount = 0;
  let currentLetter;
  let currentLetterIndex;

  for (let i = 0; i < aString.length; i++) {
    if (!currentLetter || aString[i] !== currentLetter) {
      sameLetterCount = 0;
      currentLetter = aString[i];
      currentLetterIndex = currentLetter.charCodeAt() - 96;
    }

    sameLetterCount++;
    result.push(sameLetterCount * currentLetterIndex);
  }

  return result;
}

function weightedUniformStrings(string, queries) {
  let weights = getWeights(string);

  return queries.map((query) => (weights.includes(query) ? 'Yes' : 'No'));
}

console.log(weightedUniformStrings('abbcccdddd', [1, 7, 5, 4, 15]));
