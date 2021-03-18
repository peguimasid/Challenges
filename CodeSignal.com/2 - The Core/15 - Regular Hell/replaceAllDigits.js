function replaceAllDigitsRegExp(input) {  
  return input.replaceAll(/[0-9]/g, '#')
}

console.log(replaceAllDigitsRegExp("There are 12 points"))