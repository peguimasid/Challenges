/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = (paths) => {
  let map = {};

  for (const path of paths) {
    const [root, ...files] = path.split(' ');

    for (const file of files) {
      const [fileName, content] = file.split('(');
      if (!map[content]) map[content] = [];
      map[content].push(`${root}/${fileName}`);
    }
  }

  return Object.values(map).filter((value) => value.length > 1);
};

let paths = [
  'root/a 1.txt(abcd) 2.txt(efgh)',
  'root/c 3.txt(abcd)',
  'root/c/d 4.txt(efgh)',
  'root 4.txt(efgh)',
];

console.log(findDuplicate(paths));
// [
//   ['root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt'],
//   ['root/a/1.txt', 'root/c/3.txt'],
// ];
