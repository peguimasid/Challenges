function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  if (!head?.next) return null;

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast?.next) {
    [fast, slow.next, prev, slow] = [fast.next.next, prev, slow, slow.next];
  }

  if (fast) slow = slow.next;

  while (prev && slow) {
    if (prev.val !== slow.val) return false;
    [prev, slow] = [prev.next, slow.next];
  }

  return true;
}

// prettier-ignore
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))))); // true
// [1,2,2,1]
// [1,2,1,2]

// prettier-ignore
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))))); // true
// [1,2,3,2,1]
// [1,2,3,1,2,3]
