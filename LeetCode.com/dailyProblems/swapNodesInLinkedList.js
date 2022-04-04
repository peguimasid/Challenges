//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const transformLinkedListToArray = (linkedList) => {
  let result = [];

  let current = linkedList;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

const transformArrayToLinkedList = (array) => {
  let head = new ListNode(array[0]);
  let result = head;

  for (let i = 1; i < array.length; i++) {
    const val = array[i];
    result.next = new ListNode(val);
    result = result.next;
  }

  return head;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
  const listToArray = transformLinkedListToArray(head);
  let swapIndex = k - 1;

  let temp = listToArray[swapIndex];
  listToArray[swapIndex] = listToArray[listToArray.length - 1 - swapIndex];
  listToArray[listToArray.length - 1 - swapIndex] = temp;

  return transformArrayToLinkedList(listToArray);
};

let list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(swapNodes(list, 2));
