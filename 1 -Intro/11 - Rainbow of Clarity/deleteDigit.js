function deleteDigit(number) {
  let result = 0;

  number = number.toString();

  for(let i = 0; i < number.length; i++) {
    let digitsArray = number.split('');

    digitsArray.splice(i, 1);
    
    let digitsJoined = digitsArray.join('');
    
    if(digitsJoined > result) {
      result = digitsJoined;
    }
  }

  return Number(result);
}