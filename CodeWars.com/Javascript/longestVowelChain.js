const isVowel = (char) => 'aeiou'.includes(char);

function solve(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let vowelCount = 0;

    let j = i;

    while (isVowel(s[j])) {
      vowelCount++;
      j++;
    }

    if (vowelCount > result) result = vowelCount;
  }

  return result;
}

console.log(solve('codewarriors'));
console.log(solve('suoidea'));
console.log(solve('ultrarevolutionariees'));
console.log(solve('strengthlessnesses'));
console.log(solve('cuboideonavicuare'));
console.log(solve('chrononhotonthuooaos'));
console.log(solve('iiihoovaeaaaoougjyaw'));
