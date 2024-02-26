function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const t2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(t1, t2)); // true

const t3 = new TreeNode(1, new TreeNode(2), null);
const t4 = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(t3, t4)); // false
