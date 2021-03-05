function swapAdjacentWords(s) {
  return s.replace(/(\S+)\s(\S+)/g, `$2 $1`);
}

console.log(swapAdjacentWords("CodeFight On"))