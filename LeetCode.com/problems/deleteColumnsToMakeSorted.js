/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  let result = 0;

  for (let i = 0; i < strs[0].length; i++) {
    let curr = '';
    for (let j = 0; j < strs.length; j++) {
      curr += strs[j][i];
    }
    if (curr != curr.split('').sort().join('')) result++;
  }

  return result;
};

console.log(minDeletionSize(['rrjk', 'furt', 'guzm']));
console.log(minDeletionSize(['abc', 'bce', 'cae']));
console.log(minDeletionSize(['a', 'b']));
