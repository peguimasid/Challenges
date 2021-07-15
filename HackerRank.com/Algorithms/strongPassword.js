function isSpecialChar(char) {
  const special_characters = '!@#$%^&*()-+';

  return special_characters.includes(char);
}
function isNumberChar(char) {
  const numbers = '0123456789';

  return numbers.includes(char);
}
function isLowerCaseChar(char) {
  const lower_case = 'abcdefghijklmnopqrstuvwxyz';

  return lower_case.includes(char);
}
function isUpperCaseChar(char) {
  const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return upper_case.includes(char);
}

function minimumNumber(n, password) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  let numbersCount = 0;
  let specialCharCount = 0;

  for (let i = 0; i < n; i++) {
    const char = password[i];
    if (isLowerCaseChar(char)) lowerCaseCount++;
    if (isSpecialChar(char)) specialCharCount++;
    if (isNumberChar(char)) numbersCount++;
    if (isUpperCaseChar(char)) upperCaseCount++;
  }

  let result = 0;

  if (lowerCaseCount < 1) result++;
  if (upperCaseCount < 1) result++;
  if (numbersCount < 1) result++;
  if (specialCharCount < 1) result++;

  if (n < 6) return Math.max(6 - n, result);

  return result;
}

console.log(minimumNumber(4, '4700')); // 3
console.log(minimumNumber(3, 'Ab1')); // 3

// tamanho é ao menos 6
// tem pelo menos 1 numero
// tem pelo menos 1 caractere minusculo
// tem pelo menos 1 caractere maiusculo
// tem pelo menos 1 caractere especial ("!@#$%^&*()-+")
