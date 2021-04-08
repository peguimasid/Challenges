function isLeapYear(year) {
  if (year % 4 !== 0) return false
  if (year > 1918 && year % 100 === 0 && year % 400 !== 0) return false;

  return true;
}

function dayOfProgrammer(year) {
  if (year === 1918) return `26.09.${year}`

  return isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`
}

console.log(dayOfProgrammer(2100))