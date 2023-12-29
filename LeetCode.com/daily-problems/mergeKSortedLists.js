function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const push = (list, val) => {
  if (!list) return new ListNode(val);
  let temp = list;
  while (list.next) {
    list = list.next;
  }
  list.next = new ListNode(val);
  return temp;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  let result = null;

  while (lists.some((node) => node)) {
    let smallListValueIndex = -1;
    let smallValue = Infinity;
    for (let i = 0; i < lists.length; i++) {
      if (lists?.[i]?.val < smallValue) {
        smallValue = lists[i].val;
        smallListValueIndex = i;
      }
    }
    result = push(result, lists[smallListValueIndex].val);
    lists[smallListValueIndex] = lists?.[smallListValueIndex]?.next;
  }

  return result;
};

const listOne = new ListNode(1, new ListNode(4, new ListNode(5)));
const listTwo = new ListNode(1, new ListNode(3, new ListNode(4)));
const listThree = new ListNode(2, new ListNode(6));

const result = mergeKLists([listOne, listTwo, listThree]);

console.log(JSON.stringify(result));
// [1,1,2,3,4,4,5,6]
