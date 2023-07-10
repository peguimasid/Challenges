/**
 * @param {string} s
 * @return {string}
 */
const accum = (s) => {
  return s
    .toLowerCase()
    .split('')
    .map((char, index) => `${char.toUpperCase()}${char.repeat(index)}`)
    .join('-');
};

console.log(accum('ZpglnRxqenU')); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum('NyffsGeyylB')); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// console.log(accum('MjtkuBovqrU')); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
// console.log(accum('EvidjUnokmM')); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
// console.log(accum('HbideVbxncC')); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
