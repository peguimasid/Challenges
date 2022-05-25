function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  let start = new ListNode(null);
  let current;

  current = start;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.val = list1.val;
      current.next = new ListNode();
      current = current.next;
      list1 = list1.next;
    } else {
      current.val = list2.val;
      current.next = new ListNode();
      current = current.next;
      list2 = list2.next;
    }
  }

  while (list1) {
    current.val = list1.val;
    if (list1.next) current.next = new ListNode();
    current = current.next;
    list1 = list1.next;
  }

  while (list2) {
    current.val = list2.val;
    if (list2.next) current.next = new ListNode();
    current = current.next;
    list2 = list2.next;
  }

  return start;
};

// const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l1 = new ListNode();
const l2 = new ListNode();
// 1,1,2,3,4,4

console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 2));
