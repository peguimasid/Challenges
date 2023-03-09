function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  if (!head || head.val === 1234321) return head;
  head.val = 1234321;
  return detectCycle(head.next);
};

const l1 = new ListNode(3);
const l2 = new ListNode(2);
const l3 = new ListNode(0);
const l4 = new ListNode(-4);
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l2;

console.log(detectCycle(l1).val); // 2

const ll1 = new ListNode(-1);
const ll2 = new ListNode(-7);
const ll3 = new ListNode(7);
const ll4 = new ListNode(-4);
const ll5 = new ListNode(19);
const ll6 = new ListNode(6);
const ll7 = new ListNode(-9);
const ll8 = new ListNode(-5);
const ll9 = new ListNode(-2);
const ll10 = new ListNode(-5);
ll1.next = ll2;
ll2.next = ll3;
ll3.next = ll4;
ll4.next = ll5;
ll5.next = ll6;
ll6.next = ll7;
ll7.next = ll8;
ll8.next = ll9;
ll9.next = ll10;
ll10.next = ll5;

console.log(detectCycle(ll1).val); // -9
