function additionWithoutCarrying(param1, param2) {
  var result = 0,
  num = 1;
while (param1 + param2 > 0) {
  num *= 10;
  result += (param1 + param2) % num;
  param1 -= param1 % num;
  param2 -= param2 % num;
}
return result;
}

console.log(additionWithoutCarrying(456, 1734))