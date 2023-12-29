function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const toArray = (head) => {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = (head) => {
  if (!head) return null;
  const arr = toArray(head);

  const generateTree = (array, start, end) => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(array[mid]);
    root.left = generateTree(array, start, mid - 1);
    root.right = generateTree(array, mid + 1, end);
    return root;
  };

  return generateTree(arr, 0, arr.length - 1);
};

const list = new ListNode(
  0,
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  )
);

// console.log(sortedListToBST(list));

const ll = new ListNode(
  -10,
  new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9))))
);

console.log(sortedListToBST(ll));
