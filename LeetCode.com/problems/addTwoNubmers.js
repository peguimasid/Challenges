function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const transformLinkedListToArray = (startNode) => {
  const result = [];

  while (startNode) {
    result.push(startNode.val);
    startNode = startNode.next;
  }

  return result;
};

const transformArrayToLinkedList = (array) => {
  let head = new ListNode();
  const result = head;

  for (let i = array.length - 1; i >= 0; i--) {
    head.val = array[i];
    if (i !== 0) head.next = new ListNode();
    head = head.next;
  }

  return result;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l1Array = transformLinkedListToArray(l1);
  const l2Array = transformLinkedListToArray(l2);
  const sum = (
    BigInt(l1Array.reverse().join('')) + BigInt(l2Array.reverse().join(''))
  )
    .toString()
    .split('');

  return transformArrayToLinkedList(sum);
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// const l1 = new ListNode(
//   9,
//   new ListNode(
//     9,
//     new ListNode(
//       9,
//       new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
//     )
//   )
// );
// const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

console.log(addTwoNumbers(l1, l2));
// console.log(JSON.stringify(addTwoNumbers(l1, l2), null, 2));
