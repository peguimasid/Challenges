/**
 * @param {string} str
 * @return {string}
 */
const disemvowel = (str) => {
  return str
    .split('')
    .filter((char) => !'aeiou'.includes(char.toLowerCase()))
    .join('');
};

//prettier-ignore
console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"
//prettier-ignore
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
//prettier-ignore
console.log(disemvowel("What are you, a communist?")) // "Wht r y,  cmmnst?"
