/**
 * @param {string[]} details
 * @return {number}
 */
function countSeniors(details) {
  return details.filter((passenger) => {
    return Number(passenger.slice(11, 13)) > 60;
  }).length;
}

// prettier-ignore
// console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"])) // 2

// prettier-ignore
// console.log(countSeniors(["1313579440F2036","2921522980M5644"])) // 0

// prettier-ignore
// console.log(countSeniors(["5612624052M0130","5378802576M6424","5447619845F0171","2941701174O9078"])) // 2

// prettier-ignore
console.log(countSeniors(["9751302862F0693","3888560693F7262","5485983835F0649","2580974299F6042","9976672161M6561","0234451011F8013","4294552179O6482"])) // 4
