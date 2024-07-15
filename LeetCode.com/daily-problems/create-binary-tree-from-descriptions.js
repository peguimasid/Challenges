function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
function createBinaryTree(descriptions) {
  const childrenSet = new Set();
  const childrenMap = new Map();

  for (const [parent, child, isLeft] of descriptions) {
    if (!childrenMap.has(parent)) childrenMap.set(parent, [null, null]);
    childrenSet.add(child);
    childrenMap.get(parent)[isLeft ? 0 : 1] = child;
  }

  const root = [...childrenMap.keys()].reduce((acc, parent) => {
    if (!childrenSet.has(parent)) return parent;
    return acc;
  }, null);

  const buildTree = (currentNode) => {
    const node = new TreeNode(currentNode);
    if (childrenMap.has(currentNode)) {
      const [left, right] = childrenMap.get(currentNode);
      if (left) node.left = buildTree(left);
      if (right) node.right = buildTree(right);
    }
    return node;
  };

  return buildTree(root);
}

// prettier-ignore
console.log(createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]))

// prettier-ignore
console.log(createBinaryTree([[1,2,1],[2,3,0],[3,4,1]]))
