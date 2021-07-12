function introTutorial(V, arr) {
  let result = -1;

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (number === V) result = i;
  }

  return result;
}

console.log(introTutorial(5, [1, 2, 3, 4, 5]));
