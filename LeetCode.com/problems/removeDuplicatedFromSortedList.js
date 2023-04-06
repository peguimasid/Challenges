function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let temp = head;

  let del = true;
  while (del) {
    del = false;
    let curr = head;
    while (curr) {
      if (curr.val === curr?.next?.val) {
        curr.next = curr.next.next;
        del = true;
      }
      curr = curr.next;
    }
  }

  return temp;
};

const list = new ListNode(1, new ListNode(1, new ListNode(2)));

console.log(deleteDuplicates(list));
