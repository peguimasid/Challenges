function nonDivisibleSubset(k, s) {
  const remainders = new Array(k).fill(0);
  s.forEach(num => remainders[num % k]++);
  let result = (remainders[0] ? 2 : 1) - k % 2;
  for (let i = 1; i < k / 2; i++) {
    result += Math.max(remainders[i], remainders[k-i]);
  }
  return result;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]))