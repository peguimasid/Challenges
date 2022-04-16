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

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  const traverse = (node, rightVal) => {
    if (!node) return;
    traverse(node.right, rightVal);
    node.val += node.right ? node.right.max : rightVal;
    traverse(node.left, node.val);
    node.max = node.left ? node.left.max : node.val;
  };

  traverse(root, 0);
  return root;
};

const root = new TreeNode(4);
root.insert(1);
root.insert(6);

root.insert(0);
root.insert(2);
root.insert(3);

root.insert(5);
root.insert(7);
root.insert(8);

console.log(JSON.stringify(convertBST(root), null, 2));
