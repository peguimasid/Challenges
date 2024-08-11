/**
 * @param {string} s
 */
function firstDup(s) {
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) return s[i];
    }
  }
}

console.log(firstDup("tweet"), "t");
console.log(firstDup("Ode to Joy"), " ");
console.log(firstDup("ode to joy"), "o");
console.log(firstDup("bar"), undefined);
console.log(firstDup("123123"), "1");
console.log(firstDup("!@#$!@#$"), "!");
