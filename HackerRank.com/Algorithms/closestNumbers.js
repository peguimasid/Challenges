function closestNumbers(array) {
  array.sort((a, b) => a - b);

  let smallDifference = Infinity;
  let numbersDiff = [];

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    const nextValue = array[i + 1];

    if (Math.abs(currentValue - nextValue) < smallDifference) {
      smallDifference = Math.abs(currentValue - nextValue);
      numbersDiff = [];
    }

    if (Math.abs(currentValue - nextValue) === smallDifference) {
      numbersDiff.push(currentValue, nextValue);
    }
  }

  return numbersDiff;
}

console.log(
  closestNumbers([
    -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854, -520, -470,
  ])
);
