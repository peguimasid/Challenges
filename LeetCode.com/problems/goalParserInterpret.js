/**
 * @param {string} command
 * @return {string}
 */
const interpret = (command) => {
  return command.split('()').join('o').replaceAll('(al)', 'al');
};

console.log(interpret('G()(al)')); // Goal
console.log(interpret('G()()()()(al)')); // "Gooooal"
console.log(interpret('(al)G(al)()()G')); // "alGalooG"
