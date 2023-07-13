const map = {
  zero: 0,
  one: 1,
  eleven: 11,
  ten: 10,
  two: 2,
  twelve: 12,
  twenty: 20,
  three: 3,
  thirteen: 13,
  thirty: 30,
  four: 4,
  fourteen: 14,
  forty: 40,
  five: 5,
  fifteen: 15,
  fifty: 50,
  six: 6,
  sixteen: 16,
  sixty: 60,
  seven: 7,
  seventeen: 17,
  seventy: 70,
  eight: 8,
  eighteen: 18,
  eighty: 80,
  nine: 9,
  nineteen: 19,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

/**
 * @param {string} string
 * @returns
 */
const parseInt = (string) => {
  return string.split(/[ -]/).reduce((acc, curr) => {
    const toInt = map[curr] ?? 0;

    if (toInt >= 100) {
      return acc + toInt * (acc % toInt) - (acc % toInt);
    }

    return acc + toInt;
  }, 0);
};

// console.log(parseInt('one')); // 1
// console.log(parseInt('twenty')); // 20
// console.log(parseInt('two hundred forty-six')); // 246
// prettier-ignore
console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen")); // 783919
