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

const getNodeValues = (root) => {
  const result = [];

  const walkThrough = (node) => {
    result.push(node.val);
    if (node.left) walkThrough(node.left);
    if (node.right) walkThrough(node.right);
  };

  walkThrough(root);

  return result;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  const nodeValues = getNodeValues(root);
  return nodeValues.sort((a, b) => a - b)[k - 1];
};

const root = new TreeNode(5);
root.insert(3);
root.insert(6);

root.insert(2);
root.insert(4);
root.insert(1);

console.log(JSON.stringify(kthSmallest(root, 3), null, 2));
