function workbook(n, k, arr) {
  let result = 0;

  let page = 1;

  for (let i = 0; i < n; i++) {
    const numExercisesInChapter = arr[i];
    let exercisesInPage = 0;

    for (let j = 1; j <= numExercisesInChapter; j++) {
      if (exercisesInPage >= k) {
        page++;
        exercisesInPage = 0;
      }
      exercisesInPage++;
      if (j === page) result++;
    }

    page++;
  }

  return result;
}

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
