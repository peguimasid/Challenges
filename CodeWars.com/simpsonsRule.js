function f(x) {
  return (3 / 2) * Math.pow(Math.sin(x), 3);
}

function simpson(n) {
  let h = Math.PI / n;

  let s1 = 0;
  for (let i = 1; i <= ~~(n / 2); i++) {
    s1 += f((2 * i - 1) * h);
  }

  let s2 = 0;
  for (let i = 1; i <= ~~(n / 2) - 1; i++) {
    s2 += f(2 * i * h);
  }

  return (Math.PI / (3 * n)) * (f(0) + f(Math.PI) + 4 * s1 + 2 * s2);
}

console.log(simpson(290));
