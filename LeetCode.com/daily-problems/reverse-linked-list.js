function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;

  while (head) {
    [head.next, prev, head] = [prev, head, head.next];
  }

  return prev;
}

// prettier-ignore
const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(reverseList(l1)); // [5, 4, 3, 2, 1]
