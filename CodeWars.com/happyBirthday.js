function wrap(...params) {
  //your code here
  let [a, b, c] = [...params].sort((x, y) => x - y);
  return 2 * (c + b) + a * 4 + 20;
}

console.log(wrap(1, 3, 1));
