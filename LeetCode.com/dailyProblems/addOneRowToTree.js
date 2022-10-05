function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = (root, val, depth) => {
  if (depth === 1) {
    const newRoot = new TreeNode(val);
    newRoot.left = root;
    return newRoot;
  }
  const traverse = (node, currentDepth = 1) => {
    if (currentDepth > depth) return;
    if (currentDepth === depth - 1) {
      const newLeft = new TreeNode(val);
      const newRight = new TreeNode(val);

      newLeft.left = node.left;
      newRight.right = node.right;
      node.left = newLeft;
      node.right = newRight;
    }

    if (node?.left) traverse(node.left, currentDepth + 1);
    if (node?.right) traverse(node.right, currentDepth + 1);
  };

  traverse(root);
  return root;
};

const bt = new TreeNode(4);
bt.left = new TreeNode(2);
bt.right = new TreeNode(6);
bt.left.left = new TreeNode(3);
bt.left.right = new TreeNode(1);
bt.right.left = new TreeNode(5);

console.log(addOneRow(bt, 1, 1));
