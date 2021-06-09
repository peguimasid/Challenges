function compare(G, P, r, c) {
  for (const [rIndex, row] of P.entries()) {
    for (const [cIndex, col] of [...row].entries()) {
      if (col != G[r + rIndex][c + cIndex]) return false;
    }
  }
  return true;
}

function gridSearch(G, P) {
  for (const [rIndex, row] of G.entries()) {
    if (G.length - rIndex < P.length) break;
    for (const [cIndex, col] of [...row].entries()) {
      if (G[0].length - cIndex < P[0].length) break;
      if (col != P[0][0]) continue;
      if (compare(G, P, rIndex, cIndex)) return 'YES';
    }
  }
  return 'NO';
}

console.log(
  gridSearch(
    ['1234567890', '0987654321', '1111111111', '1111111111', '2222222222'],
    ['876543', '111111', '111111']
  )
);
