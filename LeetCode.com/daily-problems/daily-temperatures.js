/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures(temperatures) {
  const result = [];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    let push = false;

    for (let j = i + 1; j < temperatures.length; j++) {
      const nextTemp = temperatures[j];

      if (nextTemp > currentTemp) {
        result.push(j - i);
        push = true;
        break;
      }
    }

    if (!push) result.push(0);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]

console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]

console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
