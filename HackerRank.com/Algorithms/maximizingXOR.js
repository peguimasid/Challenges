function maximizingXor(l, r) {
  let result = 0;

  for (let i = l; i <= r; i++) {
    for (let j = i; j <= r; j++) {
      if ((i ^ j) > result) result = i ^ j;
    }
  }

  return result;
}

console.log(maximizingXor(10, 15));
