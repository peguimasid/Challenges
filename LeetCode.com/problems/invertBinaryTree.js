function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

TreeNode.prototype.insert = function (val, root = this) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = this.insert(val, root.left);
  if (val > root.val) root.right = this.insert(val, root.right);

  return root;
};

const swapNodes = (node) => {
  let temp = node.right;
  node.right = node.left;
  node.left = temp;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  swapNodes(root);
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// const root = new TreeNode(4);
// root.insert(2);
// root.insert(7);

// root.insert(1);
// root.insert(3);
// root.insert(6);
// root.insert(9);
const root = new TreeNode(1);
root.insert(2);

console.log(JSON.stringify(invertTree(root), null, 2));
