function evaporator(content, evap_per_day, threshold) {
  let percentageLeft = 100;
  let days = 0;

  while (percentageLeft >= threshold) {
    percentageLeft -= (percentageLeft * evap_per_day) / 100;
    days++;
  }

  return days;
}

// content => content in ml
// evap_per_day => percent lost per day
// threshold => in witch number deodorant is no longer useful

console.log(evaporator(10, 10, 5));
