function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function bstToGst(root) {
  let sum = 0;

  const inOrder = (node) => {
    if (node.right) inOrder(node.right);
    sum += node.val;
    node.val = sum;
    if (node.left) inOrder(node.left);
  };

  inOrder(root);
  return root;
}

const tree = new TreeNode(4);
tree.left = new TreeNode(1);
tree.left.left = new TreeNode(0);
tree.left.right = new TreeNode(2);
tree.left.right.right = new TreeNode(3);

tree.right = new TreeNode(6);
tree.right.left = new TreeNode(5);
tree.right.right = new TreeNode(7);
tree.right.right.right = new TreeNode(8);

console.log(bstToGst(tree));
