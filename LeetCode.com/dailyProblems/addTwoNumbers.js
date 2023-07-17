function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const linkedListToArray = (list) => {
  const result = [];

  while (list) {
    result.push(list.val);
    list = list.next;
  }

  return result;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const l1Array = linkedListToArray(l1);
  const l2Array = linkedListToArray(l2);

  const sum = (BigInt(l1Array.join('')) + BigInt(l2Array.join(''))).toString();

  const acc = new ListNode();
  let current = acc;

  for (let i = 0; i < sum.length; i++) {
    current.val = Number(sum[i]);
    current.next = i === sum.length - 1 ? null : new ListNode();
    current = current.next;
  }

  return acc;
};

const list1 = new ListNode(
  7,
  new ListNode(2, new ListNode(4, new ListNode(3)))
);
const list2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(list1, list2)); // 7 -> 8 -> 0 -> 7

// [7, 2, 4, 3]
// [0, 5, 6, 4]
//  7  8  0  7
