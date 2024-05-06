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
  while (head) [head.next, prev, head] = [prev, head, head.next];
  return prev;
}

function addNode(head, value) {
  const newNode = new ListNode(value);

  if (!head) {
    head = newNode;
    return head;
  }

  newNode.next = head;
  head = newNode;

  return newNode;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeNodes(head) {
  let max = -Infinity;

  let list = reverseList(head);
  let result = null;

  while (list) {
    if (list.val >= max) {
      result = addNode(result, list.val);
    }
    max = Math.max(max, list.val);
    list = list.next;
  }

  return result;
}

const ll1 = new ListNode(5);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(13);
ll1.next.next.next = new ListNode(3);
ll1.next.next.next.next = new ListNode(8);

console.log(removeNodes(ll1)); // 13 -> 8

const ll2 = new ListNode(1);
ll2.next = new ListNode(1);
ll2.next.next = new ListNode(1);
ll2.next.next.next = new ListNode(1);

console.log(removeNodes(ll2)); // 1 -> 1 -> 1 -> 1
