const daysOfWeek = {
  0: 'Monday',
  1: 'Tuesday',
  2: 'Wednesday',
  3: 'Thursday',
  4: 'Friday',
  5: 'Saturday',
  '-1': 'Sunday',
};

function mostFrequentDays(year) {
  let startDate = new Date(year, 0, 1);
  let endDate = new Date(year, 11, 31);

  let frequencyCounter = {};

  while (startDate <= endDate) {
    const dayOfWeek = startDate.getDay() - 1;

    frequencyCounter[dayOfWeek]
      ? frequencyCounter[dayOfWeek]++
      : (frequencyCounter[dayOfWeek] = 1);

    startDate.setDate(startDate.getDate() + 1);
  }

  const mostFrequentDayNum = Math.max(...Object.values(frequencyCounter));

  return Object.entries(frequencyCounter)
    .filter(([, frequency]) => frequency === mostFrequentDayNum)
    .map(([day]) => daysOfWeek[day]);
}

console.log(mostFrequentDays(1984));
