function digitize(n) {
  return String(n)
    .split('')
    .map((i) => Number(i));
}
