function add(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  let result = '';

  let num1Start = num1.length - 1;
  let num2Start = num2.length - 1;

  while (num1Start >= 0 || num2Start >= 0) {
    if (num1Start >= 0 && num2Start >= 0) {
      result =
        String(Number(num1[num1Start]) + Number(num2[num2Start])) + result;
    }
    if (num1Start >= 0 && num2Start < 0) {
      result = num1[num1Start] + result;
    }
    if (num2Start >= 0 && num1Start < 0) {
      result = num2[num2Start] + result;
    }

    num1Start--;
    num2Start--;
  }

  return Number(result);
}

console.log(add(16, 18));
console.log(add(122, 81));
console.log(add(2, 11));
console.log(add(0, 1));
console.log(add(0, 0));
console.log(add(1222, 30277));
