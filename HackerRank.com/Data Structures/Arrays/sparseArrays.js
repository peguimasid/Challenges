function matchingStrings(strings, queries) {
  return queries.reduce(
    (acc, query) => acc.concat(strings.filter((str) => str === query).length),
    []
  );
}

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));

function matchingStrings(strings, queries) {
  let result = [];

  for (let query of queries) {
    result.push(strings.filter((str) => str === query).length);
  }

  return result;
}
