/**
 *
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
function scramble(str1, str2) {
  const str1Frequency = str1.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const str2Frequency = str2.split('').reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(str2Frequency).every(([key, value]) => {
    if (!str1Frequency[key]) return false;
    return str1Frequency[key] >= value;
  });
}

console.log(scramble('rkqodlw', 'world')); // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true
console.log(scramble('katas', 'steak')); // false
console.log(scramble('scriptjavx', 'javascript')); // false
console.log(scramble('scriptingjava', 'javascript')); // true
console.log(scramble('scriptsjava', 'javascripts')); // true
console.log(scramble('javscripts', 'javascript')); // false
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('aabbcamaomsccdd', 'commas')); // true
console.log(scramble('commas', 'commas')); // true
console.log(scramble('sammoc', 'commas')); // true
