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
  if (depth === 1) return new TreeNode(val, root);
  const traverse = (node, d = 1) => {
    if (d === depth - 1) {
      node.left = new TreeNode(val, node.left);
      node.right = new TreeNode(val, null, node.right);
      return;
    }

    if (node?.left) traverse(node.left, d + 1);
    if (node?.right) traverse(node.right, d + 1);
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

console.log(addOneRow(bt, 1, 2));
