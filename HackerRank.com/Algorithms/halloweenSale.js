function howManyGames(p, d, m, s) {
  let result = 0;
  let spend = 0;
  while (spend <= s) {
    if (spend >= p) {
      result++;
    }

    spend += p;

    if (p - d >= m && p - d > 0) {
      p -= d;
    } else {
      p = m;
    }
  }

  return result;
}

console.log(howManyGames(1, 100, 1, 9777));
