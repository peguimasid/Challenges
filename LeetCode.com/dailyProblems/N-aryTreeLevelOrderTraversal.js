// Definition for a Node.
function TreeNode(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {TreeNode|null} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    let level = [];

    while (size--) {
      const currentNode = queue.shift();
      level.push(currentNode.val);
      if (currentNode?.children?.length) {
        queue.push(...currentNode.children);
      }
    }
    result.push(level);
  }

  return result;
};

const bt = new TreeNode(1, [
  new TreeNode(3, [new TreeNode(5, []), new TreeNode(6, [])]),
  new TreeNode(2, []),
  new TreeNode(4, []),
]);

console.log(levelOrder(bt));
