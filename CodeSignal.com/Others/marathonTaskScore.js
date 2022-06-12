function solution(
  marathonLength,
  maxScore,
  submissions,
  successfulSubmissionTime
) {
  if (successfulSubmissionTime === -1) return 0;
  if (successfulSubmissionTime <= 1 && submissions === 1) return maxScore;
  let result = maxScore;

  result -= 10 * (submissions - 1);
  result -= successfulSubmissionTime * ((maxScore / 2) * (1 / marathonLength));

  return Math.max(result, maxScore / 2);
}

console.log(solution(100, 400, 4, 30));
