const remove = (string) =>
  string
    .split(' ')
    .filter((item) => item.split('!').length !== 2)
    .join(' ');

console.log(remove('Hi!'));
console.log(remove('Hi! Hi!'));
console.log(remove('Hi! Hi! Hi!'));
console.log(remove('Hi Hi! Hi!'));
console.log(remove('Hi! !Hi Hi!'));
console.log(remove('Hi! Hi!! Hi!'));
console.log(remove('Hi! !Hi! Hi!'));
