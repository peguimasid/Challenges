function marsExploration(string) {
  let result = 0;

  for (let i = 1; i < string.length; i += 3) {
    const prev = string[i - 1];
    const curr = string[i];
    const next = string[i + 1];

    if (prev !== 'S') result++;
    if (curr !== 'O') result++;
    if (next !== 'S') result++;
  }

  return result;
}

console.log(marsExploration('SOSSPSSQSSOR'));
// console.log(marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'));
