function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  // https://leetcode.com/problems/palindrome-linked-list/?envType=daily-question&envId=2024-03-22
  // its actually an easy problem if you transform the linked list to an array or string
  // i'll try to solve in O(n) time and O(1) space
  //
  // My solution using string:
  // https://github.com/peguimasid/Challenges/blob/843858aa24075c4eac52193f084f47d8232e37c7/LeetCode.com/dailyProblems/isPalindromeLinkedList.js
}

// prettier-ignore
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1)))))); // true
// prettier-ignore
console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1))))))); // true
