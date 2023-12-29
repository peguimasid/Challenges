function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = (root) => {
  let result = 0;

  const traverse = (node, previousNodes = []) => {
    if (Math.max(...previousNodes) <= node.val) result++;
    if (node.left) traverse(node.left, [...previousNodes, node.val]);
    if (node.right) traverse(node.right, [...previousNodes, node.val]);
  };
  traverse(root);

  return result;
};

const bt = new TreeNode(3);
bt.left = new TreeNode(1);
bt.right = new TreeNode(4);
bt.left.left = new TreeNode(3);
bt.right.left = new TreeNode(1);
bt.right.right = new TreeNode(5);

console.log(goodNodes(bt));
