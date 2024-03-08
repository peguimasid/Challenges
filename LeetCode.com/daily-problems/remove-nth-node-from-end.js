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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const len = listLen(head);
  const toRemoveIndex = len - n;

  if (head.next === null && n === 1) return null;
  if (toRemoveIndex === 0) return head.next;

  let prev = head;
  let curr = head?.next;

  let currentIndex = 0;

  while (currentIndex < toRemoveIndex - 1) {
    curr = curr?.next;
    prev = prev?.next;
    currentIndex++;
  }

  prev.next = curr.next;

  return head;
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(removeNthFromEnd(head, 2)); // [1, 2, 3, 5]

const head2 = new ListNode(1);
console.log(removeNthFromEnd(head2, 1)); // []

const head3 = new ListNode(1, new ListNode(2));
console.log(removeNthFromEnd(head3, 1)); // [1]

const head4 = new ListNode(1, new ListNode(2));
console.log(removeNthFromEnd(head4, 2)); // [2]
