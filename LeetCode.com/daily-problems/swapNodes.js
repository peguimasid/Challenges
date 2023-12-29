function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const listSize = (list) => {
  let result = 0;

  while (list.next) {
    list = list.next;
    result++;
  }

  return result;
};

const listAt = (list, index) => {
  let count = 0;

  while (count < index - 1) {
    list = list.next;
    count++;
  }

  return list.val;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
  const leftIndex = k;
  const rightIndex = listSize(head) - k + 1;

  let tempL = listAt(head, leftIndex);
  let tempR = listAt(head, rightIndex + 1);

  let temp = head;

  let count = 0;

  while (temp) {
    if (count === leftIndex - 1) temp.val = tempR;
    if (count === rightIndex) temp.val = tempL;
    count++;
    temp = temp.next;
  }

  return head;
};

const list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(JSON.stringify(swapNodes(list, 2), null, 2));
