function dynamicArray(n, queries) {
  let arr = [];

  for (let i = 0; i < n; i++) arr.push([]);

  let lastAnswer = 0;

  const answers = [];

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];

    const queryType = Number(query[0]);
    const x = Number(query[1]);
    const y = Number(query[2]);

    let idx = (x ^ lastAnswer) % n;

    if (queryType === 1) {
      arr[idx].push(y);
    }

    if (queryType === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }

  return answers;
}

console.log(dynamicArray(2, ['105', '117', '103', '210', '211']));
