function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = (root, p, q) => {
  let result;

  const traverse = (node) => {
    if (!node) return false;

    const foundNode = node.val === p.val || node.val === q.val;

    const foundInLeft = traverse(node.left);
    const foundInRight = traverse(node.right);

    if (
      (foundInLeft && foundInRight) ||
      (foundInLeft && foundNode) ||
      (foundInRight && foundNode)
    ) {
      result = node;
      return true;
    }

    return foundNode || foundInLeft || foundInRight;
  };
  traverse(root);

  return result;
};

const q = new TreeNode(4);
const p = new TreeNode(
  5,
  new TreeNode(6),
  new TreeNode(2, new TreeNode(7), new TreeNode(4))
);

const bt = new TreeNode(
  3,
  p,
  new TreeNode(1, new TreeNode(0), new TreeNode(8))
);

console.log(lowestCommonAncestor(bt, p, q));
