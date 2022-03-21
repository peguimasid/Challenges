function createPhoneNumber(numbers) {
  return numbers
    .map((number, index) => {
      if (index === 0) return `(${number}`;
      if (index === 2) return `${number})`;
      if (index === 3) return ` ${number}`;
      if (index === 6) return `-${number}`;
      return number;
    })
    .join('');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
