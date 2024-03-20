function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeInBetween(list1, a, b, list2) {
  let temp = list1;
  let count = 0;

  let pointer1 = null;
  let pointer2 = null;

  while (++count < a) temp = temp.next;
  pointer1 = temp;
  while (count++ <= b + 1) temp = temp.next;
  pointer2 = temp;

  pointer1.next = list2;
  while (list2.next) list2 = list2.next;
  list2.next = pointer2;

  return list1;
}

// prettier-ignore
const l1 = new ListNode(10, new ListNode(1, new ListNode(13, new ListNode(6, new ListNode(9, new ListNode(5))))));
const l2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002)));

console.log(mergeInBetween(l1, 3, 4, l2)); // [10, 1, 13, 1000000, 1000001, 1000002, 5]
