function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
function countPairs(root, distance) {
  const adjList = {};
  const leafNodes = new Set();

  const dfs = (node) => {
    if (!adjList[node.val]) {
      adjList[node.val] = [];
    }
    if (!node.left && !node.right) {
      leafNodes.add(node.val);
    }
    if (node.left) {
      if (!adjList[node.left.val]) adjList[node.left.val] = [];
      adjList[node.left.val].push(node.val);
      adjList[node.val].push(node.left.val);
      dfs(node.left);
    }
    if (node.right) {
      if (!adjList[node.right.val]) adjList[node.right.val] = [];
      adjList[node.right.val].push(node.val);
      adjList[node.val].push(node.right.val);
      dfs(node.right);
    }
  };

  dfs(root);

  let result = 0;

  const findAnotherGoodLeaf = (value, currentDistance, visited) => {
    if (currentDistance > distance) return;
    if (!visited.has(value) && leafNodes.has(value)) result++;
    visited.add(value);
    for (const neighbor of adjList[value]) {
      findAnotherGoodLeaf(neighbor, currentDistance + 1, visited);
    }
  };

  for (const leafValue of leafNodes.values()) {
    findAnotherGoodLeaf(leafValue, 0, new Set().add(leafValue));
  }

  return result / 2;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
console.log(countPairs(tree1, 3)); // 1

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);
tree2.left.left = new TreeNode(4);
tree2.left.right = new TreeNode(5);
tree2.right.left = new TreeNode(6);
tree2.right.right = new TreeNode(7);
console.log(countPairs(tree2, 3)); // 2
