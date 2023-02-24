/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
  let result = '';

  let i = 0;

  while (i < command.length) {
    if (command[i] === '(' && command[i + 1] === ')') {
      result += 'o';
      i += 2;
      continue;
    }
    if (command[i] === '(' && command[i + 1] !== ')') {
      i += 1;
      continue;
    }
    result += command[i];
    i += command[i + 1] === ')' ? 2 : 1;
  }

  return result;
};

console.log(interpret('G()(al)')); // Goal
console.log(interpret('G()()()()(al)')); // "Gooooal"
console.log(interpret('(al)G(al)()()G')); // "alGalooG"
