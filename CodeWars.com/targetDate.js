function dateNbDays(a0, a, p) {
  const interestPerDay = p / 36000;
  const targetAmount = a;
  let currentAmount = a0;

  let currentDate = new Date('2016-01-01');

  let numOfDays = 0;

  while (currentAmount < targetAmount) {
    numOfDays++;
    currentAmount += currentAmount * interestPerDay;
  }

  currentDate.setDate(currentDate.getDate() + numOfDays);

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getUTCDate();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  return `${year}-${month}-${day}`;
}

console.log(dateNbDays(4281, 5087, 2));

// initial date => 01/01/2016
// a0 => amount of money i have
// p => taxa de juros de p% / 360
// a => amount of money i want to have
