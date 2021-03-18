function increaseNumberRoundness(n) {
  return /0[1-9]/.test(n);
}

// ??

console.log(increaseNumberRoundness(902200100))