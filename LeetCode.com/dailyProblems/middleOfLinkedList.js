/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let len = 0;
  let ptr = head;
  while (ptr) {
    ptr = ptr.next;
    len++;
  }

  let middle = len % 2 == 0 ? len / 2 + 1 : Math.ceil(len / 2);

  for (let i = 0; i < middle - 1; i++) head = head.next;

  return head;
};
