/**
 * @param {number} num
 * @return {number}
 */
const maximum69Number = (num) => {
  let result = num;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    const replace =
      num.slice(0, i) + (num[i] === '9' ? '6' : '9') + num.slice(i + 1);
    result = Math.max(Number(replace), result);
  }
  return result;
};

console.log(maximum69Number(9669));
