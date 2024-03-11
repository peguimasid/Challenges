/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
function customSortString(order, s) {
  const orderMap = new Map(
    order.split('').map((letter, index) => [letter, index])
  );

  const inMap = (val) => orderMap.get(val) ?? Number.MAX_SAFE_INTEGER;

  return s
    .split('')
    .sort((a, b) => inMap(a) - inMap(b))
    .join('');
}

console.log(customSortString('cba', 'abcd')); // cbad
console.log(customSortString('bcafg', 'abcd')); // bcad
console.log(customSortString('exv', 'xwvee')); // eexvw
