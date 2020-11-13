const fileNaming = names => {
  const used = {};
  return names.map(name => {
      let newName = name;
      while (used[newName]) {
          newName = `${name}(${used[name]++})`;
      }
      used[newName] = 1;
      return newName;
  });
};

console.log(fileNaming(["doc", "doc", "image", "doc(1)", "doc"]))