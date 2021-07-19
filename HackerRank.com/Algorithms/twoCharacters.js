function stringWithTwoChars(string, charOne, charTwo) {
  let result = '';

  for (let char of string) {
    if (char === charOne || char === charTwo) result += char;
  }

  return result;
}

function containsOnlyAlternatingChars(string) {
  let result = true;

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    const nextChar = string[i + 1];

    if (currentChar === nextChar) {
      result = false;
      return result;
    }
  }

  return result;
}

function alternate(string) {
  let result = 0;

  let chars = [];

  for (let char of string) {
    if (!chars.includes(char)) chars.push(char);
  }

  for (let i = 0; i < chars.length; i++) {
    const currentChar = chars[i];
    for (let j = i + 1; j < chars.length; j++) {
      const nextChar = chars[j];

      let stringWithOnlyTwoChars = stringWithTwoChars(
        string,
        currentChar,
        nextChar
      );

      if (
        stringWithOnlyTwoChars.length > result &&
        containsOnlyAlternatingChars(stringWithOnlyTwoChars)
      ) {
        result = stringWithOnlyTwoChars.length;
      }
    }
  }

  return result;
}

// if (
//   stringWithOnlyTwoChars.length > result &&
//   containsOnlyAlternatingChars(stringWithOnlyTwoChars)
// ) {
//   console.log(stringWithOnlyTwoChars);
//   result = stringWithOnlyTwoChars.length;
// }

console.log(alternate('asdcbsdcagfsdbgdfanfghbsfdab'));
