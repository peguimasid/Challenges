function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
function leafSimilar(root1, root2) {
  function getLeafNodes(node, result = []) {
    if (!node.left && !node.right) result.push(node.val);
    if (node?.left) getLeafNodes(node.left, result);
    if (node?.right) getLeafNodes(node.right, result);
    return result;
  }

  const leafNodes1 = getLeafNodes(root1);
  const leafNodes2 = getLeafNodes(root2);

  if (leafNodes1.length !== leafNodes2.length) {
    return false;
  }

  for (let i = 0; i < leafNodes1.length; i++) {
    if (leafNodes1[i] !== leafNodes2[i]) return false;
  }

  return true;
}

const root1 = new TreeNode(3);
root1.left = new TreeNode(5);
root1.right = new TreeNode(1);
root1.left.left = new TreeNode(6);
root1.left.right = new TreeNode(2);
root1.left.right.left = new TreeNode(7);
root1.left.right.right = new TreeNode(4);
root1.right.left = new TreeNode(9);
root1.right.right = new TreeNode(8);

const root2 = new TreeNode(3);
root2.left = new TreeNode(5);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(6);
root2.left.right = new TreeNode(7);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(2);
root2.right.right.left = new TreeNode(9);
root2.right.right.right = new TreeNode(8);

console.log(leafSimilar(root1, root2));
