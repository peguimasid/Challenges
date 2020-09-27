// Normal
function firstDigit(string) {
  for(let i = 0; i < string.length; i++) {
    if((/[0-9]/).test(string[i])) {
      return string[i];
    };
  }
}

// Recursion
function firstDigit(string) {
  if(!string.length) return;

  const isNumber = (/[0-9]/).test(string[0])

  if(isNumber) return string[0];

  return firstDigit(string.substring(1));
}



console.log(firstDigit('var_1__Int'))