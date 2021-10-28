function sumXor(n) {
  if (n <= 1) return 1;

  return Math.pow(
    2,
    n.toString(2).match(new RegExp('0', 'g'))
      ? n.toString(2).match(new RegExp('0', 'g')).length
      : 0
  );
}

console.log(sumXor(5));
