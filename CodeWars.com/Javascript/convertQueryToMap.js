/**
 * @param {string} query
 * @return {object}
 */
const convertQueryToMap = (query) => {
  return query.split('&').reduce((map, curr) => {
    const [keyPath, value] = curr.split('=').map(decodeURIComponent);

    if (!value) return map;

    const keysSplitted = keyPath.split('.');
    const lastKey = keysSplitted.pop();
    const innerObject = keysSplitted.reduce((obj, key) => {
      return obj[key] || (obj[key] = {});
    }, map);

    innerObject[lastKey] = value;

    return map;
  }, {});
};

console.log(convertQueryToMap(''));
// prettier-ignore
console.log(convertQueryToMap('user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'));
