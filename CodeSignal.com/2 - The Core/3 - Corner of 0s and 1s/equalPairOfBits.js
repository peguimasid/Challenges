function equalPairOfBits(n, m) {
  return ~(n^m) & ((n^m) + 1);
}