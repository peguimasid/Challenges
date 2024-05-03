const isNumber = (x) => !isNaN(x);

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
  const version1Components = version1.split('.').map(Number);
  const version2Components = version2.split('.').map(Number);

  let i = 0;
  let j = 0;

  while (isNumber(version1Components[i]) && isNumber(version2Components[j])) {
    const v1Path = version1Components[i];
    const v2Path = version2Components[j];

    if (v1Path < v2Path) return -1;
    if (v2Path < v1Path) return 1;

    i++;
    j++;
  }

  while (isNumber(version1Components[i])) {
    if (version1Components[i] > 0) return 1;
    i++;
  }

  while (isNumber(version2Components[j])) {
    if (version2Components[j] > 0) return -1;
    j++;
  }

  return 0;
}

console.log(compareVersion('1.01', '1.001')); // 0
console.log(compareVersion('1.0', '1.0.0')); // 0
console.log(compareVersion('0.1', '1.1')); // -1
console.log(compareVersion('1.0.1', '1')); // 1
