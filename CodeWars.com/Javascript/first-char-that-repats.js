/**
 * @param {string} s
 */
function firstDup(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s.lastIndexOf(s[i]) !== i) return s[i];
  }
}

console.log(firstDup("tweet"), "t");
console.log(firstDup("Ode to Joy"), " ");
console.log(firstDup("ode to joy"), "o");
console.log(firstDup("bar"), undefined);
console.log(firstDup("123123"), "1");
console.log(firstDup("!@#$!@#$"), "!");
