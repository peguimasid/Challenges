function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.push = (val, root = null) => {
  let currentNode = root;

  if (!root) return new ListNode(val);

  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = new ListNode(val);

  return root;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let odd = new ListNode();
  let even = new ListNode();
  let count = 0;

  while (head) {
    count % 2 == 0 ? even.push(head.val, even) : odd.push(head.val, odd);
    head = head.next;
    count++;
  }
  even = even.next;
  odd = odd.next;

  while (odd) {
    even.push(odd.val, even);
    odd = odd.next;
  }

  return even;
};

// prettier-ignore
const ll = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// prettier-ignore
const ll2 = new ListNode(2, new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7)))))));

console.log(oddEvenList(ll2));
