function stones(n, a, b) {
  return [
    ...new Set(
      Array.from({ length: n }).map((_n, i) => a * i + b * (n - i - 1))
    ),
  ].sort((a, b) => a - b);
}

console.log(stones(3, 1, 2));

// n - numero de rochas encontradas
// a - uma possivel diferenca
// b - outra possivel diferenca
