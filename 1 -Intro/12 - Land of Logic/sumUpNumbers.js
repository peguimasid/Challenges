function isNumber(number) {
  const regexp = /[0-9]/
  return regexp.test(number);
}

function sumUpNumbers(string) {
  let result = 0;
  let currentNumber = '0';

  for(let i = 0; i < string.length; i++) {
    let currentChar = parseInt(string[i]);

    if(isNumber(currentChar)) {
      currentNumber += currentChar;
    } else {
      result += parseInt(currentNumber);
      currentNumber = '0'
    }
    
  }

  result += parseInt(currentNumber);

  return result
}
