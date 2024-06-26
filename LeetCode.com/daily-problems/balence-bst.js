function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function balanceBST(root) {
  const sortedNodes = [];

  const inOrder = (node) => {
    if (!node) return;
    inOrder(node.left);
    sortedNodes.push(node.val);
    inOrder(node.right);
  };

  const build = (start, end) => {
    if (start >= end) return null;
    const middle = Math.floor((start + end) / 2);
    const current = new TreeNode(sortedNodes[middle]);
    current.left = build(start, middle);
    current.right = build(middle + 1, end);
    return current;
  };

  inOrder(root);
  return build(0, sortedNodes.length);
}

const tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.right = new TreeNode(3);
tree.right.right.right = new TreeNode(4);

console.log(balanceBST(tree));

const tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);

console.log(balanceBST(tree2));
