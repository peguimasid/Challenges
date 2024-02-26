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
  const pNodes = [];
  const qNodes = [];

  function traverse(node, arr) {
    arr.push(node?.val ?? null);
    if (node?.left || node?.right) {
      traverse(node?.left, arr);
      traverse(node?.right, arr);
    }
  }

  traverse(p, pNodes);
  traverse(q, qNodes);

  return pNodes.join(',') === qNodes.join(',');
}

const t1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const t2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(t1, t2)); // true

const t3 = new TreeNode(1, new TreeNode(2), null);
const t4 = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(t3, t4)); // false
