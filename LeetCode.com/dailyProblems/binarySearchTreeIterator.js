function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.queue = [];

  const inOrder = (node) => {
    if (node.left) inOrder(node.left);
    this.queue.push(node.val);
    if (node.right) inOrder(node.right);
  };

  inOrder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.queue.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !!this.queue.length;
};

/**
 * @return {TreeNode}
 */
TreeNode.prototype.insert = function (val, root = this) {
  if (!root) return new TreeNode(val);

  if (val < root.val) root.left = this.insert(val, root.left);
  if (val > root.val) root.right = this.insert(val, root.right);

  return root;
};

const root = new TreeNode(7);
root.insert(3).insert(15).insert(9).insert(20);

var obj = new BSTIterator(root);
var param_1 = obj.next();
var param_2 = obj.hasNext();

console.log(obj, param_1, param_2);
