function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const getLinkedListString = (list) => {
  let curr = list;
  let result = '';

  while (curr) {
    result += curr.val;
    curr = curr.next;
  }

  return result;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  const linkedString = getLinkedListString(head);

  return linkedString.split('').reverse().join('') === linkedString;
};

const list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

console.log(isPalindrome(list));
