function lonelyinteger(array) {
  const frequencyCounter = array.reduce((acc, currentNumber) => {
    acc[currentNumber] ? acc[currentNumber]++ : (acc[currentNumber] = 1);
    return acc;
  }, {});

  for (let key in frequencyCounter) {
    if (frequencyCounter[key] === 1) return key;
  }
}

console.log(lonelyinteger([1, 1, 2]));
