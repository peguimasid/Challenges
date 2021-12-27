function solution(trainingData) {
  const { answerTime, num } = trainingData.reduce(
    (acc, curr) => {
      const [answerTime, correctness] = curr;

      if (correctness === 1) {
        acc.answerTime += answerTime;
        acc.num++;
      }

      return acc;
    },
    { answerTime: 0, num: 0 }
  );

  return answerTime / num || 0;
}

const trainingData = [
  [4, 1],
  [4, -1],
  [0, 0],
  [6, 1],
];

console.log(solution(trainingData));
