function evenDigitsOnly(numbers) {
  numbers = numbers.toString();

  let allNumbersIsEven = true;

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
      allNumbersIsEven = false;
      return allNumbersIsEven;
    }
  }

  return allNumbersIsEven;
}

console.log(evenDigitsOnly(2246))