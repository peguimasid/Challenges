const reverseSeq = (n) => {
  return new Array(n).fill(0).map((_, index) => n - index);
};

console.log(reverseSeq(5));
