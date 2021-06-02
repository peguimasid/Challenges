function flatlandSpaceStations(n, c) {
  let distances = [];
  c.sort((a, b) => a - b);
  for (let i = 0; i < c.length - 1; i++) {
    const dist = Math.floor(Math.abs(c[i + 1] - c[i]) / 2);
    distances.push(dist);
  }

  const before = Math.abs(c[0] - 0);
  const after = Math.abs(n - c[c.length - 1]) - 1;
  return Math.max(...distances, before, after);
}

console.log(flatlandSpaceStations(20, [13, 1, 11, 10, 6]));
