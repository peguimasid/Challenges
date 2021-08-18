const isEven = (number) => number % 2 === 0;

function calculateMedian(array) {
  if (isEven(array.length)) {
    return (
      (array[Math.floor(array.length / 2)] +
        array[Math.ceil(array.length / 2)]) /
      2
    );
  } else {
    return array[Math.floor(array.length / 2)];
  }
}

function activityNotifications(expenditure, d) {
  let warnings = 0;

  for (let i = d, j = 0; i < expenditure.length; i++, j++) {
    const currentExpense = expenditure[i];

    const previousExpenses = [];

    for (let currDay = j; currDay < i; currDay++) {
      previousExpenses.push(expenditure[currDay]);
    }

    previousExpenses.sort((a, b) => a - b);

    const median = calculateMedian(previousExpenses);

    if (currentExpense >= median * 2) warnings++;
  }

  return warnings;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
