function convertQueryToMap(query) {
  const result = {};
  const queries = query.split('&');
  if (!query.length) return result;

  for (let query of queries) {
    let current = result;
    const [keys, value] = query.split('=');

    const keysSplited = keys.split('.');

    for (let i = 0; i < keysSplited.length; i++) {
      const isLast = i === keysSplited.length - 1;

      const key = keysSplited[i];

      if (isLast) current[key] = decodeURIComponent(value);
      if (!isLast) {
        if (!current[key]) current[key] = {};
        current = current[key];
      }
    }
  }

  return result;
}

console.log(
  convertQueryToMap(
    'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
  )
);
