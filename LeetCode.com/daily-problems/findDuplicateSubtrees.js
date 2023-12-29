function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = (root) => {
  const map = new Map();
  const result = [];

  const traverse = (node) => {
    if (!node) return '#';
    const subtree = `${node.val}.${traverse(node.left)}.${traverse(
      node.right
    )}`;
    map.set(subtree, (map.get(subtree) || 0) + 1);
    if (map.get(subtree) === 2) result.push(node);
    return subtree;
  };

  traverse(root);

  return result;
};

const bt = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4))
);

const bt2 = new TreeNode(
  2,
  new TreeNode(1, new TreeNode(11, new TreeNode(1))),
  new TreeNode(11, new TreeNode(1))
);

console.log(findDuplicateSubtrees(bt2));
