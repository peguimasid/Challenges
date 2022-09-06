function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const childNodesContainsOne = (node) => {
  if (!node) return false;
  if (node.val === 1) return true;

  return childNodesContainsOne(node.left) || childNodesContainsOne(node.right);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const pruneTree = (root) => {
  if (!childNodesContainsOne(root)) {
    root = null;
    return root;
  }
  const traverse = (node) => {
    let removeLeft = false;
    let removeRight = false;
    if (!childNodesContainsOne(node.left)) {
      node.left = null;
      removeLeft = true;
    }
    if (!childNodesContainsOne(node.right)) {
      node.right = null;
      removeRight = true;
    }
    if (!removeLeft && node?.left) traverse(node?.left);
    if (!removeRight && node?.right) traverse(node?.right);
  };

  traverse(root);

  return root;
};

const bt = new TreeNode(
  0,
  null,
  new TreeNode(0, new TreeNode(0), new TreeNode(0))
);

const bt2 = new TreeNode(
  1,
  new TreeNode(0, new TreeNode(0), new TreeNode(1)),
  new TreeNode(1, new TreeNode(0), new TreeNode(1))
);

console.log(pruneTree(bt));
console.log(pruneTree(bt2));
