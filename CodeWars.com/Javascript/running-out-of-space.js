/**
 * @param {string[]} array
 * @return {string[]}
 */
function spacey(array) {
  const sum = [];
  return array.reduce((acc, curr) => {
    const toPush = sum.join('').concat(curr);
    sum.push(curr);
    acc.push(toPush);
    return acc;
  }, []);
}

console.log(spacey(['i', 'have', 'no', 'space'])); // ['i','ihave','ihaveno','ihavenospace']
