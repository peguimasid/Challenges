String.prototype.camelCase = function () {
  const string = this.toString();

  if (!string) return '';

  return string
    .split(' ')
    .map(([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join('')}`)
    .join('');
};

console.log('test case'.camelCase());
console.log('camel Case method'.camelCase());
console.log('say hello'.camelCase());
console.log('camel case word'.camelCase());
console.log(''.camelCase());
