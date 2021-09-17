function minimumAbsoluteDifference(array) {
  let result = Infinity;

  for (let i = 0; i < array.length - 1; i++) {
    const currentValue = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const nextValue = array[j];

      const diff = Math.abs(currentValue - nextValue);

      if (diff < result) result = diff;
    }
  }

  return result;
}
