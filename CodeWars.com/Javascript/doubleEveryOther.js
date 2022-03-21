function doubleEveryOther(a) {
  return a.map((item, index) => (index % 2 ? item * 2 : item));
}

console.log(doubleEveryOther([1, 2, 3, 4]));
