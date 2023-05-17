function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const listToArray = (list) => {
  const result = [];

  while (list) {
    result.push(list.val);
    list = list.next;
  }

  return result;
};

/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = (head) => {
  const array = listToArray(head);

  let result = 0;

  for (let i = 0; i < array.length / 2; i++) {
    const left = array[i];
    const right = array[array.length - i - 1];

    result = Math.max(result, left + right);
  }

  return result;
};

const list = new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1))));

console.log(pairSum(list));
