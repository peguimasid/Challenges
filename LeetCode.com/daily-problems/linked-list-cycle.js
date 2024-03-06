function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  while (head) {
    if (head.visited) return true;
    head.visited = true;
    head = head.next;
  }

  return false;
}

const list = new ListNode(3);
list.next = new ListNode(2);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(-4);
list.next.next.next.next = list.next;

console.log(hasCycle(list)); // true

const list2 = new ListNode(1);
list2.next = new ListNode(2);
list2.next.next = list2;

console.log(hasCycle(list2)); // true

const list3 = new ListNode(1);

console.log(hasCycle(list3)); // false
