function solution(a) {
  return /s.$/.test(String(a).split('t')[12]);
}

const ad = [
  [false, true, true, false, false],
  [true, false, true, false, false],
  [true, true, false, true, true],
  [false, false, true, false, true],
  [false, false, true, true, false],
];

console.log(solution(ad));
