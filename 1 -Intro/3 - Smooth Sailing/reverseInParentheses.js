function reverseInParentheses(inputString) {
  while (inputString.includes('(')) {
      inputString = inputString.replace(/\(([^()]*)\)/, (_,str) => [...str].reverse().join(''));
  }
  return inputString;
}

// Não consegui resolver, código copiado de outro dev.

console.log(reverseInParentheses("foo(bar)lou"))