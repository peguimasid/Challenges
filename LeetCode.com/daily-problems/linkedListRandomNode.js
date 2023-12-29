function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class Solution {
  constructor(head) {
    this.head = head;
  }

  getListSize() {
    let result = 0;
    let temp = this.head;
    while (temp) {
      result++;
      temp = temp.next;
    }

    return result;
  }

  getRandom() {
    const randomPosition = Math.floor(Math.random() * this.getListSize());

    let currNode = this.head;
    let currentPosition = 0;

    while (currentPosition < randomPosition) {
      currNode = currNode.next;
      currentPosition++;
    }

    return currNode.val;
  }
}

const linkedList = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
);

const solution = new Solution(linkedList);

console.log(solution.getRandom());
console.log(solution.getRandom());
console.log(solution.getRandom());
console.log(solution.getRandom());
