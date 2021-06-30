function larrysArray(A) {
  let temp = [];

  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    let count = 0;

    for (let j = i; j < A.length; j++) {
      const followingNum = A[j];

      if (num > followingNum) count++;
    }

    temp.push(count);
  }

  return temp.reduce((acc, num) => acc + num) % 2 === 0 ? 'YES' : 'NO';
}

console.log(larrysArray([1, 6, 5, 2, 4, 3]));
