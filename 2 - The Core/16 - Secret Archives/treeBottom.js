function treeBottom(tree) {
  let depth = 0
  let level = 0;

  return tree.match(/\(|\)|\d+/g).reduce((result, char) => {
    if (char == '(') ++depth
    else if (char == ')') --depth
    else if (level == depth) result.push(char | 0)
    else if (level < depth) {
      result = [char | 0]
      level = depth
    }
    return result
  }, [])
}

let tree = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))"

console.log(treeBottom(tree))