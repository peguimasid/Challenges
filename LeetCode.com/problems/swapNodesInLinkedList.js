function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let current = head;
  let traverseCount = 0;

  while (current) {
    if (traverseCount % 2 === 0 && current.next) {
      let temp = current.val;
      current.val = current.next.val;
      current.next.val = temp;
    }

    current = current.next;
    traverseCount++;
  }

  return head;
};

let ll = new ListNode(1);
ll.next = new ListNode(2);
ll.next.next = new ListNode(3);
ll.next.next.next = new ListNode(4);

console.log(swapPairs(ll));
