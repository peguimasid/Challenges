function digitDegree(n) {
  let counter = 0;

  function helper(helperInput) {
    helperInput = helperInput.toString();

    if(helperInput.length === 1) return counter;

    counter++;

    const numbersArray = helperInput.split('');

    let allNumbersSum = numbersArray.reduce((a, b) => Number(a) + Number(b), 0);

    return helper(allNumbersSum);
  }

  helper(n);

  return counter;
}

console.log(digitDegree(91));