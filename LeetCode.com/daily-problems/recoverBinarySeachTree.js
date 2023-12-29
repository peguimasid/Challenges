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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const data = {
    prev: null,
    first: null,
    second: null,
  };

  const helper = (node) => {
    if (!node) return;

    helper(node.left);

    if (data.prev && data.prev.val >= node.val) {
      if (!data.first) data.first = data.prev;
      data.second = node;
    }

    data.prev = node;

    helper(node.right);
  };

  helper(root);

  let temp;
  temp = data.first.val;
  data.first.val = data.second.val;
  data.second.val = temp;
};

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);

recoverTree(root);

console.log(JSON.stringify(root, null, 2));
