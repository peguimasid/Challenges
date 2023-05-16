function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  let curr = head;
  let next = curr?.next;

  while (curr && next) {
    let temp = curr.val;
    curr.val = next.val;
    next.val = temp;
    curr = curr?.next?.next;
    next = next?.next?.next;
  }

  return head;
};

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log(swapPairs(list));
