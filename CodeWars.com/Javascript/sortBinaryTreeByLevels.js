function TreeNode(value, left = null, right = null) {
  this.value = value;
  this.left = left;
  this.right = right;
}

/**
 * @param {TreeNode} rootNode;
 * @returns {number[]};
 */
function treeByLevels(rootNode) {
  if (!rootNode) return [];
  let result = [];
  let queue = [rootNode];

  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode?.value);
    if (currentNode?.left) queue.push(currentNode.left);
    if (currentNode?.right) queue.push(currentNode.right);
  }

  return result;
}

const bt = new TreeNode(2);
bt.left = new TreeNode(8);
bt.right = new TreeNode(9);

bt.left.left = new TreeNode(1);
bt.left.right = new TreeNode(3);

bt.right.left = new TreeNode(4);
bt.right.right = new TreeNode(5);

console.log(treeByLevels(bt));
