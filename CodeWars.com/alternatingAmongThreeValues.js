function f(x, cc) {
  return Object.values(cc)[
    Object.values(cc).findIndex((item) => item === x) + 1
  ] !== undefined
    ? Object.values(cc)[Object.values(cc).findIndex((item) => item === x) + 1]
    : Object.values(cc)[0];
}

console.log(f(4, { a: 3, b: 4, c: 5 }));
