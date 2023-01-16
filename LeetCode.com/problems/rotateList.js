function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const genArrayFromList = (list) => {
  const result = [];

  while (list) {
    result.push(list.val);
    list = list.next;
  }

  return result;
};

const genListFromArray = (array) => {
  let result = new ListNode(array[0]);
  let aux = result;

  for (let i = 1; i < array.length; i++) {
    const current = new ListNode(array[i]);
    aux.next = current;
    aux = aux.next;
  }

  return result;
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  const array = genArrayFromList(head);
  if (array.length === k || !k || !head) return head;
  k %= array.length;
  return genListFromArray([
    ...array.slice(array.length - k),
    ...array.slice(0, array.length - k),
  ]);
};

const list1 = new ListNode(1, new ListNode(2));

console.log(rotateRight(list1, 2));

const list11 = new ListNode(1, new ListNode(2));

console.log(rotateRight(list11, 1));

const list2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(rotateRight(list2, 2));

const list3 = new ListNode(0, new ListNode(1, new ListNode(2)));

console.log(rotateRight(list3, 4));
