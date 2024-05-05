function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

const list = new ListNode(4);
list.next = new ListNode(5);
list.next.next = new ListNode(1);
list.next.next.next = new ListNode(9);

console.log(deleteNode(list.next)); // 4 -> 1 -> 9

console.log(list);
