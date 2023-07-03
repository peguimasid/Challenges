/**
 * @param {string} query
 * @return {object}
 */
const convertQueryToMap = (query) => {
  if (!query) return {};
  return query.split('&').reduce((acc, curr) => {
    const [keyPath, value] = curr.split('=').map(decodeURIComponent);

    let keyMap = acc;

    const keyPathSplitted = keyPath.split('.');

    for (let i = 0; i < keyPathSplitted.length; i++) {
      const key = keyPathSplitted[i];
      const isLast = i === keyPathSplitted.length - 1;
      if (!isLast) {
        if (!keyMap[key]) keyMap[key] = {};
        keyMap = keyMap[key];
      }
      if (isLast) keyMap[key] = value;
    }

    return acc;
  }, {});
};

console.log(
  convertQueryToMap(
    'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
  )
);
