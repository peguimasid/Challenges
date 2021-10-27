const isPowerOfTwo = (number) => {
  let start = 0;
  let lastPower = 0;
  let currentPower = Math.pow(2, start);

  while (currentPower < number) {
    lastPower = currentPower;
    currentPower = Math.pow(2, start);

    if (currentPower === number) return [true, lastPower];

    start++;
  }

  return [false, lastPower];
};

function getCurrentPlayer(result, startValue, currentNumberValue) {
  if (startValue === currentNumberValue) return 'Louise';
  if (result === 'Louise') return 'Richard';
  if (result === 'Richard') return 'Louise';
}

function counterGame(n) {
  let result;
  let currentNumberValue = n;

  while (currentNumberValue !== 1) {
    result = getCurrentPlayer(result, n, currentNumberValue);

    const [isPower, nextLowerPower] = isPowerOfTwo(currentNumberValue);

    if (isPower) {
      currentNumberValue = currentNumberValue / 2;
    } else {
      currentNumberValue -= nextLowerPower;
    }
  }

  return result;
}

console.log(counterGame(6));
