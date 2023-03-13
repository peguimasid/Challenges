function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) return true;

  const check = (leftNode, rightNode) => {
    const someIsNull = (!leftNode && rightNode) || (!rightNode && leftNode);
    const valueIsNotEqual =
      leftNode && rightNode && leftNode.val !== rightNode.val;
    if (someIsNull || valueIsNotEqual) {
      return false;
    }
    if (leftNode && rightNode) {
      return (
        check(leftNode.left, rightNode.right) &&
        check(leftNode.right, rightNode.left)
      );
    }
    return true;
  };

  return check(root.left, root.right);
};

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(tree));
