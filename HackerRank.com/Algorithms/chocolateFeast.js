function chocolateFeast(n, c, m) {
  let eat = Math.floor(n / c);
  let packs = Math.floor(n / c);

  while (packs >= m) {
    packs -= m;
    eat += 1;
    packs += 1;
  }

  return eat;
}

console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));

// N = Dinheito no bolso
// C = Preco do chocolate
// M = A cada "M" emabalagens ele ganha um chocolate
