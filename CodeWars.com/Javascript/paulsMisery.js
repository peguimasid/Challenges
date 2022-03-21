function paul(x) {
  const points = {
    kata: 5,
    'Petes kata': 10,
    life: 0,
    eating: 1,
  };

  let result = 0;

  for (const activity of x) {
    result += points[activity];
  }

  if (result < 40) return 'Super happy!';
  if (result >= 40 && result < 70) return 'Happy!';
  if (result >= 70 && result < 100) return 'Sad!';

  return 'Miserable!';
}

console.log(paul(['life', 'eating', 'life']));
