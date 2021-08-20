function makingAnagrams(string1, string2) {
  let result = 0;

  // store original string2 format so we can work with it later
  let temp = string2;

  // for each char of string1 if string2 contains in we remove the char from string2 and do nothing
  // else, we set result to be + 1 (that char is not in the two strings so we need to remove it)
  string1.split('').forEach((char) => {
    string2.includes(char) ? (string2 = string2.replace(char, '')) : result++;
  });

  // for each char of string2 (original stored in temp) if string1 contains in we remove the char from string1 and do nothing
  // else, we set result to be + 1 (that char is not in the two strings so we need to remove it)
  temp.split('').forEach((char) => {
    string1.includes(char) ? (string1 = string1.replace(char, '')) : result++;
  });

  return result;
}

console.log(makingAnagrams('cde', 'abc'));
