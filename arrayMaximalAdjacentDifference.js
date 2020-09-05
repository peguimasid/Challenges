function arrayMaximalAdjacentDifference(array) {
  let maximalDifferenceBetweenAdjacentNumbers = 0;

  for(let i = 0; i < array.length; i++) {
    const differenceBetweenAdjacentNumbers = Math.abs(array[i] - array[i + 1]);

    if(differenceBetweenAdjacentNumbers > maximalDifferenceBetweenAdjacentNumbers) {
      maximalDifferenceBetweenAdjacentNumbers = differenceBetweenAdjacentNumbers
    }
  }

  return maximalDifferenceBetweenAdjacentNumbers;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
