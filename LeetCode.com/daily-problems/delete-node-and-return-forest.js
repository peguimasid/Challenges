function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
function delNodes(root, to_delete) {
  const toDeleteSet = new Set(to_delete);

  const result = [];

  const postOrder = (node) => {
    if (!node) return null;

    node.left = postOrder(node.left);
    node.right = postOrder(node.right);

    const shouldDelete = toDeleteSet.has(node.val);

    if (node.val === root.val && !shouldDelete) {
      result.push(node);
    }

    if (shouldDelete) {
      if (node.left) result.push(node.left);
      if (node.right) result.push(node.right);
      return null;
    }

    return node;
  };

  postOrder(root);

  return result;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.right = new TreeNode(5);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(7);
console.log(delNodes(tree1, [3, 5])); // [[1, 2, null, 4], [6], [7]]
