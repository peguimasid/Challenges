function steadyGene(gene) {
  const frequences = { A: 0, C: 0, G: 0, T: 0 };

  for (const letter of gene) frequences[letter]++;

  let i = 0;
  let j = 0;
  let min = Infinity;
  let l4 = gene.length / 4;

  while (i < gene.length && j < gene.length) {
    if (['A', 'C', 'G', 'T'].some((letter) => frequences[letter] > l4)) {
      frequences[gene[j]]--;
      j++;
    } else {
      min = Math.min(min, j - i);
      frequences[gene[i]]++;
      i++;
    }
  }

  return min;
}

console.log(steadyGene('ACTGAAAG'));
