function firstOperationCharacter(expr) {

  const mulIn = expr.match(/\([^()]*\d+ *\* *\d+[^()]*\)/)
  const sumIn = expr.match(/\([^()]*\d+ *\+ *\d+[^()]*\)/)
  const mul = expr.match(/\d+ *\* *\d+/)
  const sum = expr.match(/\d+ *\+ *\d+/)

  if (mulIn) return mulIn.index + mulIn[0].indexOf('*');
  if (sumIn) return sumIn.index + sumIn[0].indexOf('+');
  if (mul) return mul.index + mul[0].indexOf('*');
  if (sum) return sum.index + sum[0].indexOf('+');

}