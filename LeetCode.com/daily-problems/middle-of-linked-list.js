function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function listLen(head) {
  let result = 0;

  while (head) {
    result++;
    head = head.next;
  }

  return result;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  const length = listLen(head);

  let count = 0;

  while (count++ < Math.ceil(length / 2) - 1) {
    head = head.next;
  }

  return length % 2 === 0 ? head.next : head;
}

// prettier-ignore
const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(middleNode(l1)); // 3

// prettier-ignore
const l2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
console.log(middleNode(l2)); // 4
