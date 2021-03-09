function programTranslation(solution, args) {
  var argumentVariants = args.join('|');
  var re = new RegExp(`(\\W)\\$?(${argumentVariants})(?=\\W)`, "g");
  var sub = "$1$$$2";
  return solution.replace(re, sub);
}

let solution = "function add($n, m) { return n + $m }"

console.log(programTranslation(solution, ["n", "m"]))