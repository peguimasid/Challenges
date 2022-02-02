function countDevelopers(list) {
  return list.reduce(
    (acc, { continent, language }) =>
      (acc += continent === 'Europe' && language === 'JavaScript' ? 1 : 0),
    0
  );
}
